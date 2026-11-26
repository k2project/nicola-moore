import { isValidElement } from 'react';

// Block elements get a space around them so adjacent paragraphs don't merge.
const BLOCK_TAGS = new Set([
    'p',
    'div',
    'li',
    'br',
    'blockquote',
    'h1',
    'h2',
    'h3',
    'h4',
]);

// Text content of a JSX tree (e.g. an FAQ answer) on a single line.
// Only walks host elements and fragments: components are not rendered.
export function toPlainText(node) {
    if (node == null || typeof node === 'boolean') return '';
    if (typeof node === 'string' || typeof node === 'number')
        return String(node);
    if (Array.isArray(node)) return node.map(toPlainText).join('');
    if (isValidElement(node)) {
        const text = toPlainText(node.props.children);
        return typeof node.type === 'string' && BLOCK_TAGS.has(node.type)
            ? ` ${text} `
            : text;
    }
    return '';
}

export const toSingleLine = (node) =>
    toPlainText(node).replace(/\s+/g, ' ').trim();

import Head from 'next/head';

// Renders schema.org structured data in <head>. A plain <script> (not
// next/script), with "<" escaped so content can't close the tag early.
//
// type="application/ld+json" is a data block: browsers never execute it, only
// search engines read it. dangerouslySetInnerHTML is required because React
// would otherwise HTML-escape the JSON (" -> &quot;), breaking it. Escaping
// every "<" as < means the HTML parser never sees "</script>", and JSON
// still reads it as "<". Always add JSON-LD through this component.
export default function JsonLd({ id, data }) {
    return (
        <Head>
            <script
                key={`jsonld-${id}`}
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(data).replace(/</g, '\\u003c'),
                }}
            />
        </Head>
    );
}

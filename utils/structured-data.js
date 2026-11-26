import { CONTACT_EMAIL, SITE_NAME, SITE_URL, absoluteUrl } from '../data/seo';
import { toSingleLine } from './plain-text';

// schema.org builders. Validate the output with the Rich Results Test
// (https://search.google.com/test/rich-results) and the Schema Markup
// Validator (https://validator.schema.org).

const CONTEXT = 'https://schema.org';
const PERSON_ID = `${SITE_URL}/#nicola-moore`;
const PRACTICE_ID = `${SITE_URL}/#practice`;
const WEBSITE_ID = `${SITE_URL}/#website`;

// Public profiles that confirm who Nicola is (shown on the About page).
const PROFILES = [
    'https://www.psychotherapy.org.uk/therapist/nicola-moore-iai0zaac/',
    'https://www.psychologytoday.com/gb/counselling/nicola-moore-london-eng/759637',
];

// Site-wide: the therapist, the practice and the website. Rendered in _app.
export function siteJsonLd() {
    return {
        '@context': CONTEXT,
        '@graph': [
            {
                '@type': 'Person',
                '@id': PERSON_ID,
                name: 'Nicola Moore',
                jobTitle: 'Psychotherapist',
                description:
                    'Fully qualified psychodynamic psychotherapist registered with UKCP and FPC.',
                url: absoluteUrl('/about'),
                image: absoluteUrl('/imgs/nicola_moore_small.png'),
                email: CONTACT_EMAIL,
                knowsAbout: [
                    'Psychotherapy',
                    'Counselling',
                    'Psychodynamic psychotherapy',
                    'Forensic psychotherapy',
                ],
                hasCredential: {
                    '@type': 'EducationalOccupationalCredential',
                    name: 'Postgraduate Diploma in Psychodynamic Psychotherapy Theory & Practice',
                    credentialCategory: 'degree',
                    recognizedBy: {
                        '@type': 'Organization',
                        name: 'WPF',
                    },
                },
                memberOf: [
                    {
                        '@type': 'Organization',
                        name: 'UK Council for Psychotherapy (UKCP)',
                        url: 'https://www.psychotherapy.org.uk/',
                    },
                    {
                        '@type': 'Organization',
                        name: 'Foundation for Psychotherapy and Counselling (FPC)',
                        url: 'https://www.thefpc.org.uk/',
                    },
                    {
                        '@type': 'Organization',
                        name: 'International Association for Forensic Psychotherapy (IAFP)',
                        url: 'https://www.forensicpsychotherapy.org/',
                    },
                ],
                worksFor: { '@id': PRACTICE_ID },
                sameAs: PROFILES,
            },
            {
                '@type': 'ProfessionalService',
                '@id': PRACTICE_ID,
                name: SITE_NAME,
                url: SITE_URL,
                image: absoluteUrl('/opengraph.jpg'),
                email: CONTACT_EMAIL,
                description:
                    'Counselling and psychotherapy in London and online with Nicola Moore, a UKCP-registered psychotherapist.',
                founder: { '@id': PERSON_ID },
                areaServed: { '@type': 'City', name: 'London' },
                priceRange: '£50–£85',
                currenciesAccepted: 'GBP',
                sameAs: PROFILES,
            },
            {
                '@type': 'WebSite',
                '@id': WEBSITE_ID,
                url: SITE_URL,
                name: SITE_NAME,
                inLanguage: 'en-GB',
                publisher: { '@id': PRACTICE_ID },
            },
        ],
    };
}

// FAQ page. JSX answers are flattened to plain text.
export function faqJsonLd(qas) {
    return {
        '@context': CONTEXT,
        '@type': 'FAQPage',
        mainEntity: qas.map(({ q, a }) => ({
            '@type': 'Question',
            name: q.trim(),
            acceptedAnswer: { '@type': 'Answer', text: toSingleLine(a) },
        })),
    };
}

import React from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQPageSchemaProps {
    faqs: FAQItem[];
}

const FAQPageSchema: React.FC<FAQPageSchemaProps> = ({ faqs }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default FAQPageSchema;

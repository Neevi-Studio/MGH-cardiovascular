import React from 'react';

const StructuredData = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalOrganization",
        "name": "MGH Cardiovascular Associates",
        "url": "https://www.mghcardio.com",
        "logo": "https://www.mghcardio.com/icon.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-973-653-5867",
            "contactType": "customer service",
            "areaServed": "US",
            "availableLanguage": "en"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "680 Broadway, Suite 503",
            "addressLocality": "Paterson",
            "addressRegion": "NJ",
            "postalCode": "07514",
            "addressCountry": "US"
        },
        "sameAs": [
            "https://www.facebook.com/people/MGH-Cardiovascular-Associates/61556637840134/"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};

export default StructuredData;

import React from 'react';

const StructuredData = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": ["MedicalOrganization", "LocalBusiness"],
        "name": "MGH Cardiovascular Associates",
        "url": "https://www.mghcardio.com",
        "logo": "https://www.mghcardio.com/icon.png",
        "image": "https://www.mghcardio.com/heart-care.jpg",
        "description": "Leading cardiovascular care center in Paterson, NJ offering comprehensive heart care, cardiac testing, and personalized treatment.",
        "priceRange": "$$",
        "telephone": "+1-973-653-5867",
        "email": "info@mghcardio.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "680 Broadway, Suite 503",
            "addressLocality": "Paterson",
            "addressRegion": "NJ",
            "postalCode": "07514",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.9168",
            "longitude": "-74.1718"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "17:00"
            }
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-973-653-5867",
            "contactType": "customer service",
            "areaServed": "US",
            "availableLanguage": ["en", "es"]
        },
        "areaServed": [
            "Paterson, NJ",
            "Passaic County",
            "Northern New Jersey"
        ],
        "paymentAccepted": "Cash, Credit Card, Insurance",
        "sameAs": [
            "https://www.facebook.com/people/MGH-Cardiovascular-Associates/61556637840134/",
            "https://www.instagram.com/mghcardio",
            "https://twitter.com/mghcardio",
            "https://www.linkedin.com/company/mgh-cardiovascular-associates"
        ],
        "medicalSpecialty": [
            "Cardiology",
            "Cardiovascular Medicine",
            "Interventional Cardiology"
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Cardiovascular Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "MedicalProcedure",
                        "name": "Echocardiogram"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "MedicalProcedure",
                        "name": "Stress Testing"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "MedicalProcedure",
                        "name": "Holter Monitoring"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "MedicalProcedure",
                        "name": "Cardiac Consultation"
                    }
                }
            ]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
    );
};

export default StructuredData;

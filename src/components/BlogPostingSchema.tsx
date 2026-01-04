import React from 'react';

interface BlogPostingSchemaProps {
    title: string;
    description: string;
    slug: string;
    image: string;
    author: string;
    datePublished: string;
    dateModified?: string;
    hashtags: string[];
}

const BlogPostingSchema: React.FC<BlogPostingSchemaProps> = ({
    title,
    description,
    slug,
    image,
    author,
    datePublished,
    dateModified,
    hashtags
}) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "mainEntity": {
            "@type": "Article",
            "headline": title,
            "description": description,
            "image": `https://www.mghcardio.com/cardiovascular-disease-banner.png`,
            "author": {
                "@type": "Person",
                "name": author,
                "jobTitle": "Cardiologist"
            },
            "publisher": {
                "@type": "MedicalOrganization",
                "name": "MGH Cardiovascular Associates",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.mghcardio.com/icon.png"
                }
            },
            "datePublished": datePublished,
            "dateModified": dateModified || datePublished,
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://www.mghcardio.com/blogs/${slug}`
            },
            "keywords": hashtags.join(", "),
            "articleSection": "Cardiovascular Health",
            "about": {
                "@type": "MedicalCondition",
                "name": "Cardiovascular Disease"
            }
        },
        "medicalAudience": {
            "@type": "MedicalAudience",
            "audienceType": "Patient"
        },
        "specialty": {
            "@type": "MedicalSpecialty",
            "name": "Cardiology"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default BlogPostingSchema;

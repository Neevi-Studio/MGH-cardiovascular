import React from 'react';

interface Review {
    text: string;
    nameAndRole: string;
}

interface ReviewSchemaProps {
    reviews: Review[];
}

const ReviewSchema: React.FC<ReviewSchemaProps> = ({ reviews }) => {
    // Calculate average rating (assuming all testimonials are positive, we'll use 5 stars)
    const totalReviews = reviews.length;
    const averageRating = 5.0;

    const schema = {
        "@context": "https://schema.org",
        "@type": "MedicalOrganization",
        "name": "MGH Cardiovascular Associates",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": averageRating.toString(),
            "reviewCount": totalReviews.toString(),
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": reviews.map(review => {
            // Extract name from nameAndRole (e.g., "Emma C., Patient" -> "Emma C.")
            const reviewerName = review.nameAndRole.split(',')[0].trim();

            return {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": reviewerName
                },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1"
                },
                "reviewBody": review.text
            };
        })
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default ReviewSchema;

import React from 'react';

interface VideoSchemaProps {
    name: string;
    description: string;
    thumbnailUrl: string;
    uploadDate: string;
    contentUrl?: string;
    embedUrl?: string;
}

const VideoSchema: React.FC<VideoSchemaProps> = ({
    name,
    description,
    thumbnailUrl,
    uploadDate,
    contentUrl,
    embedUrl
}) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": name,
        "description": description,
        "thumbnailUrl": thumbnailUrl,
        "uploadDate": uploadDate,
        "contentUrl": contentUrl,
        "embedUrl": embedUrl
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default VideoSchema;

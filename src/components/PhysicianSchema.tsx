import React from "react";

const PhysicianSchema = () => {
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Mirette Habib",
    url: "https://www.mghcardio.com",
    image: "https://www.mghcardio.com/images/mirette-habib.svg",
    description:
      "Board-certified cardiologist specializing in interventional cardiology, preventive cardiology, and women's heart health at MGH Cardiovascular Associates.",
    priceRange: "$$",
    telephone: "+1-973-653-5867",
    email: "info@mghcardio.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "680 Broadway, Suite 503",
      addressLocality: "Paterson",
      addressRegion: "NJ",
      postalCode: "07514",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "40.9168",
      longitude: "-74.1718",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    medicalSpecialty: [
      "Cardiology",
      "Interventional Cardiology",
      "Preventive Cardiology",
      "Women's Cardiac Health",
    ],
    subspecialties: [
      "Heart Disease Prevention",
      "Cardiac Diagnostics",
      "Vein Treatments",
      "In-Office Cardiac Testing",
    ],
    education: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Medical Degree",
        description: "Doctor of Medicine (MD)",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Board Certification",
        description: "FACC - Fellow of the American College of Cardiology",
      },
    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "American College of Cardiology",
      },
    ],
    worksFor: {
      "@type": "Organization",
      name: "MGH Cardiovascular Associates",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
    />
  );
};

export default PhysicianSchema;

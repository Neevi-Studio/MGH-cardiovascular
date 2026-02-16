import React from "react";

const HospitalSchema = () => {
  const hospitalSchema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: "MGH Cardiovascular Associates",
    alternateName: "MGH Heart Care",
    url: "https://www.mghcardio.com",
    logo: "https://www.mghcardio.com/logo.png",
    image: "https://www.mghcardio.com/heart-care.jpg",
    description:
      "Leading cardiovascular care center in Paterson, NJ offering comprehensive heart care, cardiac testing, interventional cardiology, and personalized treatment for heart disease.",
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
        dayOfWeek: "Monday",
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Tuesday",
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Thursday",
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:00",
        closes: "17:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-973-653-5867",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["en", "es"],
    },
    paymentAccepted: "Cash, Credit Card, Insurance",
    sameAs: [
      "https://www.facebook.com/people/MGH-Cardiovascular-Associates/61556637840134/",
      "https://www.instagram.com/mghcardio",
      "https://www.linkedin.com/company/mgh-cardiovascular-associates",
    ],
    medicalSpecialty: [
      "Cardiology",
      "Cardiovascular Medicine",
      "Interventional Cardiology",
      "Preventive Cardiology",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cardiovascular Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Echocardiogram",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Stress Testing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Holter Monitoring",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Cardiac Consultation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Vein Treatments",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Angioplasty",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Emma R.",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        reviewBody:
          "Dr. Habib and her team provided exceptional care. Highly recommend for anyone seeking heart health services in Paterson, NJ.",
      },
    ],
    areaServed: {
      "@type": "Place",
      name: "Paterson, NJ and surrounding areas including Clifton, Wayne, Paramus, and Northern New Jersey",
    },
    serviceType: [
      "Cardiac Diagnostics",
      "Interventional Cardiology",
      "Preventive Cardiology",
      "Women's Heart Health",
      "Vein Treatments",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalSchema) }}
    />
  );
};

export default HospitalSchema;

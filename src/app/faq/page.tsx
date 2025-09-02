"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FAQRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/#faq");
  }, [router]);
  return (
    <>
      <head>
        <title>Cardiology FAQs – Heart Health, Cardiac Testing & Patient Information</title>
        <meta name="description" content="Find answers to common questions about heart health, cardiac testing, insurance, and patient care at MGH Cardiovascular Associates." />
      </head>
    </>
  );
}

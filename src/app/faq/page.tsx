"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import type { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "Cardiology FAQs – Heart Health, Cardiac Testing & Patient Information | MGH Cardiovascular Associates",
  description: "Find answers to common questions about heart health, cardiac testing, insurance, and patient care at MGH Cardiovascular Associates."
});

export default function FAQRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/#faq");
  }, [router]);
  return null;
}

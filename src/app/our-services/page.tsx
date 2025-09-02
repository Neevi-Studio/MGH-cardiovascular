"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import type { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "Cardiology Services – In-Office Cardiac Testing, Preventative & Interventional Care | MGH Cardiovascular Associates",
  description: "Explore our full range of cardiology services, including in-office cardiac testing, preventative care, and interventional treatments for optimal heart health."
});

export default function OurServicesRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/#our-services");
  }, [router]);
  return null;
}

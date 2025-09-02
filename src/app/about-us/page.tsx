"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import type { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "About MGH Cardiovascular Associates – Expert Heart Specialists & Cardiology Team | MGH Cardiovascular Associates",
  description: "Meet the expert cardiologists and compassionate care team at MGH Cardiovascular Associates. Learn about our mission, values, and commitment to heart health."
});

export default function AboutUsRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/#about-us");
  }, [router]);
  return null;
}

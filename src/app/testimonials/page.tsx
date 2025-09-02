"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import type { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "Patient Testimonials – MGH Cardiovascular Associates Heart Care Reviews | MGH Cardiovascular Associates",
  description: "Read real patient testimonials and reviews about heart care experiences at MGH Cardiovascular Associates. See why patients trust our cardiology team."
});

export default function TestimonialsRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/#testimonials");
  }, [router]);
  return null;
}

"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TestimonialsRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/#testimonials");
  }, [router]);
  return (
    <>
      <head>
        <title>Patient Testimonials – MGH Cardiovascular Associates Heart Care Reviews</title>
        <meta name="description" content="Read real patient testimonials and reviews about heart care experiences at MGH Cardiovascular Associates. See why patients trust our cardiology team." />
      </head>
    </>
  );
}

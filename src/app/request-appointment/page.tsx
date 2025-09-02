"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import type { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "Book a Cardiology Appointment – MGH Cardiovascular Associates Boston | MGH Cardiovascular Associates",
  description: "Book your cardiology appointment with MGH Cardiovascular Associates in Boston. Fast, easy scheduling for expert heart care and cardiac consultations."
});

export default function RequestAppointmentRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/#request-appointment");
  }, [router]);
  return null;
}

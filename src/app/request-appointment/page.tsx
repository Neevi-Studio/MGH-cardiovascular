"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RequestAppointmentRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/#request-appointment");
  }, [router]);
  return (
    <>
      <head>
        <title>Book a Cardiology Appointment – MGH Cardiovascular Associates Boston</title>
        <meta name="description" content="Book your cardiology appointment with MGH Cardiovascular Associates in Boston. Fast, easy scheduling for expert heart care and cardiac consultations." />
      </head>
    </>
  );
}

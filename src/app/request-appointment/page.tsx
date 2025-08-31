"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RequestAppointmentRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/#request-appointment");
  }, [router]);
  return null;
}

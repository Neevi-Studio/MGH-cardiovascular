"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OurServicesRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/#our-services");
  }, [router]);
  return null;
}

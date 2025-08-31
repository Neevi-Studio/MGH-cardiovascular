"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FAQRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/#faq");
  }, [router]);
  return null;
}

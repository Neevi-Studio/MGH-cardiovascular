"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OurServicesRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/#our-services");
  }, [router]);
  return (
    <>
      <head>
        <title>Cardiology Services – In-Office Cardiac Testing, Preventative & Interventional Care</title>
        <meta name="description" content="Explore our full range of cardiology services, including in-office cardiac testing, preventative care, and interventional treatments for optimal heart health." />
      </head>
    </>
  );
}

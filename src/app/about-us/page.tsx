"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AboutUsRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/#about-us");
  }, [router]);
  return (
    <>
      <head>
        <title>About MGH Cardiovascular Associates – Expert Heart Specialists & Cardiology Team</title>
        <meta name="description" content="Meet the expert cardiologists and compassionate care team at MGH Cardiovascular Associates. Learn about our mission, values, and commitment to heart health." />
      </head>
    </>
  );
}

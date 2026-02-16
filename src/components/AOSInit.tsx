"use client";

import { useEffect } from "react";

export default function AOSInit() {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      await import("aos/dist/aos.css");
      AOS.init();
    };
    initAOS();
  }, []);

  return null;
}

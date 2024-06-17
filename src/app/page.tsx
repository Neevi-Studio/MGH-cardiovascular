import AboutUsSection from "@/components/AboutUsSection";
import ControlYourHeartHealthVideoSection from "@/components/ControlYourHeartHealthVideoSection";
import HeroSection from "@/components/HeroSection";
import OurCardiologistSection from "@/components/OurCardiologistSection";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto flex max-xl:text-center min-h-screen max-w-screen-2xl flex-col gap-10 p-10 xl:gap-20 xl:p-20">
      <HeroSection />
      <ControlYourHeartHealthVideoSection />
      <AboutUsSection />
      <OurCardiologistSection />
    </main>
  );
}

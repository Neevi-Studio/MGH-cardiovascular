import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";

function HeroSection() {
  return (
    <section id="home" className="custom-container max-xl:flex-col">
      <div className="inner-container flex-col">
        <h1 className="text-2xl text-primary xl:text-4xl">
          Leading Interventional & General Cardiology Services
        </h1>
        <p className="text-gray text-xl">
          Explore expert cardiology services tailored for optimal heart health,
          all delivered by our leading specialists. Experience the difference
          with MGH Cardiovascular Associates.
        </p>
        <div className="mx-auto max-xl:flex-col-reverse flex items-center gap-3">
          <Button
            size="lg"
            color="primary"
            className="font-medium"
            variant="bordered"
          >
            Our Services
          </Button>
          <Button size="lg" color="primary">
            Meet Our Cardiologist{" "}
            <MdOutlineArrowOutward size={30} className="rotate-90" />
          </Button>
        </div>
      </div>
      <div className="overflow-hidden rounded-3xl bg-primary xl:h-full xl:w-full">
        <Image
          src="/images/hero-section.svg"
          alt="Smiling womans"
          width={534}
          height={578}
          className="xl:w-full"
        />
      </div>
    </section>
  );
}

export default HeroSection;

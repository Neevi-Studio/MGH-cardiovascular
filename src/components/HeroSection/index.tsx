"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import { scrollToElementById } from "../NavBar";

function HeroSection() {
  return (
    <section id="home" className="custom-container max-xl:flex-col">
      <div className="inner-container flex-col">
        <h1 data-aos="fade-up" className="text-2xl text-primary xl:text-4xl">
          Leading Interventional & General Cardiology Services
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-xl text-gray"
        >
          Explore expert cardiology services tailored for optimal heart health,
          all delivered by our leading specialists. Experience the difference
          with MGH Cardiovascular Associates.
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="mx-auto flex items-center gap-3 max-xl:flex-col-reverse"
        >
          <Button
            onClick={() => scrollToElementById("our-services")}
            size="lg"
            color="primary"
            className="font-medium"
            variant="bordered"
          >
            Our Services
          </Button>
          <Button
            onClick={() => scrollToElementById("our-cardiologist")}
            size="lg"
            color="primary"
          >
            Meet Our Cardiologist{" "}
            <MdOutlineArrowOutward size={30} className="rotate-90" />
          </Button>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="150"
        style={{
          backgroundImage: "url('/images/hero-bg.svg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="relative overflow-hidden rounded-3xl bg-primary xl:h-full xl:w-full"
      >
        <Image
          data-aos="fade-down"
          data-aos-delay="350"
          src="images/immediate-appointments-hero.svg"
          width={320}
          height={74.32}
          alt="Immediate Appointments Available"
          className="absolute right-1 top-6"
        />
        <Image
          src="/images/hero-section.svg"
          alt="Smiling womans"
          width={534}
          height={578}
          className="xl:w-full"
        />
        <Image
          data-aos="fade-up"
          data-aos-delay="350"
          src="images/comprehensive-cardiac-hero.svg"
          width={320}
          height={74.32}
          alt="Comprehensive Cardiac Solutions"
          className="absolute bottom-16 left-6"
        />
      </div>
    </section>
  );
}

export default HeroSection;

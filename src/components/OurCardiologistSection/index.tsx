import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

function OurCardiologistSection() {
  return (
    <section className="custom-container max-xl:flex-col">
      <div
        style={{
          backgroundImage: "url('/images/our-cardiologist-bg.svg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="inner-container relative flex-col items-center rounded-3xl p-10 py-16 xl:h-full xl:w-full xl:items-end"
      >
        <div className="absolute -left-14 -top-14 hidden size-56 rounded-3xl bg-primary bg-gradient-to-br from-primary to-primary-50 xl:block" />
        <Button
          size="lg"
          color="primary"
          className="mb-8 h-16 w-fit whitespace-break-spaces leading-5"
        >
          {"View her Profile\nat Linkedin"}
        </Button>

        <Image
          src={"images/mirette-habib.svg"}
          width={235}
          height={266}
          alt="Mirette Habib"
        />

        <div className="flex w-full items-center gap-6 max-xl:flex-col">
          <Button
            size="lg"
            color="primary"
            className="h-16 w-full whitespace-break-spaces leading-5"
          >
            {"View her Profile\nat Linkedin"}
          </Button>

          <Button
            size="lg"
            color="primary"
            className="h-16 w-full whitespace-break-spaces leading-5"
          >
            {"View her Profile\nat Linkedin"}
          </Button>
        </div>
      </div>

      <div className="inner-container flex-col xl:w-full">
        <h1 className="text-primary">Meet Our Cardiologist</h1>
        <p className="text-2xl text-black xl:text-4xl">Mirette Habib, MD</p>
        <p className="text-gray text-lg font-light">
          Dr. Mirette Habib is a distinguished interventional cardiologist with
          extensive experience in treating complex cardiovascular conditions.
          Board- certified and skilled in the latest advancements in cardiology,
          Dr. Habib is committed to enhancing patient outcomes through
          innovative care and comprehensive treatment strategies. Her expertise
          and compassionate approach ensure that all patients receive
          personalized and effective cardiac
          <span className="block">care at MGH Cardiovascular Associates.</span>
        </p>
        <div className="flex items-center justify-between gap-8 text-lg max-xl:mt-8 max-xl:flex-col xl:items-start xl:gap-16">
          <div className="flex w-full flex-col gap-3 max-xl:items-center max-xl:text-center">
            <div className="w-fit rounded-xl bg-primary-50 p-3.5">
              <Image
                src={"icons/centered-care.svg"}
                width={24}
                height={24}
                alt="Excellence"
              />
            </div>
            <p className="mt-2 text-primary">Patient-Centered Care</p>

            <p className="text-gray-dark leading-loose">
              Our team of board-certified physicians and nurse practitioners has
              provided comprehensive, compassionate cardiovascular care.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 max-xl:items-center max-xl:text-center">
            <div className="w-fit rounded-xl bg-primary-50 p-3.5">
              <Image
                src={"icons/excellence.svg"}
                width={24}
                height={24}
                alt="Excellence"
              />
            </div>
            <p className="mt-2 text-primary">Years of Excellence</p>
            <p className="text-gray-dark leading-loose">
              Established in 2021, MGH has been providing top Cardiovascular
              care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurCardiologistSection;

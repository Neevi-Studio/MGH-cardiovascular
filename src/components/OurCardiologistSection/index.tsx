import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { ImMobile } from "react-icons/im";
import { RiLinkedinFill } from "react-icons/ri";

function OurCardiologistSection() {
  return (
    <section
      id="our-cardiologist"
      className="custom-container relative max-xl:flex-col max-xl:text-center md:px-12"
    >
      <div className="absolute -top-5 left-0 z-[1] hidden size-56 rounded-[50px] bg-primary bg-gradient-to-br from-primary to-primary-50 xl:block" />

      <div
        style={{
          backgroundImage: "url('/images/our-cardiologist-bg.svg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="inner-container relative z-[2] w-full flex-col items-end rounded-3xl px-10 py-8 max-md:items-center md:py-16"
      >
        <div className="flex flex-col-reverse gap-y-6 max-md:w-full max-md:items-center md:flex-col">
          <Link
            data-aos="fade-up"
            href={"https://www.linkedin.com/"}
            target="_blank"
          >
            <Button
              size="lg"
              color="primary"
              className="flex flex-1 items-center whitespace-break-spaces py-2 leading-5 max-xl:mx-auto"
            >
              <RiLinkedinFill className="text-primary-50" size={30} />
              {"View her Profile\nat Linkedin"}
            </Button>
          </Link>

          <Image
            src={"images/mirette-habib.svg"}
            width={235}
            height={266}
            alt="Mirette Habib"
          />
        </div>

        <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row xl:gap-6">
          <Link
            href={"https://www.google.com/maps"}
            className="w-full"
            target="_blank"
          >
            <Button
              size="lg"
              color="primary"
              className="flex h-fit flex-1 flex-row gap-x-1 py-2 max-xl:mx-auto"
            >
              <CiLocationOn className="text-primary-50" size={30} />
              <p className="whitespace-break-spaces text-left text-xs">
                {"680 Broadway, Suite No. 503, Paterson, NJ 07514"}
              </p>
            </Button>
          </Link>

          <Link href={"tel:9736535867"} className="w-full">
            <Button
              size="lg"
              color="primary"
              className="ml-auto flex flex-1 items-center whitespace-break-spaces py-2 leading-5 max-xl:mx-auto"
            >
              <ImMobile className="text-primary-50" size={30} />
              (973) 653-5867
            </Button>
          </Link>
        </div>
      </div>

      <div className="inner-container flex-col xl:w-full">
        <h1 className="text-primary">Meet Our Cardiologist</h1>
        <p className="text-2xl text-black xl:text-4xl">Mirette Habib, MD</p>
        <p className="font-light text-gray">
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
                src={"icons/excellence.svg"}
                width={20}
                height={20}
                alt="Excellence"
              />
            </div>
            <p className="mt-2 text-primary">Years of Excellence</p>
            <p className="text-sm text-gray-dark">
              Established in 2021, MGH has been providing top Cardiovascular
              care.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 max-xl:items-center max-xl:text-center">
            <div className="w-fit rounded-xl bg-primary-50 p-3.5">
              <Image
                src={"icons/centered-care.svg"}
                width={20}
                height={20}
                alt="Excellence"
              />
            </div>
            <p className="mt-2 text-primary">Patient-Centered Care</p>

            <p className="text-sm text-gray-dark">
              Our team of board-certified physicians and nurse practitioners has
              provided comprehensive, compassionate cardiovascular care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurCardiologistSection;

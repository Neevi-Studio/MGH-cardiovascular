import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { ImMobile } from "react-icons/im";
import { RiLinkedinFill } from "react-icons/ri";

function OurCardiologistSection() {
  return (
    <section id="our-cardiologist" className="custom-container max-xl:flex-col md:px-12 relative">


      <div className="absolute left-2 top-12 hidden size-56 rounded-[50px] bg-primary bg-gradient-to-br from-primary to-primary-50 xl:block z-[1]" />

      <div
        style={{
          backgroundImage: "url('/images/our-cardiologist-bg.svg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="inner-container relative flex-col w-full rounded-3xl px-10 py-8 md:py-16  items-end z-[2] max-md:items-center"
      >

        <div className="flex flex-col-reverse md:flex-col gap-y-6 max-md:w-full max-md:items-center">

          <Button
            size="lg"
            color="primary"
            className=" py-2 flex-1 whitespace-break-spaces leading-5  flex items-center "
          >
            <RiLinkedinFill color="#C9AC7F" size={30} />
            {"View her Profile\nat Linkedin"}
          </Button>

          <Image
            src={"images/mirette-habib.svg"}
            width={235}
            height={266}
            alt="Mirette Habib"
          />

        </div>

        <div className="flex flex-col md:flex-row  w-full items-center gap-6  ">

          <Button
            size="lg"
            color="primary"
            className=" py-2  flex-1 h-fit flex-row flex gap-x-1  "
          >
            <CiLocationOn color="#C9AC7F" size={30} />
            <p className="text-xs text-left whitespace-break-spaces" >
              {"680 Broadway, Suite No. 503, Paterson, NJ 07514"}
            </p>
          </Button>

          <Button
            size="lg"
            color="primary"
            className=" py-2  flex-1 whitespace-break-spaces leading-5  flex items-center "
          >
            <ImMobile color="#C9AC7F" size={30} />
            (973) 653-5867
          </Button>

        </div>
      </div>

      <div className="inner-container flex-col xl:w-full">
        <h1 className="text-primary">Meet Our Cardiologist</h1>
        <p className="text-2xl text-black xl:text-4xl">Mirette Habib, MD</p>
        <p className="text-gray font-light">
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
            <p className="text-gray-dark text-sm">
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

            <p className="text-gray-dark text-sm">
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

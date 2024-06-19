'use client'
import AboutUsSection from "@/components/AboutUsSection";
import BookAnAppointmentFormSection from "@/components/BookAnAppointmentFormSection";
import BookAnAppointmentSection from "@/components/BookAnAppointmentSection";
import ControlYourHeartHealthVideoSection from "@/components/ControlYourHeartHealthVideoSection";
import HeroSection from "@/components/HeroSection";
import InsuranceAndPaymentOptions from "@/components/InsuranceAndPaymentOptions";
import OurCardiologistSection from "@/components/OurCardiologistSection";
import OurServicesSection from "@/components/OurServicesSection";
import Testimonials from "@/components/Testimonials";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import Image from "next/image";
import { BsTwitter } from "react-icons/bs";
import { RiInstagramFill, RiLinkedinFill } from "react-icons/ri";

const mainStyles = ` mx-auto flex max-xl:text-center max-w-screen-2xl flex-col gap-10 lg:p-10 p-5 xl:gap-20 xl:p-20 `;

export default function Home() {
  return (
    <main>
      <div className={mainStyles + "mt-8 "}>
        <HeroSection />
        <ControlYourHeartHealthVideoSection />
      </div>
      <div className="max-w-screen-xl items-center justify-center flex flex-col mx-auto gap-y-8 my-12" >
        <AboutUsSection />
        <OurCardiologistSection />
      </div>

      <div className="bg-gray-light w-full">
        <div className={mainStyles}>
          <OurServicesSection />
        </div>
      </div>

      <div className={mainStyles}>
        <InsuranceAndPaymentOptions />
        <BookAnAppointmentSection />
        <Testimonials />
      </div>
        <BookAnAppointmentFormSection />

      <div className="flex flex-col items-center justify-center gap-y-16 my-20 max-md:px-4" >
        <div className="flex flex-col gap-y-2" >
          <p className="text-lg md:text-2xl text-[#C9AC7F] text-center">Frequently Asked Questions (FAQ)</p>
          <p className=" text-lg md:text-2xl text-center font-semibold text-black">Find quick answers to common questions about our <br />
            cardiology services and patient care.
          </p>
        </div>
        <Accordion className="bg-[#F5F5F5]  rounded-xl px-8 md:max-w-[58%] mx-auto ">
          <AccordionItem key="1" className="max-md:text-center" aria-label="Accordion 1" title={<p className="text-[#A38457]  py-1 max-md:text-center">How do i book an appointment?</p>}>
            You can schedule an appointment by filling out our online form, calling our office, or visiting us in person.
          </AccordionItem>
          <AccordionItem key="2" className="max-md:text-center" aria-label="Accordion 2" title={<p className="text-[#A38457]  py-1 max-md:text-center">What insurance do you accept?</p>}>
            We accept most major insurance plans. Please contact our office for a specific list of providers
          </AccordionItem>
          <AccordionItem key="3" className="max-md:text-center" aria-label="Accordion 3" title={<p className="text-[#A38457]  py-1 max-md:text-center">What should i bring to my first visit?</p>}>
            Please bring your identification, insurance information, and any relevant medical records or test results.
          </AccordionItem>
          <AccordionItem key="4" className="max-md:text-center" aria-label="Accordion 4" title={<p className="text-[#A38457]  py-1 max-md:text-center">Are there any preparation required before a cardiology exam?</p>}>
            Specific instructions may vary based on the exam. Generally, you might be asked to avoid caffeine, fast for a few hours, or stop certain medications. We will provide all necessary instructions when you book your appointment.
          </AccordionItem>
        </Accordion>
      </div>

      <div className="bg-[#FBFBFB] flex flex-col items-center justify-center  pb-8 " >
        <div className="size-60 relative " >
          <Image
            src="container.svg"
            fill
            className="object-contain"
            alt="Heart"
          />
        </div>
        <div className="flex flex-row max-md:flex-wrap max-md:justify-center gap-x-3 items-center max-md:px-4 max-md:gap-y-4" >
          <Button size="sm" className="bg-transparent md:w-[50px] font-normal hover:font-bold border border-transparent hover:border-[#A38457] text-[#7A7A7A] hover:text-[#A38457] transition-all duration-300" >
            Home
          </Button>
          <Button size="sm" className="bg-transparent md:w-[90px] font-normal hover:font-bold border border-transparent hover:border-[#A38457] text-[#7A7A7A] hover:text-[#A38457] transition-all duration-300" >
            About us
          </Button>
          <Button size="sm" className="bg-transparent md:w-[90px] font-normal hover:font-semibold border border-transparent hover:border-[#A38457] text-[#7A7A7A] hover:text-[#A38457] transition-all duration-300" >
            Our services
          </Button>
          <Button size="sm" className="bg-transparent md:w-[90px] font-normal hover:font-semibold border border-transparent hover:border-[#A38457] text-[#7A7A7A] hover:text-[#A38457] transition-all duration-300" >
            Testimonials
          </Button>
          <Button size="sm" className="bg-transparent  md:w-[90px] font-normal hover:font-semibold border border-transparent hover:border-[#A38457] text-[#7A7A7A] hover:text-[#A38457] transition-all duration-300" >
            Contact us
          </Button>
        </div>

        <div className="w-full h-[0.5px] bg-[#E5E5E8] mt-8" />
        <div className="flex flex-col gap-y-4 md:flex-row items-center justify-between w-full px-6 mt-8" >
          <p className="text-sm max-md:text-center">© MGH Cardiovascular Associates 2024. All rights reserved.</p>
          <div className="flex flex-row gap-x-3 items-center" >
            <Button isIconOnly className="bg-transparent text-2xl text-[#A38457]" >
              <BsTwitter />
            </Button>
            <Button isIconOnly className="bg-transparent text-2xl text-[#A38457]" >
              <RiLinkedinFill />
            </Button>
            <Button isIconOnly className="bg-transparent text-2xl text-[#A38457]" >
              <RiInstagramFill />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

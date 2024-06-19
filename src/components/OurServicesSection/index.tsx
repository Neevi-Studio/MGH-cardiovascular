"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { scrollToElementById } from "../NavBar";

type ServiceProps = {
  icon: string;
  title: string;
  text: string;
};

function Service({ icon, title, text }: ServiceProps) {
  return (
    <div className="flex items-center gap-3 max-xl:flex-col">
      <div className="mb-auto shrink-0 content-center rounded-lg border-1 border-primary px-6 py-3 align-middle">
        <Image
          src={`icons/services/${icon}`}
          alt="Service icon"
          width={45}
          height={45}
        />
      </div>
      <div className="mb-auto flex flex-col items-start gap-2">
        <p className="text-xl text-primary max-xl:mx-auto">{title}</p>
        <p className=" text-[#00000080] max-xl:mx-auto">{text}</p>
      </div>
    </div>
  );
}

const ServicesData = [
  {
    icon: "interventional-cardiology.svg",
    title: "Interventional Cardiology",
    text: "Utilizing the latest in minimally invasive procedures to treat complex heart conditions.",
  },
  {
    icon: "cardiology-consultations.svg",
    title: "General Cardiology Consultations",
    text: "Visualize trends and monitor key performances",
  },
  {
    icon: "vein-treatments.svg",
    title: "Vein Treatments",
    text: "Customize workflows, add integrations, and adapt features",
  },
  {
    icon: "in-office-cardiology.svg",
    title: "In-Office Cardiology Workups",
    text: "Assign tasks, set priorities, and track progress effortlessly",
  },
  {
    icon: "women-cardiac.svg",
    title: "Women's Cardiac Health",
    text: "Visualize trends and monitor key performances",
  },
  {
    icon: "preventative-cardiology.svg",
    title: "Preventative cardiology",
    text: "Customize workflows, add integrations, and adapt features",
  },
];

function OurServicesSection() {
  return (
    <section id="our-services" className="max-w-screen-xl mx-auto flex  gap-y-20 flex-col">
      <div className="inner-container flex-col">
        <p className="text-center text-xl text-primary">
          Our Services
        </p>
        <h2 className="mx-auto text-3xl font-bold text-black">
          Heart Care Reimagined
        </h2>
        <p className="text-center text-xl text-gray">
          Expert care across a spectrum of heart health needs, delivered with
          precision and compassion.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:gap-16 max-xl:gap-y-8 px-14">
        {ServicesData.map((data, index) => (
          <Service key={index} {...data} />
        ))}
      </div>
      <Button
        onClick={() => scrollToElementById("request-appointment")}
        color="primary"
        size="lg"
        className="text-lg max-xl:mt-4 w-fit mx-auto"
      >
        Request Appointment
      </Button>
    </section>
  );
}

export default OurServicesSection;

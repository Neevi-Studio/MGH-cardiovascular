"use client"

import { Button } from "@nextui-org/react";
import React from "react";
import { scrollToElementById } from "../NavBar";

function ControlYourHeartHealthVideoSection() {
  return (
    <section className="custom-container relative aspect-video rounded-3xl bg-black">
      <div className="inner-container max-xl:mx-auto mt-auto flex-col text-white">
        <h2 className="text-2xl xl:text-4xl">
          Take Control of Your Heart Health
        </h2>
        <p className="text-xl">
          Discover how regular cardiovascular check-ups can enhance your life
          quality and
          <span className="block">longevity.</span>
        </p>
        <Button
          onClick={() => scrollToElementById("request-appointment")}
          color="primary"
          size="lg"
          className="w-fit max-xl:mx-auto border-primary-50 border-2"
        >
          Request Appointment
        </Button>
      </div>
    </section>
  );
}

export default ControlYourHeartHealthVideoSection;

import { Button } from "@nextui-org/react";
import React from "react";

function ControlYourHeartHealthVideoSection() {
  return (
    <section className="custom-container relative aspect-video rounded-3xl bg-black">
      <div className="inner-container mt-auto flex-col text-white">
        <h2 className="text-2xl xl:text-4xl">
          Take Control of Your Heart Health
        </h2>
        <p className="text-xl">
          Discover how regular cardiovascular check-ups can enhance your life
          quality and
          <span className="block">longevity.</span>
        </p>
        <Button color="primary" size="lg" className="w-fit">
          Request Appointment
        </Button>
      </div>
    </section>
  );
}

export default ControlYourHeartHealthVideoSection;

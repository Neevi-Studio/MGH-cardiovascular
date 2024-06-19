import { mainStyles } from "@/app/page";
import React from "react";
import Form from "./Form";

function BookAnAppointmentFormSection() {
  return (
    <div className={`rounded-3xl border border-primary`}>
      <div className={`${mainStyles}`}>
        <section
          id="request-appointment"
          className={`custom-container mx-auto w-full flex-col !gap-4 text-primary max-xl:!px-0 xl:!gap-4`}
        >
          <div className="flex-col text-center">
            <h2 className="mb-5 text-center text-3xl font-bold xl:text-5xl">
              Schedule Your Visit
            </h2>
            <p className="flex flex-col items-center gap-y-1 text-center font-bold xl:text-xl">
              <span>Book an appointment with our </span>
              <span>experts and take the first step </span>
              <span>towards better heart health.</span>
            </p>
          </div>

          <Form />
        </section>
      </div>
    </div>
  );
}

export default BookAnAppointmentFormSection;

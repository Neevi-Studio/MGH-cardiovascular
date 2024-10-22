"use client";

import { Button } from "@nextui-org/react";
import { scrollToElementById } from "../NavBar";

function RequestAppointmentClientBtn() {
  return (
    <Button
      onClick={() => scrollToElementById("request-appointment")}
      color="primary"
      size="lg"
      className="mx-auto w-fit text-lg max-xl:mt-2"
    >
      Request Appointment
    </Button>
  );
}

export default RequestAppointmentClientBtn;

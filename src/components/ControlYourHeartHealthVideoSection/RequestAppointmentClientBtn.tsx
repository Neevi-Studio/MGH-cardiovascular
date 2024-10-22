"use client"

import { Button } from "@nextui-org/react";
import { scrollToElementById } from "../NavBar";

function RequestAppointmentClientBtn() {
  return (
    <Button
      onClick={() => scrollToElementById("request-appointment")}
      color="primary"
      size="lg"
      className="w-fit border-2 border-primary-50 font-amiko max-xl:mx-auto"
    >
      Request Appointment
    </Button>
  );
}

export default RequestAppointmentClientBtn;

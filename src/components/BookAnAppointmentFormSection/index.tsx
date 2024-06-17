import { Button, Checkbox, Input, Textarea } from "@nextui-org/react";
import React from "react";

const nextUiInputClassNames = {
  inputWrapper: "bg-gray-medium focus:bg-gray-medium p-0 rounded-xl h-12",
  innerWrapper: "bg-gray-medium focus:bg-gray-medium p-0 rounded-xl",
  input: "placeholder:text-primary text-medium p-4",
};

function BookAnAppointmentFormSection() {
  return (
    <section className="custom-container flex-col text-primary">
      <h2 className="text-3xl xl:text-5xl">Schedule Your Visit</h2>
      <p className="flex flex-col items-center text-center text-lg font-bold xl:text-2xl">
        <span>Book an appointment with our </span>
        <span>experts and take the first step </span>
        <span>towards better heart health.</span>
      </p>

      <form className="flex w-full flex-col gap-4">
        <div className="flex w-full gap-4">
          <div className="flex w-full flex-col">
            <label htmlFor="first-name" className="ml-2 text-left">
              First Name*
            </label>
            <Input
              id="first-name"
              placeholder="Jane"
              color="primary"
              classNames={nextUiInputClassNames}
              required
            />
          </div>

          <div className="flex w-full flex-col">
            <label htmlFor="last-name" className="ml-2 text-left">
              Last Name*
            </label>
            <Input
              id="last-name"
              placeholder="Doe"
              color="primary"
              classNames={nextUiInputClassNames}
              required
            />
          </div>
        </div>

        <div className="flex w-full gap-4">
          <div className="flex w-full flex-col">
            <label htmlFor="phone-number" className="ml-2 text-left">
              Phone Number*
            </label>
            <Input
              id="phone-number"
              placeholder="Jane"
              color="primary"
              classNames={nextUiInputClassNames}
              required
            />
          </div>

          <div className="flex w-full flex-col">
            <label htmlFor="email" className="ml-2 text-left">
              Email*
            </label>
            <Input
              id="email"
              placeholder="jane@example.com"
              color="primary"
              classNames={nextUiInputClassNames}
              required
            />
          </div>
        </div>
        <div className="flex w-full flex-col">
          <label htmlFor="time" className="ml-2 text-left">
            Time*
          </label>
          <Input
            id="time"
            placeholder="--:-- --"
            color="primary"
            classNames={nextUiInputClassNames}
            required
          />
        </div>
        <div className="flex w-full flex-col">
          <label htmlFor="insurance" className="ml-2 text-left">
            Insurance Provider ( if you have Insurance)
          </label>
          <Input
            id="insurance"
            placeholder="Insurance Provider"
            color="primary"
            classNames={nextUiInputClassNames}
          />
        </div>

        <div className="flex w-full flex-col">
          <label htmlFor="policy" className="ml-2 text-left">
            Policy Number:
          </label>
          <Input
            id="policy"
            placeholder="Policy Number:"
            color="primary"
            classNames={nextUiInputClassNames}
          />
        </div>

        <div className="flex w-full flex-col">
          <label htmlFor="message" className="ml-2 text-left">
            Message
          </label>
          <Textarea
            id="message"
            color="primary"
            classNames={nextUiInputClassNames}
          />
        </div>
        <div className="flex w-full">
          <Checkbox id="check" />
          <label htmlFor="check">Subscribe to our newsletter</label>
        </div>

        <Button type="submit" size="lg" color="primary">
          Submit
        </Button>
      </form>
    </section>
  );
}

export default BookAnAppointmentFormSection;

"use client"

import emailJs from "@emailjs/browser";
import { Button, Input, Textarea } from "@nextui-org/react";
import React, { useRef, useState } from "react";
import SendMailResponseModal from "./SendMailResponseModal";

const nextUiInputClassNames = {
  inputWrapper: "bg-gray-medium focus:bg-gray-medium p-0 rounded-xl h-12",
  innerWrapper: "bg-gray-medium focus:bg-gray-medium p-0 rounded-xl",
  input: "placeholder:text-primary text-medium p-4",
};

const mainInputsContainerStyles = ` flex w-full flex-col font-liberation-sans`
const inputsContainerStyles = ` ${mainInputsContainerStyles} gap-1.5 xl:flex-row xl:gap-4 ` 

function Form() {
  const [mailResponseModal, setMailResponseModal] = useState(false);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    insurance: "",
    policy: "",
    message: "",
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  const [mailResponseModalData, setMailResponseModalData] = useState({
    title: "",
    body: "",
  });

  const formRef = useRef<HTMLFormElement>(null);
// gmail: s70836218@gmail.com

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (formRef.current) {
      await emailJs
        .sendForm("service_s4cuscd", "template_mngnxzq", formRef.current, {
          publicKey: "qZxx95IJKSXrjw3jx",
        })
        .then(
          () => {
            setMailResponseModalData({
              title: "Thanks for contacting us",
              body: "Your message was sent successfully. We will get back to you soon.",
            });
            setMailResponseModal(true);
            formRef?.current?.reset();
          },
          (error) => {
            setIsError(true);
            setMailResponseModalData({
              title: "",
              body: "Failed to send, please try again later",
            });
            setMailResponseModal(true);
            console.log(error);
          },
        );
    }
    setIsLoading(false);
  };

  return (
    <>
      <SendMailResponseModal
        isOpen={mailResponseModal}
        isError={isError}
        onClose={() => setMailResponseModal(false)}
        title={mailResponseModalData.title}
        body={mailResponseModalData.body}
      />
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="flex w-full flex-col gap-3 "
      >
        <div className={`${inputsContainerStyles}`}>
          <div className={`${mainInputsContainerStyles}`}>
            <label htmlFor="firstname" className="ml-2 text-left">
              First Name*
            </label>
            <Input
              id="firstname"
              name="firstname"
              placeholder="Jane"
              onChange={handleInputChange}
              color="primary"
              classNames={nextUiInputClassNames}
              required
            />
          </div>

          <div className={`${mainInputsContainerStyles}`}>
            <label htmlFor="lastname" className="ml-2 text-left">
              Last Name*
            </label>
            <Input
              id="lastname"
              name="lastname"
              placeholder="Doe"
              color="primary"
              classNames={nextUiInputClassNames}
              required
            />
          </div>
        </div>

        <div className={`${inputsContainerStyles}`}>
          <div className={`${mainInputsContainerStyles}`}>
            <label htmlFor="phone" className="ml-2 text-left">
              Phone Number*
            </label>
            <Input
              id="phone"
              name="phone"
              placeholder='(123) 456-7890'
              color="primary"
              type="tel"
              onChange={handleInputChange}
              classNames={nextUiInputClassNames}
              required
            />
          </div>

          <div className={`${mainInputsContainerStyles}`}>
            <label htmlFor="email" className="ml-2 text-left">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              onChange={handleInputChange}
              placeholder="jane@example.com"
              color="primary"
              classNames={nextUiInputClassNames}

            />
          </div>
        </div>



        <div className={`${mainInputsContainerStyles}`}>
          <label htmlFor="insurance" className="ml-2 text-left">
            Insurance Provider ( if you have Insurance )
          </label>
          <Input
            id="insurance"
            name="insurance"
            onChange={handleInputChange}
            placeholder="Insurance Provider"
            color="primary"
            classNames={nextUiInputClassNames}
          />
        </div>

        <div className={`${mainInputsContainerStyles}`}>
          <label htmlFor="policy" className="ml-2 text-left">
            Policy Number:
          </label>
          <Input
            id="policy"
            name="policy"
            placeholder="Policy Number"
            onChange={handleInputChange}
            color="primary"
            classNames={nextUiInputClassNames}
          />
        </div>

        <div className={`${mainInputsContainerStyles}`}>
          <label htmlFor="message" className="ml-2 text-left">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            color="primary"
            onChange={handleInputChange}
            classNames={nextUiInputClassNames}
          />
        </div>

        <Button className="mt-2 !font-hlad" isLoading={isLoading} type="submit" size="lg" color="primary">
          Submit
        </Button>
      </form>
    </>
  );
}

export default Form;

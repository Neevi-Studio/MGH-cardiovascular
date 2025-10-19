"use client"

import { Button, Input, Textarea } from "@nextui-org/react";
import React, { useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const nextUiInputClassNames = {
  inputWrapper: "bg-gray-medium focus:bg-gray-medium p-0 rounded-xl h-12",
  innerWrapper: "bg-gray-medium focus:bg-gray-medium p-0 rounded-xl",
  input: "placeholder:text-primary text-medium p-4",
};

const mainInputsContainerStyles = ` flex w-full flex-col font-liberation-sans`
const inputsContainerStyles = ` ${mainInputsContainerStyles} gap-1.5 xl:flex-row xl:gap-4 ` 

function Form() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    insurance: "",  // Optional
    policy: "",     // Optional
    message: "",    // Optional
    company: "",    // Honeypot
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const mountedAtRef = useRef<number>(Date.now());
  const lastSubmitAtRef = useRef<number>(0);

  const clearForm = () => {
    setFormData({
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      insurance: "",
      policy: "",
      message: "",
      company: "",
    })
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Honeypot: if filled, silently succeed without processing
  if (formData.company && formData.company.trim().length > 0) {
    return;
  }
  
  // Time gate: prevent instant bot submissions (< 5s from mount)
  const now = Date.now();
  const elapsedMs = now - mountedAtRef.current;
  if (elapsedMs < 5000) {
    toast.error('Please take a moment to complete the form before submitting.', {
      position: 'top-center',
      duration: 4000,
      style: {
        background: '#FEE2E2',
        color: '#B91C1C',
        padding: '16px',
        borderRadius: '8px',
        maxWidth: '500px',
        margin: '0 auto',
      },
    });
    return;
  }
  
  // Basic debounce: ignore rapid re-submits (< 2s)
  if (now - lastSubmitAtRef.current < 2000) {
    return;
  }
  lastSubmitAtRef.current = now;
  
  // Show loading state
  const loadingToast = toast.loading('Submitting your appointment request...', {
    position: 'top-center',
    style: {
      background: '#363636',
      color: '#fff',
      padding: '16px',
      borderRadius: '8px',
      maxWidth: '500px',
      margin: '0 auto',
    },
  });
  
  setIsLoading(true);

  // Validate required fields with specific messages
  if (!formData.firstname) {
    toast.error('Please enter your first name', {
      position: 'top-center',
      duration: 4000,
      style: {
        background: '#FEE2E2',
        color: '#B91C1C',
        padding: '16px',
        borderRadius: '8px',
        maxWidth: '500px',
        margin: '0 auto',
      },
    });
    toast.dismiss(loadingToast);
    setIsLoading(false);
    return;
  }

  if (!formData.lastname) {
    toast.error('Please enter your last name', {
      position: 'top-center',
      duration: 4000,
      style: {
        background: '#FEE2E2',
        color: '#B91C1C',
        padding: '16px',
        borderRadius: '8px',
        maxWidth: '500px',
        margin: '0 auto',
      },
    });
    toast.dismiss(loadingToast);
    setIsLoading(false);
    return;
  }

  if (!formData.email) {
    toast.error('Please enter your email address', {
      position: 'top-center',
      duration: 4000,
      style: {
        background: '#FEE2E2',
        color: '#B91C1C',
        padding: '16px',
        borderRadius: '8px',
        maxWidth: '500px',
        margin: '0 auto',
      },
    });
    toast.dismiss(loadingToast);
    setIsLoading(false);
    return;
  }

  if (!formData.phone) {
    toast.error('Please enter your phone number', {
      position: 'top-center',
      duration: 4000,
      style: {
        background: '#FEE2E2',
        color: '#B91C1C',
        padding: '16px',
        borderRadius: '8px',
        maxWidth: '500px',
        margin: '0 auto',
      },
    });
    toast.dismiss(loadingToast);
    setIsLoading(false);
    return;
  }

  // Validate email format with more specific message
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    toast.error('Please enter a valid email address (e.g., yourname@example.com)', {
      position: 'top-center',
      duration: 5000,
      style: {
        background: '#FEE2E2',
        color: '#B91C1C',
        padding: '16px',
        borderRadius: '8px',
        maxWidth: '500px',
        margin: '0 auto',
      },
    });
    toast.dismiss(loadingToast);
    setIsLoading(false);
    return;
  }

  // Validate phone number format with more specific message
  const phoneRegex = /^(\+?1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;
  if (!phoneRegex.test(formData.phone)) {
    toast.error('Please enter a valid US phone number (e.g., (123) 456-7890, 123-456-7890, or 1234567890)', {
      position: 'top-center',
      duration: 6000,
      style: {
        background: '#FEE2E2',
        color: '#B91C1C',
        padding: '16px',
        borderRadius: '8px',
        maxWidth: '500px',
        margin: '0 auto',
      },
    });
    toast.dismiss(loadingToast);
    setIsLoading(false);
    return;
  }

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    await axios.post(
      `${process.env.NEXT_PUBLIC_FORMS_END_POINTS_DOMAIN}/stores/send-mgh-booking-form`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
          "x-store-key": process.env.NEXT_PUBLIC_STORE_ID,
        },
      },
    );

    toast.success('Appointment request submitted successfully! We\'ll contact you soon.', {
      position: 'top-center',
      duration: 5000,
      style: {
        background: '#DCFCE7',
        color: '#166534',
        padding: '16px',
        borderRadius: '8px',
        maxWidth: '500px',
        margin: '0 auto',
      },
    });
    
    clearForm();
  } catch (error) {
    console.error('Form submission error:', error);
    
    let errorMessage = 'Failed to submit the form. Please try again later.';
    
    // Check for specific error types
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        errorMessage = error.response.data?.message || 'Server error occurred while submitting the form';
      } else if (error.request) {
        // The request was made but no response was received
        errorMessage = 'No response from server. Please check your connection.';
      }
    }
    
    toast.error(errorMessage, {
      position: 'top-center',
      duration: 5000,
      style: {
        background: '#FEE2E2',
        color: '#B91C1C',
        padding: '16px',
        borderRadius: '8px',
        maxWidth: '500px',
        margin: '0 auto',
      },
    });
  } finally {
    toast.dismiss(loadingToast);
    setIsLoading(false);
  }
}

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-3 "
      >
        {/* Honeypot field (visually hidden but present for bots) */}
        <div aria-hidden="true" className="absolute -left-[10000px] w-px h-px overflow-hidden">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            autoComplete="off"
            tabIndex={-1}
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: (e.target as HTMLInputElement).value })}
          />
        </div>
        <div className={`${inputsContainerStyles}`}>
          <div className={`${mainInputsContainerStyles}`}>
            <label htmlFor="firstname" className="ml-2 text-left">
              First Name*
            </label>
            <Input
              id="firstname"
              name="firstname"
              placeholder="Jane"
              value={formData.firstname}
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
              value={formData.lastname}
              onChange={handleInputChange}
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
              value={formData.phone}
              onChange={handleInputChange}
              color="primary"
              type="tel"
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
              placeholder='jane.doe@example.com'
              value={formData.email}
              onChange={handleInputChange}
              color="primary"
              classNames={nextUiInputClassNames}
              required
            />
          </div>
        </div>



        <div className={`${mainInputsContainerStyles}`}>
          <label htmlFor="insurance" className="ml-2 text-left">
            Insurance Provider <span className="text-gray-500">(Optional)</span>
          </label>
          <Input
            id="insurance"
            name="insurance"
            placeholder="Health Insurance Provider"
            value={formData.insurance}
            onChange={handleInputChange}
            color="primary"
            classNames={nextUiInputClassNames}
          />
        </div>

        <div className={`${mainInputsContainerStyles}`}>
          <label htmlFor="policy" className="ml-2 text-left">
            Policy Number <span className="text-gray-500">(Optional)</span>
          </label>
          <Input
            id="policy"
            name="policy"
            placeholder="Policy Number"
            value={formData.policy}
            onChange={handleInputChange}
            color="primary"
            classNames={nextUiInputClassNames}
          />
        </div>

        <div className={`${mainInputsContainerStyles}`}>
          <label htmlFor="message" className="ml-2 text-left">
            Message <span className="text-gray-500">(Optional)</span>
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us more about your needs..."
            color="primary"
            classNames={{
              inputWrapper: "bg-gray-medium focus:bg-gray-medium p-0 rounded-xl",
              innerWrapper: "bg-gray-medium focus:bg-gray-medium p-0 rounded-xl",
              input: "placeholder:text-primary text-medium p-4",
            }}
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
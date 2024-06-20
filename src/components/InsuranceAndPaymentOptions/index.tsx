import Image from "next/image";
import React from "react";

function InsuranceAndPaymentOptions() {
  return (
    <section className="custom-container overflow-hidden rounded-3xl bg-primary !p-0 text-white max-xl:flex-col">
      <div className="inner-container w-full flex-col p-8 max-xl:mb-8 xl:p-[2.5rem]">
        <h2 className="text-xl font-bold xl:text-3xl">
          Insurance and Payment Options
        </h2>
        <p className="text-lg font-lato">
          We strive to make your care as accessible as possible. MGH
          Cardiovascular Associates accepts most major insurance plans, ensuring
          you can receive the quality cardiology services you need without
          financial stress. Please contact our office for more details on
          coverage and payment options to accommodate your healthcare needs.
        </p>
      </div>
      <div className="relative h-full xl:w-[70%]">
        <Image
          className="absolute max-xl:-top-16 max-xl:left-[50%] max-xl:-translate-x-[50%] xl:-left-[68px] xl:top-16"
          src={"icons/insurance-and-payment-options.svg"}
          height={136}
          width={136}
          alt="icon"
        />
        <Image
          src={"images/insurance-and-payment-options.svg"}
          width={583.5}
          height={480}
          alt="bg"
          className="xl:ml-auto"
        />
      </div>
    </section>
  );
}

export default InsuranceAndPaymentOptions;

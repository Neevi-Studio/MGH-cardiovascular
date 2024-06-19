import { Accordion, AccordionItem } from "@nextui-org/react";

function FAQSection() {
  return (
    <section
      id="faq"
      className="custom-container w-full flex-col justify-center"
    >
      <div data-aos="fade-up" className="flex flex-col gap-y-2">
        <p className="text-center text-lg text-primary-50 md:text-2xl">
          Frequently Asked Questions (FAQ)
        </p>
        <p className="text-center text-lg font-semibold text-black md:text-2xl">
          Find quick answers to common questions about our <br />
          cardiology services and patient care.
        </p>
      </div>
      <Accordion
        defaultExpandedKeys={"1"}
        className="mx-auto rounded-xl bg-gray-light px-8"
      >
        <AccordionItem
          key="1"
          className="pb-5 text-gray max-md:text-center"
          aria-label="Accordion 1"
          title={
            <p className="py-1 text-primary max-md:text-center">
              How do I book an appointment?
            </p>
          }
        >
          You can schedule an appointment by filling out our online form,
          calling our office, or visiting us in person.
        </AccordionItem>
        <AccordionItem
          key="2"
          className="pb-5 text-gray max-md:text-center"
          aria-label="Accordion 2"
          title={
            <p className="py-1 text-primary max-md:text-center">
              What insurance do you accept?
            </p>
          }
        >
          We accept most major insurance plans. Please contact our office for a
          specific list of providers
        </AccordionItem>
        <AccordionItem
          key="3"
          className="pb-5 text-gray max-md:text-center"
          aria-label="Accordion 3"
          title={
            <p className="py-1 text-primary max-md:text-center">
              What should i bring to my first visit?
            </p>
          }
        >
          Please bring your identification, insurance information, and any
          relevant medical records or test results.
        </AccordionItem>
        <AccordionItem
          key="4"
          className="pb-5 text-gray max-md:text-center"
          aria-label="Accordion 4"
          title={
            <p className="py-1 text-primary max-md:text-center">
              Are there any preparation required before a cardiology exam?
            </p>
          }
        >
          Specific instructions may vary based on the exam. Generally, you might
          be asked to avoid caffeine, fast for a few hours, or stop certain
          medications. We will provide all necessary instructions when you book
          your appointment.
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export default FAQSection;

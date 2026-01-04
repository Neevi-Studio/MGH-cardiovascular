"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import FAQPageSchema from "../FAQPageSchema";

const accordionItemsData = [
  {
    itemKey: "1",
    title: "How do I book an appointment?",
    text: "You can schedule an appointment by filling out our online form, calling our office, or visiting us in person.",
  },
  {
    itemKey: "2",
    title: "What insurance do you accept?",
    text: "We accept most major insurance plans. Please contact our office for a specific list of providers",
  },
  {
    itemKey: "3",
    title: "What should I bring to my first visit?",
    text: "Please bring your identification, insurance information, and any relevant medical records or test results.",
  },
  {
    itemKey: "4",
    title: "How Do I Prepare for a Cardiac Test?",
    text: "Specific instructions may vary based on the exam. Generally, you may be asked to avoid caffeine, fast for a few hours, and/or stop certain medications. We will provide all necessary instructions when you book your appointment",
  },
];

const faqSchemaData = accordionItemsData.map(item => ({
  question: item.title,
  answer: item.text
}));

function FAQSection() {
  return (
    <section
      id="faq"
      className="custom-container w-full flex-col justify-center lg:-mt-20"
    >
      <FAQPageSchema faqs={faqSchemaData} />
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
        {accordionItemsData.map((data) => (
          <AccordionItem
            key={data.itemKey}
            className="pb-5 text-gray max-md:text-center"
            aria-label="Accordion 2"
            title={
              <p className={`py-1 font-lato text-primary max-md:text-center`}>
                {data.title}
              </p>
            }
          >
            <span className="font-be-vietnam-pro">{data.text}</span>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default FAQSection;

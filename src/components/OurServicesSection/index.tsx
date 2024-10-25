import Image from "next/image";
import RequestAppointmentClientBtn from "./RequestAppointmentClientBtn";

type ServiceProps = {
  icon: string;
  title: string;
  text: string;
};

function Service({ icon, title, text }: ServiceProps) {
  return (
    <div className="flex items-center gap-3 max-xl:flex-col">
      <div className="mb-auto shrink-0 content-center rounded-lg border-1 border-primary px-6 py-3 align-middle">
        <Image
          src={`icons/services/${icon}`}
          alt="Service icon"
          width={45}
          height={45}
        />
      </div>
      <div className="mb-auto flex flex-col items-start gap-2">
        <p className="text-xl text-primary max-xl:mx-auto">{title}</p>
        <p className="font-lato text-[#00000080] max-xl:mx-auto">{text}</p>
      </div>
    </div>
  );
}

const ServicesData = [
  {
    icon: "interventional-cardiology.svg",
    title: "Interventional Cardiology",
    text: "Utilizing the latest in minimally invasive procedures to treat complex heart conditions.",
  },
  {
    icon: "cardiology-consultations.svg",
    title: "General Cardiology Consultations",
    text: "We offer thorough consultations to address a wide range of cardiac concerns, ensuring tailored treatment plans for each patient.",
  },
  {
    icon: "vein-treatments.svg",
    title: "Vein Treatments",
    text: "We offer minimally invasive solutions for varicose veins, providing both aesthetic improvement and relief from discomfort.",
  },
  {
    icon: "in-office-cardiology.svg",
    title: "In-Office Cardiology Workups",
    text: "Our in-office cardiology workups provide detailed assessments to diagnose and manage heart conditions effectively.",
  },
  {
    icon: "women-cardiac.svg",
    title: "Women's Cardiac Health",
    text: "Specializing in women's cardiac health, we focus on the unique needs and challenges of heart health in women.",
  },
  {
    icon: "preventative-cardiology.svg",
    title: "Preventative cardiology",
    text: "We provide personalized plans for early detection and management of heart disease, ensuring a heart-healthy lifestyle.",
  },
];

function OurServicesSection() {
  return (
    <section
      id="our-services"
      className="mx-auto flex max-w-screen-xl flex-col gap-y-20"
    >
      <div className="inner-container flex-col">
        <p className="text-center text-xl text-primary">Our Services</p>
        <h2 className="mx-auto text-3xl font-bold text-black">
          Heart Care Reimagined
        </h2>
        <p className="text-center font-lato text-xl text-gray">
          Expert care across a spectrum of heart health needs, delivered with
          precision and compassion.
        </p>
      </div>

      <div className="grid grid-cols-1 px-14 max-xl:gap-y-8 lg:grid-cols-2 xl:grid-cols-3 xl:gap-16">
        {ServicesData.map((data, index) => (
          <Service key={index} {...data} />
        ))}
      </div>
      <RequestAppointmentClientBtn />
    </section>
  );
}

export default OurServicesSection;

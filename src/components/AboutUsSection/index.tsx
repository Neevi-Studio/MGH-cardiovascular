import Image from "next/image";
import React from "react";

type CardProps = {
  icon: string;
  title: string;
  boldText: string;
  text: string;
};

function Card({ icon, title, text, boldText }: CardProps) {
  return (
    <div className="flex flex-col items-center max-xl:text-center justify-between gap-12 rounded-3xl bg-primary p-8 text-white xl:items-start">
      <div className="content-center rounded-full bg-primary-50 p-3 align-middle">
        <Image src={`icons/${icon}`} width={33} height={33} alt="Heart icon" />
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl">{title}</h3>
        <p className="text-white/50">
          <span className="block font-bold">{boldText}</span>
          {text}
        </p>
      </div>
    </div>
  ); 
} 





const cardsData = [
  {
    icon: "heart.svg",
    title: "Comprehensive Cardiac Services",
    boldText: "Integrated Heart Health Solutions",
    text: "We offer a full spectrum of cardiology services, ensuring seamless care from diagnosis to treatment.",
  },
  {
    icon: "team.svg",
    title: "Expert Medical Team",
    boldText: "Leaders in Cardiology",
    text: "Our cardiology experts are committed to your heart health, bringing world-class medical expertise to every appointment.",
  },

  {
    icon: "centered-approach.svg",
    title: "Patient-Centered Approach",
    boldText: "Your Heart, Our Passion",
    text: "Every heartbeat matters to us, driving personalized care that's as unique as you are.",
  },
];

function AboutUsSection() {
  return (
    <section id="about-us" className="custom-container flex-col md:px-12">
      <div className="inner-container flex-col">
        <p className="text-center text-xl text-primary">
          About us
        </p>
        <h2 className="text-3xl font-bold text-black max-xl:text-center">
          Unmatched Cardiology Expertise & Compassionate Care
        </h2>
        <p className="text-gray text-center text-xl">
          Welcome to MGH Cardiovascular Associates, where pioneering heart care
          meets
          <span className="block my-2">
            personalized treatment. Our practice is anchored in a commitment to
            excellence, providing
          </span>
          <span>
            the highest standard of cardiology services to our community.
          </span>
        </p>
      </div>

      <div className=" grid grid-cols-1 xl:grid-cols-3 gap-5 ">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            {...card}
          />
        ))}
      </div>
    </section>
  );
}

export default AboutUsSection;

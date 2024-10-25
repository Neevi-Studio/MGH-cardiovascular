import Image from "next/image";

type CardProps = {
  icon: string;
  title: string;
  boldText: string;
  text: string;
  index: number;
};

function Card({ icon, title, text, boldText, index }: CardProps) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={150 * index}
      className="flex flex-col items-center font-lato justify-between gap-12 rounded-3xl bg-primary p-8 text-white max-xl:text-center xl:items-start"
    >
      <div className="content-center rounded-full bg-primary-50 p-3 align-middle">
        <Image src={`icons/${icon}`} width={33} height={33} alt="Heart icon" />
      </div>
      <div className="flex flex-col justify-between h-full gap-2">
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
    <section
      data-aos="fade-up"
      id="about-us"
      className="custom-container flex-col md:px-12"
    >
      <div className="inner-container flex-col">
        <p className="text-center text-xl text-primary">About us</p>
        <h2 className="text-3xl font-bold text-black max-xl:text-center">
          Unmatched Cardiology Expertise & Compassionate Care
        </h2>
        <p className="text-center text-xl text-gray font-lato">
          Welcome to MGH Cardiovascular Associates, where pioneering heart care
          meets
          <span className="my-2 block">
            personalized treatment. Our practice is anchored in a commitment to
            excellence, providing
          </span>
          <span>
            the highest standard of cardiology services to our community.
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} index={index} />
        ))}
      </div>
    </section>
  );
}

export default AboutUsSection;

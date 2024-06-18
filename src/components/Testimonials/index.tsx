import Image from "next/image";

type CardProps = {
  text: string;
  image: string;
  nameAndRole: string;
};

function Card({ text, image, nameAndRole }: CardProps) {
  return (
    <div className="testimonials-slide mt-8 flex h-full flex-col items-center justify-center gap-8 rounded-2xl border border-gray-medium bg-white p-8 text-black shadow-md">
      <p>{text}</p>

      <div className="flex items-center gap-2">
        <Image
          src={`images/testimonials/${image}`}
          width={42}
          height={42}
          alt={image}
          // className="rounded-full"
        />
        <h3 className="text-2xl">{nameAndRole}</h3>
      </div>
    </div>
  );
}

const cardsData = {
  first: [
    {
      text: "After my vein treatment at MGH Cardiovascular Associates, I not only feel better but also have renewed confidence. The staff was incredibly professional and made sure I was comfortable throughout the process",
      image: "emma.svg",
      nameAndRole: "Emma C., Patient",
    },
    {
      text: "After my vein treatment at MGH Cardiovascular Associates, I not only feel better but also have renewed confidence. The staff was incredibly professional and made sure I was comfortable throughout the process",
      image: "emma.svg",
      nameAndRole: "Emma C., Patient",
    },
    {
      text: "After my vein treatment at MGH Cardiovascular Associates, I not only feel better but also have renewed confidence. The staff was incredibly professional and made sure I was comfortable throughout the process",
      image: "emma.svg",
      nameAndRole: "Emma C., Patient",
    },
    {
      text: "After my vein treatment at MGH Cardiovascular Associates, I not only feel better but also have renewed confidence. The staff was incredibly professional and made sure I was comfortable throughout the process",
      image: "emma.svg",
      nameAndRole: "Emma C., Patient",
    },
  ],
  second: [
    {
      text: "",
      image: ".svg",
      nameAndRole: "",
    },
    {
      text: "",
      image: ".svg",
      nameAndRole: "",
    },
    {
      text: "",
      image: ".svg",
      nameAndRole: "",
    },
  ],
  third: [
    {
      text: "",
      image: ".svg",
      nameAndRole: "",
    },
    {
      text: "",
      image: ".svg",
      nameAndRole: "",
    },
    {
      text: "",
      image: ".svg",
      nameAndRole: "",
    },
  ],
};

function Testimonials() {
  return (
    <section id="testimonials" className="custom-container flex-col">
      <div className="inner-container flex-col">
        <p className="text-center text-xl text-primary">Testimonial</p>
        <h2 className="text-center text-3xl font-bold text-black">
          What our Patients say about<span className="block">us?</span>
        </h2>
      </div>
      <div className="testimonials-slider">
        <div className="testimonials-slide-tracker">
          {/* It MUST be duplicated 2 times */}
          {cardsData.first.map((data, index) => (
            <Card key={index} {...data} />
          ))}
          {cardsData.first.map((data, index) => (
            <Card key={index + cardsData.first.length} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

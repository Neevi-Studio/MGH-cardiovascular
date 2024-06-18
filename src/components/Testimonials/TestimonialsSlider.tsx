import Image from "next/image";
import React from "react";

type CardProps = {
  text: string;
  image: string;
  nameAndRole: string;
};

function Card({ text, image, nameAndRole }: CardProps) {
  return (
    <div className="testimonials-slide flex h-[15rem] flex-col items-center justify-center gap-8 rounded-2xl border border-gray-medium bg-white p-8 text-black shadow-md">
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

function TestimonialsSlider({ data }: { data: CardProps[] }) {
  return (
    <div className="testimonials-slider">
      <div className="testimonials-slide-tracker gap-8">
        {/* It MUST be duplicated 2 times */}
        {data.map((card, index) => (
          <Card key={index} {...card} />
        ))}
        {data.map((card, index) => (
          <Card key={index + data.length} {...card} />
        ))}
      </div>
    </div>
  );
}

export default TestimonialsSlider;

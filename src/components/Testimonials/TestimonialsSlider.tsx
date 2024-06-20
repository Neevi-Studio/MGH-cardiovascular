import Image from "next/image";
import React from "react";

type CardProps = {
  text: string;
  image: string;
  nameAndRole: string;
};

function Card({ text, image, nameAndRole }: CardProps) {
  return (
    <div className="testimonials-slide min-w-[350px]  flex h-[17.5rem] flex-col items-center justify-center gap-8 rounded-2xl border border-gray-medium bg-white p-10 text-black shadow-md">
      <p className="font-lato">{text}</p>

      <div className="flex items-center mr-auto gap-2">
        <Image
          src={`images/testimonials/${image}`}
          width={42}
          height={42}
          alt={image}
          // className="rounded-full"
        />
        <h3 className="">{nameAndRole}</h3>
      </div>
    </div>
  );
}

function TestimonialsSlider({
  data,
  faster,
}: { data: CardProps[] } & { faster?: boolean }) {
  return (
    <div className="testimonials-slider">
      <div
        className={`${faster ? "testimonials-slide-tracker-faster" : "testimonials-slide-tracker"} gap-8`}
      >
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

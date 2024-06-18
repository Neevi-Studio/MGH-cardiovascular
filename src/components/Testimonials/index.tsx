import Image from "next/image";
import TestimonialsSlider from "./TestimonialsSlider";

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
      image: "",
      nameAndRole: "",
    },
    {
      text: "",
      image: "",
      nameAndRole: "",
    },
    {
      text: "",
      image: "",
      nameAndRole: "",
    },
    {
      text: "",
      image: "",
      nameAndRole: "",
    },
  ],
  third: [
    {
      text: "",
      image: "",
      nameAndRole: "",
    },
    {
      text: "",
      image: "",
      nameAndRole: "",
    },
    {
      text: "",
      image: "",
      nameAndRole: "",
    },
    {
      text: "",
      image: "",
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
      <div className="testimonials-sliders-wrapper relative overflow-hidden">
        <div className="flex gap-8 p-4" >
          <TestimonialsSlider key={1} data={cardsData.first} />
          <TestimonialsSlider faster key={2} data={cardsData.first} />
          <TestimonialsSlider key={3} data={cardsData.first} />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

import Image from "next/image";
import TestimonialsSlider from "./TestimonialsSlider";

const cardsData = {
  first: [
    {
      text: "After my vein treatment at MGH Cardiovascular Associates, I not only feel better but also have renewed confidence. The staff was incredibly professional and made sure I was comfortable throughout the process",
      image: "images/testimonials/emma.svg",
      nameAndRole: "Emma C., Patient",
    },
    {
      text: "As a woman, finding specialized heart care that addresses my specific needs was a challenge until I found MGH Cardiovascular Associates. The compassionate care and expert advice from Dr. Habib have made a significant difference in my health and well-being",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708e",
      nameAndRole: "Alexa Rivera",
    },
    {
      text: "The level of care I received at MGH Cardiovascular Associates was outstanding. From the detailed explanations during my initial consultation to the follow-up after my procedure, I felt supported every step of the way. Truly a top-notch cardiology team!",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708h",
      nameAndRole: "Maria T., Patient",
    },
  ],
  second: [
    {
      text: "Booking an appointment was quick and easy, and I appreciated the minimal waiting time. It’s clear that patient time and care are a priority for them.",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708c",
      nameAndRole: "George M., Patient",
    },
    {
      text: "MGH Cardiovascular Associates have been instrumental in managing my heart condition. Their attention to detail and the personalized care plan they tailored for me have significantly improved my quality of life.",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708a",
      nameAndRole: "Sophia L., Patient",
    },
    {
      text: "The comprehensive cardiac workup I received in their office was more thorough than any I’ve had before. It's reassuring to know that my heart health is in such capable hands",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708hc",
      nameAndRole: "Richard S., Patient",
    },
  ],
  third: [
    {
      text: "I am so grateful for the preventative care and advice I've received. The proactive approach has helped me make lifestyle changes that have dramatically improved my heart health",
      image: "https://i.pravatar.cc/150?u=a04258114e29026702j",
      nameAndRole: "Oliver H., Patient",
    },
    {
      text: "Their acceptance of a wide range of insurance plans was a relief. It made the decision to choose MGH Cardiovascular Associates for my cardiac care much easier.",
      image: "https://i.pravatar.cc/150?u=a04258114e29026708l",
      nameAndRole: "Linda K., Patient",
    },
    {
      text: "The patient education provided by MGH Cardiovascular Associates helped me understand my health better and made me feel like a partner in my treatment process, not just a patient",
      image: "https://i.pravatar.cc/150?u=a04258114e29026702p",
      nameAndRole: "Natalie W., Patient",
    },
  ],
};

function Testimonials() {
  return (
    <section id="testimonials" className="custom-container flex-col max-w-screen overflow-x-hidden">
      <div className="inner-container flex-col">
        <p className="text-center text-xl text-primary">Testimonials</p>
        <h2 className="text-center text-3xl font-bold text-black">
          What our Patients say about<span className="block">us?</span>
        </h2>
      </div>
      <div className="testimonials-sliders-wrapper relative overflow-hidden">
        <div className="flex gap-8 p-4" >
          <TestimonialsSlider key={1} data={cardsData.first} />
          <TestimonialsSlider faster key={2} data={cardsData.second} />
          <TestimonialsSlider key={3} data={cardsData.third} />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

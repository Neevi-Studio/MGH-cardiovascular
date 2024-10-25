import Image from "next/image";
import HeroClientBtns from "./HeroClientBtns";

function HeroSection() {
  return (
    <section id="home" className="custom-container max-xl:flex-col">
      <div className="inner-container flex-col">
        <h1 data-aos="fade-up" className="text-2xl text-primary xl:text-4xl">
          Leading Interventional & General Cardiology Services
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="font-lato text-xl text-gray"
        >
          Explore expert cardiology services tailored for optimal heart health,
          all delivered by our leading specialists. Experience the difference
          with MGH Cardiovascular Associates.
        </p>
        <HeroClientBtns />
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="150"
        style={{
          backgroundImage: "url('/images/hero-bg.svg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="relative overflow-hidden rounded-3xl bg-primary xl:h-full xl:w-full"
      >
        <Image
          data-aos="fade-down"
          data-aos-delay="350"
          src="/images/immediate-appointments-hero.svg"
          width={320}
          height={74.32}
          alt="Immediate Appointments Available"
          className="absolute right-1 top-6"
        />
        <Image
          src="/images/hero-section.svg"
          alt="Smiling womans"
          width={534}
          height={578}
          className="xl:w-full"
        />
        <Image
          data-aos="fade-up"
          data-aos-delay="350"
          src="/images/comprehensive-cardiac-hero.svg"
          width={320}
          height={74.32}
          alt="Comprehensive Cardiac Solutions"
          className="absolute left-5 top-24"
        />
      </div>
    </section>
  );
}

export default HeroSection;

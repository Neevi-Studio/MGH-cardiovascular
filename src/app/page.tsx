"use client";
import AboutUsSection from "@/components/AboutUsSection";
import BookAnAppointmentFormSection from "@/components/BookAnAppointmentFormSection";
import BookAnAppointmentSection from "@/components/BookAnAppointmentSection";
import ControlYourHeartHealthVideoSection from "@/components/ControlYourHeartHealthVideoSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InsuranceAndPaymentOptions from "@/components/InsuranceAndPaymentOptions";
import OurCardiologistSection from "@/components/OurCardiologistSection";
import OurServicesSection from "@/components/OurServicesSection";
import Testimonials from "@/components/Testimonials";

export const mainStyles = ` mx-auto flex max-xl:text-center max-w-screen-2xl flex-col gap-10 lg:p-10 p-5 xl:gap-20 xl:p-20 `;

export default function Home() {
  return (
    <main>
      <div className={mainStyles + "mt-8"}>
        <HeroSection />
        <ControlYourHeartHealthVideoSection />
      </div>
      <div className="mx-auto my-12 flex max-w-screen-xl flex-col items-center justify-center gap-y-8">
        <AboutUsSection />
        <OurCardiologistSection />
      </div>

      <div className="w-full bg-gray-light">
        <div className={mainStyles}>
          <OurServicesSection />
        </div>
      </div>

      <div className={mainStyles}>
        <InsuranceAndPaymentOptions />
        <BookAnAppointmentSection />
        <Testimonials />
      </div>

      <div className="mx-auto p-2 xl:p-8">
        <BookAnAppointmentFormSection />
      </div>

      <div className={`${mainStyles}`}>
        <FAQSection />
      </div>

      <Footer />
    </main>
  );
}

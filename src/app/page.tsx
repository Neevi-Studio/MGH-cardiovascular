import AboutUsSection from "@/components/AboutUsSection";
import BookAnAppointmentFormSection from "@/components/BookAnAppointmentFormSection";
import BookAnAppointmentSection from "@/components/BookAnAppointmentSection";
import ControlYourHeartHealthVideoSection from "@/components/ControlYourHeartHealthVideoSection";
import HeroSection from "@/components/HeroSection";
import InsuranceAndPaymentOptions from "@/components/InsuranceAndPaymentOptions";
import OurCardiologistSection from "@/components/OurCardiologistSection";
import OurServicesSection from "@/components/OurServicesSection";

const mainStyles = ` mx-auto flex max-xl:text-center max-w-screen-2xl flex-col gap-10 lg:p-10 p-5 xl:gap-20 xl:p-20 `;

export default function Home() {
  return (
    <main>
      <div className={mainStyles + "mt-8"}>
        <HeroSection />
        <ControlYourHeartHealthVideoSection />
        <AboutUsSection />
        <OurCardiologistSection />
      </div>

      <div className="bg-gray-light w-full">
        <div className={mainStyles}>
          <OurServicesSection />
        </div>
      </div>

      <div className={mainStyles}>
        <InsuranceAndPaymentOptions />
        <BookAnAppointmentSection />
        {/* TODO: Testimonials */}
        <BookAnAppointmentFormSection />
      </div>
    </main>
  );
}

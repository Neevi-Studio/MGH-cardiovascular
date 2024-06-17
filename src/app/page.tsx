import AboutUsSection from "@/components/AboutUsSection";
import BookAnAppointment from "@/components/BookAnAppointment";
import ControlYourHeartHealthVideoSection from "@/components/ControlYourHeartHealthVideoSection";
import HeroSection from "@/components/HeroSection";
import InsuranceAndPaymentOptions from "@/components/InsuranceAndPaymentOptions";
import OurCardiologistSection from "@/components/OurCardiologistSection";
import OurServicesSection from "@/components/OurServicesSection";

const mainStyles = ` mx-auto flex max-xl:text-center max-w-screen-2xl flex-col gap-10 lg:p-10 p-5 xl:gap-20 xl:p-20 `;

export default function Home() {
  return (
    <main>
      <div className={mainStyles}>
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
        <BookAnAppointment />
      </div>
    </main>
  );
}

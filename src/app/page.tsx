
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
// import Testimonials from "@/components/Testimonials";
import Blogs from "./Blogs";
import Head from "next/head";
import dynamic from "next/dynamic";

const mainStyles = ` mx-auto flex max-xl:text-center max-w-screen-2xl flex-col gap-10 lg:p-10 p-5 xl:gap-20 xl:p-20 `;
const Testimonials = dynamic(() => import("@/components/Testimonials"), { loading: () => <p>Loading...</p> });

export default function Home() {
  return (
    <main>
      <Head>
      <title>MGH Cardiovascular Associates</title>
      <meta name="description" content="We offer comprehensive in-office cardiac testing to accurately diagnose and manage heart conditions." />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://www.mghcardio.com/" />
    </Head>
      <div className={mainStyles}>
        <HeroSection />
        <ControlYourHeartHealthVideoSection />
      </div>
      <div className="mx-auto my-12 flex max-w-screen-xl flex-col items-center justify-center gap-y-8">
        <AboutUsSection />
        <OurCardiologistSection />
        <Blogs />
      </div>

      <div className="w-full bg-gray-light">
        <div className={mainStyles}>
          <h2 className="inline-block bg-gradient-to-r from-gray-dark to-gray-100 bg-clip-text text-center text-xl font-bold text-transparent drop-shadow-xl xl:text-3xl">
            We offer comprehensive in-office cardiac testing to accurately
            diagnose and manage heart conditions.
          </h2>
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

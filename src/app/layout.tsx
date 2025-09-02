import AOSInit from "@/components/AOSInit";
import NavBar, { BottomNavBar } from "@/components/NavBar";
import type { Metadata } from "next";
import { Amiko, Be_Vietnam_Pro, Inter, Lato } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";
import { ImMobile } from "react-icons/im";
import "./globals.css";
import { Providers } from "./providers";
import "swiper/css";
import "swiper/css/pagination";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "MGH Cardiovascular Associates | Leading Heart Care & Top Cardiologists",
  metadataBase: new URL("https://www.mghcardio.com"),
  description:
    "MGH Cardiovascular Associates delivers world-class cardiovascular care with cutting-edge diagnostics, personalized treatment plans, and prevention strategies led by top cardiologists. Specializing in heart disease prevention, advanced cardiac diagnostics, and innovative treatments to support lifelong heart health.",
  keywords: [
    "Cardiovascular care experts",
    "Top heart specialists",
    "Best cardiologists near me",
    "Heart disease prevention strategies",
    "Advanced cardiac diagnostics",
    "Personalized heart treatments",
    "Comprehensive cardiovascular services",
    "Heart health management",
    "Cardiac care specialists",
    "Cardiac surgery",
    "Preventive heart care",
    "Expert heart doctors",
    "Heart disease treatments",
    "MGH heart specialists",
    "Leading cardiovascular clinic",
    "Cutting-edge heart diagnostics",
    "Heart health solutions",
    "Best cardiologists in MGH",
    "Advanced cardiovascular treatments",
    "Cardiac care solutions",
    "Interventional Cardiology Paterson NJ",
    "Heart Health Specialists Paterson",
    "Cardiology Consultations Near Me",
    "Cardiovascular Checkups New Jersey",
    "MGH Cardiovascular Associates Services",
    "Dr. Mirette Habib Cardiologist",
    "Vein Treatments Paterson NJ",
    "In-Office Cardiac Testing",
    "Cardiology Specialists New Jersey",
    "Preventative Cardiology Services",
    "Women's Heart Health Experts",
    "Heart Disease Prevention Paterson",
    "Comprehensive Cardiac Care NJ",
    "Paterson General Cardiology",
    "Board-Certified Cardiologists NJ",
    "Heart Disease Management New Jersey",
    "MGH Heart Care Services",
    "Cardiac Consultations NJ",
    "Minimally Invasive Heart Treatments",
    "Heart Checkups Paterson NJ",
    "Best Cardiologists Paterson NJ",
    "Cardiovascular Testing NJ",
    "In-Office Cardiology Workups",
    "Dr. Mirette Habib FACC",
    "Top Heart Doctors NJ",
    "Expert Heart Health NJ",
    "MGH Heart Disease Specialists",
    "Heart Care Appointments Paterson",
    "Coronary Artery Disease Treatment NJ",
    "Heart Attack Prevention NJ",
    "Angioplasty Services Paterson NJ",
    "Cholesterol Management Paterson",
    "Hypertension Treatment NJ",
    "Atrial Fibrillation Treatment Paterson",
    "Heart Rhythm Monitoring NJ",
    "Echocardiogram Testing Paterson",
    "Holter Monitor Testing NJ",
    "Cardiac Arrhythmia Treatments",
    "Heart Screening Services NJ",
    "Cardiovascular Risk Assessments",
    "Blood Pressure Control Paterson",
    "Cardiac Rehabilitation NJ",
    "Heart Failure Management Paterson",
    "Heart Disease Screening New Jersey",
    "Electrocardiogram (ECG) Testing NJ",
    "Women’s Heart Health NJ",
    "Vascular Disease Treatment Paterson",
    "Stress Testing NJ",
    "Pacemaker Monitoring Services",
    "Chronic Heart Disease Management",
    "Cardiology Second Opinions Paterson",
    "Blood Pressure Monitoring NJ",
    "Heart Valve Disease Treatment",
    "Peripheral Artery Disease NJ",
    "Congestive Heart Failure Paterson",
    "Holistic Heart Health Approaches NJ",
    "Cardiovascular Wellness Programs",
    "Heart Condition Diagnosis NJ",
    "Heart Palpitations Treatment Paterson",
    "Cardiology Diagnostics New Jersey",
    "Arrhythmia Management NJ",
    "Vascular Health Assessments Paterson",
    "Heart Attack Treatment New Jersey",
    "Cardiovascular Disease Prevention NJ",
    "Cardiology Clinic Near Paterson",
    "Emergency Heart Care NJ",
    "Heart Health Evaluation Paterson",
    "Primary Heart Care Services",
    "Heart Disease Specialist Paterson NJ",
    "Heart Disease Risk Factors NJ",
    "Heart Failure Specialist Paterson",
    "Cardiac Imaging Services NJ",
    "Hypertension Specialist NJ",
    "Heart Murmur Evaluation Paterson",
    "Cardiac Wellness Programs NJ",
    "New Jersey Heart Specialists",
    "Advanced Heart Disease Care NJ",
    "Cardiovascular Health Programs",
    "General Cardiology Paterson",
    "Cardiovascular Medicine Paterson",
    "Blood Pressure Control Programs NJ",
    "Heart Testing Services Paterson",
    "Heart Failure Treatment NJ",
    "Cardiovascular Rehabilitation Paterson",
    "Heart Care Experts Paterson NJ",
    "Adult Cardiology NJ",
    "Top Cardiologists Paterson NJ",
    "Cardiac Health Plans NJ",
    "Best Cardiology Practice Paterson",
    "High Blood Pressure Care NJ",
    "Heart Disease Prevention Program NJ",
    "Heart Monitoring Services Paterson",
    "Heart Disease Education Paterson",
    "Blood Pressure Management NJ",
    "Cardiovascular Consultations NJ",
    "Heart Health Services Paterson",
    "Chronic Heart Failure Management NJ",
    "Cardiac Testing Paterson NJ"
  ],
  openGraph: {
    title: "MGH Cardiovascular Associates | Premier Heart Care",
    description:
      "At MGH Cardiovascular Associates, we offer the highest level of heart care. Our expert cardiologists provide personalized treatments, cutting-edge diagnostics, and comprehensive services for heart disease prevention and management.",
    images: [
      {
        url: "/heart-care.jpg",
        width: 1200,
        height: 630,
        alt: "State-of-the-art heart care at MGH Cardiovascular Associates",
      },
    ],
    siteName: "MGH Cardiovascular Associates",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comprehensive Heart Care | MGH Cardiovascular Associates",
    description:
      "Discover expert heart care at MGH Cardiovascular Associates, offering personalized cardiovascular treatments, advanced diagnostics, and heart disease prevention. Learn more about our innovative services today.",
    images: [
      {
        url: "/heart-care.jpg",
        width: 800,
        height: 418,
        alt: "Top cardiologists at MGH Cardiovascular Associates delivering exceptional care",
      },
    ],
  },
  category: "Advanced Cardiovascular Care",
  classification: "Heart Health & Treatment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <head>
      {/* Preconnect to Google domains */}
      <link rel="preconnect" href="https://www.google.com" />
      <link rel="preconnect" href="https://maps.googleapis.com" />
      <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="anonymous" />

    {/* Facebook Meta Tags */}
    <meta property="og:url" content="https://www.mghcardio.com/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="MGH Cardiovascular Associates | Premier Heart Care" />
    <meta property="og:description" content="At MGH Cardiovascular Associates, we offer the highest level of heart care. Our expert cardiologists provide personalized treatments, cutting-edge diagnostics, and comprehensive services for heart disease prevention and management." />
    <meta property="og:image" content="https://www.mghcardio.com/heart-care.jpg" />

    {/* Twitter Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="mghcardio.com" />
    <meta property="twitter:url" content="https://www.mghcardio.com/" />
    <meta name="twitter:title" content="MGH Cardiovascular Associates | Premier Heart Care" />
    <meta name="twitter:description" content="At MGH Cardiovascular Associates, we offer the highest level of heart care. Our expert cardiologists provide personalized treatments, cutting-edge diagnostics, and comprehensive services for heart disease prevention and management." />
    <meta name="twitter:image" content="https://www.mghcardio.com/heart-care.jpg" />
    </head>
      <body
        className={`${inter.variable} ${liberationSans.variable} ${beVietnamPro.variable} ${amiko.variable} ${lato.variable} ${hlad.className} bg-white`}
      >
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        <Providers>
          <div className="flex w-full items-center justify-center bg-primary px-2 text-sm text-white max-md:py-2 md:h-9 md:px-12">
            <div className="flex w-full max-w-screen-2xl flex-col items-center justify-between gap-y-1 md:flex-row">
              <Link
                className="text-xs max-md:text-center"
                href={"https://maps.app.goo.gl/CKgzrQiu6NyDTNtX7"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Address: 680 Broadway, Suite 503, Paterson, NJ 07514
              </Link>
              <div className="flex flex-row items-center gap-x-1">
                <ImMobile size={25} className="text-[#E2C08E]" />
                <Link
                  className="text-xs max-md:text-center"
                  href={"tel:9736535867"}
                >
                  Call Us : (973) 653-5867
                </Link>
              </div>
            </div>
          </div>
          <div className="z-[999] -mb-2 mt-6 w-full">
            <NavBar />
          </div>
          {children}
          <div className="fixed bottom-6 z-[999] w-full">
            <BottomNavBar />
          </div>
        </Providers>
      </body>
    </html>
  );
}

//
//
// USed Fonts - Default is hlad

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700"],
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  variable: "--font-be-vietnam-pro",
  weight: ["100", "300", "400", "500", "600", "700"],
});

const amiko = Amiko({
  subsets: ["latin"],
  variable: "--font-amiko",
  weight: ["400", "600", "700"],
});

const hlad = localFont({
  src: [
    {
      path: "../../public/fonts/hlad/hlad-thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/hlad/hlad-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/hlad/hlad-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/hlad/hlad-semi-bold.otf",
      weight: "600",
      style: "normal",
    },

    {
      path: "../../public/fonts/hlad/hlad-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-hlad",
});

const liberationSans = localFont({
  src: [
    {
      path: "../../public/fonts/liberation-sans/liberation-sans-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/liberation-sans/liberation-sans-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-liberation-sans",
});

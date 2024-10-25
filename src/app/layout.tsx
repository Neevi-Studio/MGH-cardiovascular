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

export const metadata: Metadata = {
  title: "MGH Cardiovascular Associates | Leading Heart Care & Top Cardiologists",
  metadataBase: new URL("https://www.mghcardio.com"), 
  description:
    "MGH Cardiovascular Associates delivers world-class cardiovascular care with cutting-edge diagnostics, personalized treatment plans, and prevention strategies led by top cardiologists. Specializing in heart disease prevention, advanced cardiac diagnostics, and innovative treatments to support lifelong heart health.",
  keywords: [
    "cardiovascular care experts",
    "top heart specialists",
    "best cardiologists near me",
    "heart disease prevention strategies",
    "advanced cardiac diagnostics",
    "personalized heart treatments",
    "comprehensive cardiovascular services",
    "heart health management",
    "cardiac care specialists",
    "cardiac surgery",
    "preventive heart care",
    "expert heart doctors",
    "heart disease treatments",
    "MGH heart specialists",
    "leading cardiovascular clinic",
    "cutting-edge heart diagnostics",
    "heart health solutions",
    "best cardiologists in MGH",
    "advanced cardiovascular treatments",
    "cardiac care solutions",
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
      <body
        className={`${inter.variable} ${liberationSans.variable} ${beVietnamPro.variable} ${amiko.variable} ${lato.variable} ${hlad.className} bg-white`}
      >
        <Providers>
          <div className="flex w-full items-center justify-center bg-primary px-2 text-sm text-white max-md:py-2 md:h-9 md:px-12">
            <div className="flex w-full max-w-screen-2xl flex-col items-center justify-between gap-y-1 md:flex-row">
              <Link
                className="text-xs max-md:text-center"
                href={"https://www.google.com/maps"}
                target="_blank"
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

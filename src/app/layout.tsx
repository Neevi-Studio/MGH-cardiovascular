import AOSInit from "@/components/AOSInit";
import NavBar, { BottomNavBar } from "@/components/NavBar";
import type { Metadata } from "next";
import { Amiko, Be_Vietnam_Pro, Inter, Lato } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";
import { ImMobile } from "react-icons/im";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "MGH Cardiovascular Associates | Expert Heart Care & Cardiologists",
  description:
    "MGH Cardiovascular Associates offers advanced cardiovascular care, personalized heart treatments, and expert cardiologists. Specializing in heart disease prevention, cutting-edge diagnostics, and heart health management.",
  keywords: [
    "cardiovascular care",
    "heart care specialists",
    "cardiologists near me",
    "heart disease prevention",
    "advanced heart diagnostics",
    "personalized heart treatment",
    "cardiovascular treatments",
    "heart health services",
    "cardiovascular services",
    "cardiac care",
    "heart surgery",
    "heart health management",
    "cardiac diagnostics",
    "heart disease treatment",
    "heart care clinic",
    "MGH Cardiovascular Associates",
    "best heart doctors",
    "heart disease prevention tips",
    "heart health clinic",
    "top cardiologists",
  ],
  openGraph: {
    title: "MGH Cardiovascular Associates - Comprehensive Heart Care",
    description:
      "Trust MGH Cardiovascular Associates for advanced heart care. Our team of expert cardiologists provides personalized treatments, cutting-edge diagnostics, and heart disease prevention services.",
    // url: "https://www.mghcardio.com", // Add prod url
    images: [
      {
        url: "/heart-care.jpg", // I think it should be an absolute path from the prod url  OR Add metadataBase
        width: 1200,
        height: 630,
        alt: "Heart care equipment and specialists",
      },
    ],
    siteName: "MGH Cardiovascular Associates",
  },
  // metadataBase: new URL("https://www.mghcardio.com"), // Add Prod Url
  twitter: {
    card: "summary_large_image",
    title: "Advanced Heart Care | MGH Cardiovascular Associates",
    description:
      "MGH Cardiovascular Associates offers expert cardiologists, advanced diagnostics, and personalized heart care treatments. Learn more about our cardiovascular services.",
    images: [
      {
        url: "/heart-care.jpg", // I think it should be an absolute path from the prod url OR Add metadataBase
        width: 800,
        height: 418,
        alt: "Heart care services by MGH Cardiovascular Associates",
      },
    ],
  },
  category: "Cardiovascular Care",
  classification: "Cardiovascular Care",
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

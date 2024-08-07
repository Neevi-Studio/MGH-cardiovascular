import AOSInit from "@/components/AOSInit";
import NavBar, { BottomNavBar } from "@/components/NavBar";
import type { Metadata } from "next";
import { Be_Vietnam_Pro, Inter, Lato, Amiko } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";
import { ImMobile } from "react-icons/im";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "MGH Cardiovascular Associates",
  description:
    "MGH Cardio offers top-tier cardiovascular care with advanced technology and experienced cardiologists. We provide personalized treatments, preventive care, and cutting-edge diagnostics to help you maintain a healthy heart.",
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

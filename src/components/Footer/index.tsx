import { Button } from "@nextui-org/react";
import Image from "next/image";
import { BsTwitter } from "react-icons/bs";
import { RiInstagramFill, RiLinkedinFill } from "react-icons/ri";
import { scrollToElementById } from "../NavBar";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-[#FBFBFB] pb-8">
      <div className="relative size-60">
        <Image
          src="/container.svg"
          fill
          className="object-contain"
          alt="Heart"
        />
      </div>
      <div className="flex flex-row items-center gap-x-3 max-md:flex-wrap max-md:justify-center max-md:gap-y-4 max-md:px-4">
        <Button
          onClick={() => scrollToElementById("home")}
          size="sm"
          className="border border-transparent bg-transparent font-normal text-gray-100 transition-all duration-300 hover:border-primary hover:font-bold hover:text-primary md:w-[50px]"
        >
          Home
        </Button>
        <Button
          onClick={() => scrollToElementById("about-us")}
          size="sm"
          className="border border-transparent bg-transparent font-normal text-gray-100 transition-all duration-300 hover:border-primary hover:font-bold hover:text-primary md:w-[90px]"
        >
          About us
        </Button>
        <Button
          onClick={() => scrollToElementById("our-services")}
          size="sm"
          className="border border-transparent bg-transparent font-normal text-gray-100 transition-all duration-300 hover:border-primary hover:font-semibold hover:text-primary md:w-[90px]"
        >
          Our services
        </Button>
        <Button
          onClick={() => scrollToElementById("testimonials")}
          size="sm"
          className="border border-transparent bg-transparent font-normal text-gray-100 transition-all duration-300 hover:border-primary hover:font-semibold hover:text-primary md:w-[90px]"
        >
          Testimonials
        </Button>
        <Button
          onClick={() => scrollToElementById("request-appointment")}
          size="sm"
          className="border border-transparent bg-transparent font-normal text-gray-100 transition-all duration-300 hover:border-primary hover:font-semibold hover:text-primary md:w-[90px]"
        >
          Contact us
        </Button>
      </div>

      <div className="mt-8 h-[0.5px] w-full bg-[#E5E5E8]" />
      <div className="mt-8 flex w-full flex-col items-center justify-between gap-y-4 px-6 md:flex-row">
        <p className="text-sm max-md:text-center">
          © MGH Cardiovascular Associates 2024. All rights reserved.
        </p>
        <div className="flex flex-row items-center gap-x-3">
          <Button isIconOnly className="bg-transparent text-2xl text-primary">
            <BsTwitter />
          </Button>
          <Button isIconOnly className="bg-transparent text-2xl text-primary">
            <RiLinkedinFill />
          </Button>
          <Button isIconOnly className="bg-transparent text-2xl text-primary">
            <RiInstagramFill />
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

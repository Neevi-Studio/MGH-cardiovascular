"use client";
import { Button } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import { scrollToElementById } from "../NavBar";
function HeroClientBtns() {
  const pathName = usePathname();
  const { push } = useRouter();
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="150"
      className="mx-auto flex w-full items-center justify-between gap-3 max-xl:flex-col-reverse"
    >
      <Button
        onClick={() =>
          pathName == "/"
            ? scrollToElementById("our-services")
            : push("/#our-services")
        }
        size="lg"
        color="primary"
        className="font-be-vietnam-pro font-medium"
        variant="bordered"
      >
        Our Services
      </Button>
      <Button
        onClick={() =>
          pathName == "/"
            ? scrollToElementById("our-cardiologist")
            : push("/#our-cardiologist")
        }
        size="lg"
        color="primary"
        className="font-amiko"
      >
        Meet Our Cardiologist
        {/* <MdOutlineArrowOutward size={30} className="rotate-90" /> */}
      </Button>
    </div>
  );
}

export default HeroClientBtns;

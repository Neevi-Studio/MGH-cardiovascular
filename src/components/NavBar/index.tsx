"use client";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { BiHome } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { FaQuestionCircle, } from "react-icons/fa";
import { MdOutlineHomeRepairService, MdOutlineReviews } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";

const fixedScrollOffset = 107;

function NavBarItemLink({
  item,
  isMobileMenuItem,
  setIsMenuOpen,
}: {
  item: { name: string; link: string };
  isMobileMenuItem?: boolean;
  setIsMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <ScrollLink
      onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
      to={item?.link}
      activeClass={"font-bold text-primary"}
      spy={true}
      smooth={true}
      offset={-fixedScrollOffset}
      className={
        isMobileMenuItem
          ? "w-full"
          : "z-10 flex items-center justify-center hover:cursor-pointer"
      }
    >
      {item?.name}
    </ScrollLink>
  );
}

export const scrollToElementById = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY - fixedScrollOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "About Us",
      link: "about-us",
    },
    {
      name: "Our Services",
      link: "our-services",
    },

    {
      name: "Testimonials",
      link: "testimonials",
    },
    {
      name: "FAQ",
      link: "faq",
    },
  ];

  const [_, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Navbar
      maxWidth="full"
      className="mx-auto  w-[95%] md:w-[90%] max-w-screen-xl rounded-lg border border-primary bg-white/90 py-2  "
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      style={{ height: "60px" }}
    >
      <NavbarContent justify="start">
        {/* <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-black xl:hidden"
        /> */}
        <ScrollLink
          to={"home"}
          spy={true}
          smooth={true}
          offset={-fixedScrollOffset}
          className="z-10 flex items-center justify-center hover:cursor-pointer "
        >
          <NavbarBrand className="max-md:justify-end relative size-32 md:size-52 -ml-4 ">
            <Image src={"/logo.avif"} fill className="object-contain" alt="brand" />
          </NavbarBrand>

        </ScrollLink>
      </NavbarContent>
      <NavbarContent className="hidden gap-8 xl:flex" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`} className="text-gray-100">
            <NavBarItemLink item={item} />
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="  -mr-4" justify="end">
        <Button
        size='sm'
          color="primary"
          className="rounded-lg md:px-6 text-sm  text-white"
        >
          <ScrollLink
            to={"request-appointment"}
            activeClass=" text-gray-medium"
            spy={true}
            smooth={true}
            offset={-fixedScrollOffset}
            cellPadding={1}
            className="z-10 flex items-center justify-center hover:cursor-pointer max-md:text-[10px]"
          >
            Request Appointment
          </ScrollLink>
        </Button>
      </NavbarContent>
      {/* <NavbarMenu className="px-[10%] pt-14 mt-14">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            className="text-gray-100 font-medium text-xs"
          >
            <NavBarItemLink
              setIsMenuOpen={setIsMenuOpen}
              item={item}
              isMobileMenuItem
            />
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button
            onClick={() => {
              // scrollToElementById("request-appointment");
              setIsMenuOpen(false);
            }}
            color="primary"
            className="mt-2 w-full rounded-xl px-2 text-sm font-bold text-white"
          >
            <ScrollLink
              onClick={() => setIsMenuOpen(false)}
              to={"request-appointment"}
              activeClass="font-bold text-gray-medium"
              spy={true}
              smooth={true}
              offset={-fixedScrollOffset}
              className="z-10 flex items-center justify-center hover:cursor-pointer"
            >
              Request Appointment
            </ScrollLink>
          </Button>
        </NavbarMenuItem>
      </NavbarMenu> */}
    </Navbar>
  );
}

export default NavBar;



export function BottomNavBar() {

  return (
    <div className="flex flex-row w-[98%] md:w-[90%] mx-auto divide-x divide-[#D9C5A7] h-14 bg-[#DCD1BF] border  py-1  rounded-xl border-[#D9C5A7] xl:hidden" >
      <Button
        radius="none"
        className="flex flex-1 items-center justify-center flex-col text-white h-full bg-transparent " >
        <BiHome className="text-sm md:text-xl " />
        <p className="-mt-1 text-xs" >Home</p>
      </Button>
      <Button
        radius="none"
        className="flex flex-1 items-center justify-center flex-col text-white h-full bg-transparent" >
        <BsPeople className="text-sm md:text-xl " />
        <p className="-mt-1 text-xs" >About Us</p>
      </Button>
      <Button
        radius="none"
        className="flex flex-1 items-center justify-center flex-col text-white h-full bg-transparent " >
        <MdOutlineHomeRepairService className="text-sm md:text-xl " />
        <p className="-mt-1 text-xs" >Our Services</p>
      </Button>
      <Button
        radius="none"
        className="flex flex-1 items-center justify-center flex-col text-white h-full bg-transparent " >
        <MdOutlineReviews className="text-sm md:text-xl " />
        <p className="-mt-1 text-xs" >Testmonials</p>
      </Button>
      <Button
        radius="none"
        className="flex flex-1 flex-col text-white h-full bg-transparent max-md:hidden" >
        <FaQuestionCircle className="text-sm md:text-xl " />
        <p className="-mt-1 text-xs" >FAQ</p>
      </Button>

    </div>
  )
}
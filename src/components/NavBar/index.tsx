"use client";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";
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
      className="mx-auto mt-8 w-[90%] max-w-screen-xl rounded-xl border border-primary bg-white/90 p-2"
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      style={{ height: "60px" }}
      // isBordered
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-black xl:hidden"
        />
        <ScrollLink
          to={"home"}
          spy={true}
          smooth={true}
          offset={-fixedScrollOffset}
          className="z-10 flex items-center justify-center hover:cursor-pointer max-md:ml-auto"
        >
          <NavbarBrand className="max-md:justify-end">
            <Image src={"logo.svg"} width={275} height={46.25} alt="brand" />
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
      <NavbarContent className="hidden gap-8 sm:flex" justify="end">
        <Button
          color="primary"
          className="rounded-xl px-6 text-sm font-bold text-white"
        >
          <ScrollLink
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
      </NavbarContent>
      <NavbarMenu className="px-[10%] pt-14">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            className="text-gray-100 font-medium"
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
      </NavbarMenu>
    </Navbar>
  );
}

export default NavBar;

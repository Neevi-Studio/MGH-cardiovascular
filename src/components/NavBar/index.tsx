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
import { FaQuestionCircle } from "react-icons/fa";
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
    const y =
      element.getBoundingClientRect().top + window.scrollY - fixedScrollOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

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

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
      data-aos="fade-right"
      maxWidth="full"
      className="mx-auto w-[95%] max-w-screen-xl rounded-lg border border-primary bg-white/90 py-2 md:w-[90%]"
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
          className="z-10 flex items-center justify-center hover:cursor-pointer"
        >
          <NavbarBrand className="relative -ml-4 max-md:justify-end">
            <Image
              src={"/logo.avif"}
              width={225}
              height={41}
              className="object-contain"
              alt="brand"
            />
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
      <NavbarContent className="-mr-4" justify="end">
        <Button
          size="sm"
          color="primary"
          className="rounded-lg text-sm text-white md:px-6"
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
    </Navbar>
  );
}

export default NavBar;

function BottomNavBarLink({
  linkId,
  icon,
  title,
}: {
  linkId: string;
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <Button
      key={linkId + title}
      onClick={() => scrollToElementById(linkId)}
      radius="none"
      className="flex h-full flex-1 flex-col items-center justify-center bg-transparent text-white"
    >
      {icon}
      <p className="-mt-1 text-xs">{title}</p>
    </Button>
  );
}

const bottomNavarIconClasses = ` text-sm md:text-xl `;

export function BottomNavBar() {
  return (
    <div
      data-aos="fade-right"
      className="mx-auto flex h-14 w-[98%] flex-row divide-x divide-[#D9C5A7] rounded-xl border border-[#D9C5A7] bg-[#DCD1BF] py-1 md:w-[90%] xl:hidden"
    >
      <BottomNavBarLink
        icon={<BiHome className={bottomNavarIconClasses} />}
        linkId="home"
        title="Home"
      />
      <BottomNavBarLink
        icon={<BsPeople className={bottomNavarIconClasses} />}
        linkId="about-us"
        title="About Us"
      />
      <BottomNavBarLink
        icon={<MdOutlineHomeRepairService className={bottomNavarIconClasses} />}
        linkId="our-services"
        title="Our Services"
      />
      <BottomNavBarLink
        icon={<MdOutlineReviews className={bottomNavarIconClasses} />}
        linkId="testimonials"
        title="Testimonials"
      />
      <BottomNavBarLink
        icon={<FaQuestionCircle className={bottomNavarIconClasses} />}
        linkId="faq"
        title="FAQ"
      />
    </div>
  );
}

"use client";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
  const pathName = usePathname();
  return pathName == "/" ? (
    <ScrollLink
      onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
      to={item?.link}
      href={`#${item?.link}`}
      activeClass={"font-bold text-primary"}
      spy={true}
      smooth={true}
      offset={-fixedScrollOffset}
      className={
        isMobileMenuItem
          ? "w-full transition-all hover:font-semibold"
          : "z-10 flex items-center justify-center transition-all hover:cursor-pointer hover:font-bold"
      }
    >
      {item?.name}
    </ScrollLink>
  ) : (
    <Link
      onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
      href={`/#${item?.link}`}
      className={
        isMobileMenuItem
          ? "w-full transition-all hover:font-semibold"
          : "z-10 flex items-center justify-center transition-all hover:cursor-pointer hover:font-bold"
      }
    >
      {item?.name}
    </Link>
  );
}

export const scrollToElementById = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
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

  const pathName = usePathname();

  React.useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

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
        {pathName == "/" ? (
          <ScrollLink
            to={"home"}
            href="#home"
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
        ) : (
          <Link
            href={"/"}
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
          </Link>
        )}
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
          className="rounded-lg text-sm text-white transition-all hover:font-bold md:px-6"
        >
          {pathName == "/" ? (
            <ScrollLink
              to={"request-appointment"}
              href="#request-appointment"
              activeClass=" text-gray-medium"
              spy={true}
              smooth={true}
              offset={-fixedScrollOffset}
              cellPadding={1}
              className="z-10 flex items-center justify-center hover:cursor-pointer max-md:text-[10px]"
            >
              Request Appointment
            </ScrollLink>
          ) : (
            <Link
              href={"/#request-appointment"}
              className="z-10 flex items-center justify-center hover:cursor-pointer max-md:text-[10px]"
            >
              Request Appointment
            </Link>
          )}
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
  const pathName = usePathname();
  const { push } = useRouter();

  return (
    <Button
      key={linkId + title}
      onClick={() =>
        pathName == "/" ? scrollToElementById(linkId) : push(`/#${linkId}`)
      }
      radius="none"
      className="flex h-full flex-1 flex-col items-center justify-center bg-transparent text-white transition-all hover:font-bold"
    >
      {icon}
      <p className="-mt-1 text-xs">{title}</p>
    </Button>
  );
}

const bottomNavarIconClasses = ` text-sm md:text-xl `;

export function BottomNavBar() {
  return (
    <div className="mx-auto flex h-14 w-[98%] flex-row divide-x divide-[#D9C5A7] rounded-xl border border-[#D9C5A7] bg-[#DCD1BF] bg-opacity-90 py-1 md:w-[90%] xl:hidden">
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

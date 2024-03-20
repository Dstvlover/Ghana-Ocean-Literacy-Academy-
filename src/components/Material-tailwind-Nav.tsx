//@ts-nocheck
"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { LiaInfoSolid } from "react-icons/lia";
import { usePathname } from "next/navigation";
import Link from "next/link";
 

function NavList() {

    const currentUrl = usePathname();
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link href="/" className={`flex items-center justify-center hover:text-blue-500 transition-colors ${
                  currentUrl === "/"
                    ? "border-b-4 text-white border-pink-500"
                    : "text-white"
                }`}>
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link href="/about" className={`flex items-center justify-center hover:text-blue-500 transition-colors ${
                  currentUrl === "/about"
                    ? "border-b-4 text-white border-pink-500"
                    : "text-white"
                }`}>

          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link href="/teams" className={`flex items-center justify-center hover:text-blue-500 transition-colors ${
                  currentUrl === "/teams"
                    ? "border-b-4 text-white border-pink-500"
                    : "text-white"
                }`}>

          Teams
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link href="/educationhub" className={`flex items-center justify-center hover:text-blue-500 transition-colors ${
                  currentUrl === "/educationhub"
                    ? "border-b-4 text-white border-pink-500"
                    : "text-white"
                }`}>
          Education Hub
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link href="/activities" className={`flex items-center justify-center hover:text-blue-500 transition-colors ${
                  currentUrl === "/activities"
                    ? "border-b-4 text-white border-pink-500"
                    : "text-white"
                }`}>
          Activities
        </Link>
      </Typography>
    </ul>
  );
}
 
export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-screen-xl border-none px-6 py-3 bg-slate-950">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
            <img src="/FOLA2.jpg" className="w-8 sm:w-12 rounded-full" alt=''/>{" "}
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
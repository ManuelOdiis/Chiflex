"use client";
import { useState } from "react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { RiMenu3Fill } from "react-icons/ri";
import Logo from "./Logo";
import Socials from "./Socials";
import { ThemeToggle } from "./ThemeToggler";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "Shop",
    path: "/all-products",
  },
  {
    name: "About Us",
    path: "/",
  },
  {
    name: "Cart",
    path: "/cart",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const NavMobile = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsopen}>
      <SheetTrigger
        className="text-orange-700 flex items-center justify-center text-3xl"
        onClick={() => setIsopen(true)}
      >
        <RiMenu3Fill />
      </SheetTrigger>
      <SheetContent className="bg-[#a9aebc] dark:bg-slate-800/[0.3] dark:backdrop-blur-lg dark:border-r dark:border-slate-700/30 border-none text-white">
        <div className="flex flex-col pt-16 pb-8 items-center justify-between h-full">
          <SheetHeader>
            <SheetTitle>
              {" "}
              <Logo />{" "}
              <ThemeToggle />
            </SheetTitle>
            <SheetDescription className="sr-only"></SheetDescription>
            
          </SheetHeader>
          <ul className="w-full flex flex-col gap-10 justify-center text-center">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="text-white uppercase font-primary font-medium tracking-[1.2px]"
                >
                  <Link
                    href={link.path}
                    className="cursor-pointer"
                    onClick={() => setIsopen(false)} // closes menu onclick
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* social */}
          <Socials containerStyles="text-white text-xl flex gap-6" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;

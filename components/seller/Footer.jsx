import React from "react";
import Logo from "../Logo";
import Socials from "../Socials";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-10">
      <div className="flex items-center gap-4">
        <Logo className="hidden md:block" />
        <div className="hidden md:block h-7 w-px bg-gray-500/60"></div>
        <p className="py-4 text-center text-xs md:text-sm text-gray-500 dark:text-slate-300">
          Copyright &copy; {year} Chiflex. All rights reserved
        </p>
      </div>
      <div>
        <Socials 
        containerStyles="flex gap-6 text-orange-700" iconStyles="hover:text-orange-500 transition-all"
        />
      </div>
    </div>
  );
};

export default Footer;

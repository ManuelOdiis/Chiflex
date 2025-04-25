import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  RiArrowRightLine,
  RiMailFill,
  RiMapPin2Fill,
  RiPhoneFill,
} from "react-icons/ri";
import { Input } from "./ui/input";
import Socials from "./Socials";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="mt-16 xl:mt-32 bg-[#E6E9F2] ">
      <div className="container mx-auto">
        <div className="py-16 xl:py-[100px] flex flex-col xl:flex-row gap-[60px] xl:gap[30px]">
          {/*logo&text*/}
          <div>
            <Link href="/" className="flex mb-6">
              <Image src={assets.logo} width={160} height={180} alt="logo" />
            </Link>
            <p className="text-gray-500 max-w-[270px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quo
              quasi ipsam quis laborum provident eveniet quaerat facilis et
              optio.
            </p>
          </div>
          {/*contact*/}
          <div className="flex-1 text-border">
            <h4 className="h4 text-2xl font-semibold text-white mb-10">
              Contact
            </h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-4">
                <RiMapPin2Fill className="text-orange-600 text-xl" />
                <p>1250 Brickstone Ave, US</p>
              </li>
              <li className="flex items-center gap-4">
                <RiPhoneFill className="text-orange-600 text-xl" />
                <p>+1 (555) 000-0000</p>
              </li>
              <li className="flex items-center gap-4">
                <RiMailFill className="text-orange-600 text-xl" />
                <p>Email@Chiflex.com</p>
              </li>
            </ul>
          </div>
          {/*newsletter*/}
          <div className="flex-1 text-border">
            <h4 className="h4 text-2xl font-semibold text-white mb-10">
              Get instant update
            </h4>
            <p className="mb-9">
              Stay informed about great and exiting offers, new arrivals and
              trends.
            </p>
            {/*input*/}
            <div className="flex items-center justify-between max-w-2xl w-full md:h-14 h-12">
              <Input
                type="text"
                placeholder="Enter Your Email"
                className="border border-gray-500/30 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
              />
              <button className="md:px-12 px-8 h-full text-white bg-orange-600 rounded-md rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*copyright*/}
      <div className="contaner mx-auto xl:px-8 py-12 border-t border-border/8 flex flex-col gap-6 xl:flex-row items-center justify-between">
        <p className="text-border">
          Copyright &copy; {year} Chiflex. All rights reserved
        </p>
        <Socials
          containerStyles="flex gap-6 text-orange-600"
          iconStyles="hover:text-accent transition-all"
        />
      </div>
    </footer>
  );
};

export default Footer;

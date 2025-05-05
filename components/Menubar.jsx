"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Header";
import Topbar from "./Topbar";
import { ThemeToggle } from "./ThemeToggler";

const Menubar = () => {
  const [headerActive, setHeaderActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(headerActive);

  return (
    <>
      <Topbar />
      {/* static header */}
      <div className="relative z-10">
        <Navbar />
      </div>
      {/* animated header */}
      <div
        className={`w-full bg-[#a9aebc] dark:bg-slate-800/[0.3] dark:backdrop-blur-lg dark:border-r dark:border-slate-700/30 transition-transform duration-500 fixed top-0 left-0 z-50 ${
          headerActive ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Navbar />
        <ThemeToggle />
      </div>
      
    </>
  );
};

export default Menubar;

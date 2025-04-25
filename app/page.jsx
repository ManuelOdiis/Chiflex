"use client";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomeProducts from "@/components/HomeProducts";
import Menubar from "@/components/Menubar";
import React from "react";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Menubar />
      <div className="px-6 md:px-16 lg:px-32">
        <Hero />
        <FeaturedProducts />
        <HomeProducts />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

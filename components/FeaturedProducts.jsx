import React from "react";
import Pretitle from "./Pretitle";
import Image from "next/image";
import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";
import Link from "next/link";

const productData = [
  {
    img: "/assets/photo1_image.jpg",
    name: "Explore Casual Comfort",
    description: "for laid-back elegance",
    href: "/all-products",
  },
  {
    img: "/assets/photo2_image.jpg",
    name: "Explore Casual Comfort",
    description: "for laid-back elegance",
    href: "/all-products",
  },
  {
    img: "/assets/photo3_image.jpg",
    name: "Explore Casual Comfort",
    description: "for laid-back elegance",
    href: "/all-products",
  },
  {
    img: "/assets/shoe5.jpeg",
    name: "Explore Casual Comfort",
    description: "for laid-back elegance",
    href: "/all-products",
  },
];

const FeaturedProducts = () => {
  return (
    <div className="pt-16 xl:pt-32" id="projects">
      <div className="container max-auto">
        <div className="text-center max-w-[540px] mx-auto xl:mb-20 dark:text-slate-200">
          <Pretitle text="Featured Products" center />
          <h2 className="h2 mb-3">Discover Our Collections</h2>
          <p className="mb-11 max:w-[480px] mx-auto">
            Dive into a curated collection of footwear that caters to every
            taste and occasion
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {productData.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full h-[492px] flex-1 relative overflow-hidden group flex justify-center"
            >
              <Image
                src={item.img}
                fill
                className="object-cover group-hover:brightness-75 transition duration-300 w-full h-auto"
                alt="image"
                quality={100}
              />

              <div className="w-[90%] h-[84px] bg-primary absolute bottom-4 flex justify-between items-center text-white md:translate-y-[108px] md:group-hover:translate-y-0 transition-all duration-500">
                <div className="pl-8">
                  <h4 className="text-white font-primary font-semibold tracking-[1px] uppercase">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1">
                    <RiCheckboxCircleFill className="bg-orange-600 text-xl" />
                    <p>{item.description}</p>
                  </div>
                </div>
                <Link
                  href={item.href}
                  className="w-[44px] xl:w-[40px] xl:h-[40px] h-[44px] xl:mt-8 xs: mt-10 sm:mt-10 bg-orange-600 text-#121315 text-2xl flex justify-center items-center absolute right-3"
                >
                  <RiArrowRightUpLine />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;

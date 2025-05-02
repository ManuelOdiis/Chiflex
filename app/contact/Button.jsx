import { useAppContext } from "@/context/AppContext";
import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

const Button = ({ text }) => {

const { router } = useAppContext()

  return (
    <button 
        onClick={() => {
          router.push("/all-products");
        }}
    className="w-[210px] h-[54px] py[5px] pl-[10px] pr-[5px] flex items-center justify-between min-w-[200px]group bg-orange-600">
      <div className="flex-1 text-center tracking-[1.2] font-primary font-bold text-primary text-sm uppercase">
        {text}
      </div>
      <div className="w-11 h-11 bg-primary flex items-center justify-center">
        <RiArrowRightUpLine className="text-gray-500 text-xl group-hover:rotate-45 transition-all duration-200" />
      </div>
    </button>
  );
};

export default Button;

import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image src={assets.logo} width={160} height={180} alt="" />
    </Link>
  );
};

export default Logo;

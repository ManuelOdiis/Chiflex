import React from 'react'
import Pretitle from './Pretitle'
import Button from '@/app/contact/Button'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Hero = () => {
  return (
    <div className="p16 xl:pt-32" id="product hero">
        <div className="container mx-auto">
            <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
               {/* text*/}
               <div className="flex-1">
                <div className="max-w-[540px]">
                   {/* prtitle */}
                   <Pretitle text="Shop now" />
                   <h2 className="h2 text-[36px] leading-[1:3] xl:text[46px] xl:leading-[56px] capitalize font-bold ">
                   Discover stylish and comfortable footwear from Chiflex Shop, your go-to destination for quality shoes.
                   </h2>
                   <p className="mb-11">
                   the idea is simple, connect you with the perfect pair of shoes that express your unique style
                   </p>
                   <Button text="Buy now" />
                </div>
                </div>
                  {/* img*/}
                  <div className="flex-1 xl:flex xl:justify-center">
                    <div className="xl:w-[444px] xl:h-[493px] relative ">
                       {/* bg */}
                       <div className="hidden xl:flex w-[424px] h-[270px] bg-orange-600 absolute -top-4 -left-4 -z-10"></div> 
                       <Image src={assets.photo4_image}
                       width={435}
                       height={492}
                       alt='shoe' />
                    </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
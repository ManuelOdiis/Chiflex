"use client"
import Banner from '@/components/Banner'
import FeaturedProduct from '@/components/FeaturedProduct'
import Footer from '@/components/Footer'
import HeaderSlider from '@/components/HeaderSlider'
import HomeProducts from '@/components/HomeProducts'
import Menubar from '@/components/Menubar'
import React  from 'react'

const Home = () => {

  return (
    <div className='overflow-hidden'>
      <Menubar />
      <div className="px-6 md:px-16 lg:px-32">
          <HeaderSlider />
          <HomeProducts />
          <FeaturedProduct />
          <Banner />
          
        </div>
        <Footer />
    </div>
  )
}

export default Home
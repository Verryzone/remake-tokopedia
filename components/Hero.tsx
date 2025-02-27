import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='w-full flex flex-col gap-5 pb-10 md:gap-28 lg:flex-row items-end xl:items-end lg:items-center'>
        <div className="relative z-20 mx-4 lg:w-1/2">
            <h1 className='text-[3rem] leading-[3.2rem] xl:leading-[5rem] xl:text-[5rem] font-extrabold text-gray-800'>
                As<span className='text-green-700'>Travio</span> - The Trusted Online Store
            </h1>
            <div className='text-gray-600'>
                <p className='py-2 pt-6'>
                    Astravio is an online shopping destination that offers a wide range of quality products to fulfill your needs. We believe that online shopping should be easy, safe and fun. That's why Astravio is here to provide you with the best services designed to make your shopping experience as enjoyable as possible.
                </p>
                <p className='py-2 hidden md:block'>
                At Astravio, you can find everything from the latest fashion, to cutting-edge electronics, to everyday essentials, all on one platform. We work with trusted partners to ensure that every product you buy is genuine and of the highest quality.
                </p>
                <p className='py-2 hidden md:block'>
                Easy navigation, responsive customer service, and secure payment processing are some of the advantages we offer. We also provide various attractive promos and special discounts to make your shopping more efficient.
                </p>
            </div>
        </div>
        <div className='w-full lg:w-1/2 h-full overflow-hidden lg:overflow-visible'>
            <Image 
            src={'/hero.png'} 
            className='w-full h-full scale-100' 
            width={800} 
            height={800} 
            alt=''
            />
        </div>

    </section>
  )
}

export default Hero
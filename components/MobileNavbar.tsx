import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MobileNavbar = () => {
  return (
    <nav className="py-4 p-8 flex items-center justify-center fixed bottom-0 bg-slate-100 w-full z-30 lg:hidden">
        <ul className="h-full gap-[4.5rem] sm:gap-36 flex justify-between items-center">
            <Link href={'/'}>
                <Image src={'/home-icon.svg'} alt='' className='sm:w-7' width={20} height={20}/>
            </Link>
            <Link href={'/product'}>
                <Image src={'/product-icon.svg'} alt='' className='sm:w-7' width={20} height={20}/>
            </Link>
            <Link href={'/contact'}>
                <Image src={'/contact-icon.svg'} alt='' className='sm:w-7' width={20} height={20}/>
            </Link>
            <Link href={'/cart'}>
                <Image src={'/cart-icon.svg'} alt='' className='sm:w-7' width={20} height={20}/>
            </Link>
        </ul>
    </nav>
  )
}

export default MobileNavbar
import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='bg-gray-100 py-5 px-5 w-full mb-5 rounded-sm'>
        <div className='font-bold text-2xl mb-5'>As<span className='text-green-700'>Travio.</span></div>
        <div className='flex justify-start w-full'>
          <div className='flex justify-around gap-32'>
            <div>
              <ul>
                <li className='font-bold py-1'>Learn More</li>
                <li>
                  <ul className='text-sm text-gray-500'>
                    <li className='py-1 transition-all hover:text-green-700 hover:font-bold hover:cursor-pointer'>About Astravio</li>
                    <li className='py-1 transition-all hover:text-green-700 hover:font-bold hover:cursor-pointer'>Intellectual Property Rights</li>
                    <li className='py-1 transition-all hover:text-green-700 hover:font-bold hover:cursor-pointer'>Career</li>
                    <li className='py-1 transition-all hover:text-green-700 hover:font-bold hover:cursor-pointer'>Blog</li>
                    <li className='py-1 transition-all hover:text-green-700 hover:font-bold hover:cursor-pointer'>Astravio Affiliate Program</li>
                    <li className='py-1 transition-all hover:text-green-700 hover:font-bold hover:cursor-pointer'>Astravio B2B Digital</li>
                    <li className='py-1 transition-all hover:text-green-700 hover:font-bold hover:cursor-pointer'>Astravio Marketing Solutions</li>
                    <li className='py-1 transition-all hover:text-green-700 hover:font-bold hover:cursor-pointer'>Body Mass Index Calculator</li>
                    <li className='py-1 transition-all hover:text-green-700 hover:font-bold hover:cursor-pointer'>Astravio Farma</li>
                    <li className='py-1 transition-all hover:text-green-700 hover:font-bold hover:cursor-pointer'>Today's Promo</li>
                    <li className='py-1 transition-all hover:text-green-700 hover:font-bold hover:cursor-pointer'>Buy Local</li>
                    <li className='py-1 transition-all hover:text-green-700 hover:font-bold hover:cursor-pointer'>Shock Promo</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className='font-bold py-1'>Buy</li>
                <li>
                  <ul className='text-sm text-gray-500'>
                    <li className='py-1 transition-all hover:text-green-700 hover:font-bold hover:cursor-pointer'>Billing & Top Up</li>
                    <li className='py-1 transition-all hover:text-green-700 hover:font-bold hover:cursor-pointer'>Astravio COD</li>
                    <li className='py-1 transition-all hover:text-green-700 hover:font-bold hover:cursor-pointer'>Free Shipping</li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li className='font-bold py-1'>Sell</li>
                <li>
                  <ul className='text-sm text-gray-500'>
                    <li className='py-1 transition-all hover:text-green-700 hover:font-bold hover:cursor-pointer'>Seller Education Center</li>
                    <li className='py-1 transition-all hover:text-green-700 hover:font-bold hover:cursor-pointer'>Official Store List</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center pb-4 text-xs'>Copyright©2024</div>
    </div>
  )
}

export default Footer
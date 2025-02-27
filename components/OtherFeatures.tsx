import React from 'react'

const OtherFeatures = () => {
  return (
    <section className='w-full border p-5 rounded-md shadow-sm hidden lg:block'>
        <div className='flex justify-between gap-6 pb-5'>
            <div className='w-1/2'>
                <h3 className='text-lg font-bold'>Top Up & Billing💰</h3>
                <div className='border rounded-md mt-4'>
                    <div className='flex justify-between border-b'>
                        <ul className='flex justify-between w-[90%] pl-5 items-center font-bold text-gray-500 h-full'>
                            <li className='w-auto p-2 cursor-pointer'>Credit</li>
                            <li className='border-b-[3px] border-green-700 p-2 cursor-pointer text-green-700'>Data Packages</li>
                            <li className='w-auto p-2 cursor-pointer'>Internet & Wifi</li>
                            <li className='w-auto p-2 cursor-pointer'>PLN Electricity</li>
                        </ul>
                        <div className='px-5 border-l font-bold p-2 cursor-pointer'>⁝</div>
                    </div>
                    <div className='p-5'>
                        <div className='flex'>
                            <div className='block w-[50%] pr-2'>
                                <h3 className='text-sm font-bold text-gray-500'>Phone Number</h3>
                                <input className='w-full h-9 border rounded-md text-xs text-gray-500' type="text" name="nomor" id="nomor" placeholder='    input the number ... '/>
                            </div>
                            <div className='block w-1/2 pl-2'>
                                <h3 className='text-sm font-bold text-gray-500'>Nominal</h3>
                                {/* <input className='w-full h-9 border rounded-md text-xs' type="text" name="nomor" id="nomor" placeholder='    input the number ... '/> */}
                                <div className='w-full flex'>
                                    <select defaultValue={'select'} className='w-full h-9 border rounded-md text-xs text-gray-500' name="nominal" id="nominal">
                                        <option value="">5.000</option>
                                        <option value="">10.000</option>
                                        <option value="">25.000</option>
                                        <option value="">30.000</option>
                                        <option value="">50.000</option>
                                    </select>
                                    <div>
                                        <button className='flex items-center h-full ml-4 text-sm font-bold text-gray-500 bg-gray-200 px-5 rounded-lg hover:bg-green-700 hover:text-white' >Buy</button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2'>
                <h3 className='text-lg font-bold'>Top Category🔥</h3>
                <div className='rounded-md mt-4 flex justify-around items-center gap-5'>
                    <div className='w-[141px] h-[141px] border rounded-md transition-all hover:scale-110 cursor-pointer hover:shadow-md'>
                        <div className='h-[70%] text-[60px] flex items-center justify-center'>👕</div>
                        <h3 className='text-sm font-bold text-center'>Clotes</h3>
                    </div>
                    <div className='w-[141px] h-[141px] border rounded-md transition-all hover:scale-110 cursor-pointer hover:shadow-md'>
                        <div className='h-[70%] text-[60px] flex items-center justify-center'>🥾</div>
                        <h3 className='text-sm font-bold text-center'>Shoes</h3>
                    </div>
                    <div className='w-[141px] h-[141px] border rounded-md transition-all hover:scale-110 cursor-pointer hover:shadow-md'>
                        <div className='h-[70%] text-[60px] flex items-center justify-center'>🍟</div>
                        <h3 className='text-sm font-bold text-center'>Snacks</h3>
                    </div>
                    <div className='w-[141px] h-[141px] border rounded-md transition-all hover:scale-110 cursor-pointer hover:shadow-md'>
                        <div className='h-[70%] text-[60px] flex items-center justify-center'>⚡</div>
                        <h3 className='text-sm font-bold text-center'>Electricity</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OtherFeatures
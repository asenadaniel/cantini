import React from 'react'

function MobileHeader() {
  return (
    <div className='w-full h-[100vh] background  text-[#EDE5D9]  '>
      <div className='w-[90%]  mx-auto h-full   flex flex-col gap-10'>
        <div className=' flex justify-between py-[20px] items-center'>
          <p className=' hover:text-orange-700'>Menu</p>
          <h2 className=' text-2xl cursor-pointer'>Cantini</h2>
          <ul className=' flex gap-8'>
            <li>Contact</li>

          </ul>
        </div>
      </div>
      <div className='  bg-[#194142] h-[40vh] flex flex-col justify-center w-full mt-[46%] gap-8  items-start pl-7  '>
        <p className=' md:text-2xl text-xl '>Canned Expresso Martini</p>
        <h1 className=' md:text-6xl text-4xl'>
          Crack Open an <br /> Expresso Martini
        </h1>
        <button className='w-max py-2 border-2 px-9 hover:bg-orange-700 hover:border-none  '>Notify Me</button>
      </div>


    </div>
  )
}

export default MobileHeader

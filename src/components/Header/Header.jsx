import React from 'react'
import MobileHeader from '../MobileHeader/MobileHeader'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='w-full h-[100vh] background  text-[#EDE5D9]   '>
      <div className=' hidden w-[90%]  mx-auto h-full  md:flex flex-col gap-10'>
        <div className=' flex justify-between py-[3%]'>
          <Link to={'/'}>
            <p className=' hover:text-orange-700 text-xl'>Home</p>
          </Link>
          <h2 className=' text-4xl cursor-pointer'>Cantini</h2>
          <ul className=' flex gap-8'>
            <li className=' text-xl'>Contact</li>
            <Link to={'/store'}>
              <li className=' text-xl'>Store</li>
            </Link>
          </ul>
        </div>
        <div className=' flex flex-col justify-center w-full my-[20%] gap-3 '>
          <p className=' md:text-2xl text-xl '>Canned Expresso Martini</p>
          <h1 className=' md:text-6xl text-4xl'>
            Crack Open an <br /> Expresso Martini
          </h1>
          <button className='w-max py-5 border-2 px-9 hover:bg-orange-700 hover:border-none  '>Notify Me</button>
        </div>
      </div>

      {/* mobile */}
      <div className=' md:hidden'>

        <MobileHeader />
      </div>

    </div>
  )
}

export default Header
import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className=' bg-[#194142] h-[400px] flex items-center '>
      <div className=' md:flex items-center justify-between  w-full md:px-[20%] flex-col md:flex-row px-[30%] text-center  '>
        <p className=' mb-6 text-xl underline'>Privacy Policy</p>
        <div className=' flex gap-9 mb-6'>
          <Link to={'/'} className=' text-'>Home</Link>
          <Link to={'/contact'}>Contact</Link>
          <Link to={'/store'}>Store</Link>
        </div>
        <div className=' flex gap-6 ml-8'>
          <Instagram />
          <Facebook />
          <Twitter />
        </div>
      </div>
    </div>
  )
}

export default Footer

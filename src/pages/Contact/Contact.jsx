import React, { useState } from 'react'
import NavStore from '../../components/NavStore/NavStore'

function Contact() {

  const [input, setInput] = useState(null)

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className=' bg-[#ede5d9] md:h-[100vh] h-[90vh] text-[#194142]'
    >
      <NavStore />
      <div className=' px-[10%]'>
        <div className=' py-[40px]  '>
          <div className=' flex flex-col items-center justify-center gap-7'>
            <h1 className=' text-3xl md:text-4xl xl:text-6xl text-center'>Get updates about Can-Tini</h1>
            <p className=' text-sm md:text2xl text-center'>
              We'll let you know about events, new store locations, and everything Can-Tini
            </p>
            <div className=' flex md:gap-5 gap-2 w-full flex-col md:flex-row  ' >
              <input
                type="text"
                placeholder='email@example.com'
                className=' text-[#194142] outline-none bg-[#ede5d9] border-2 border-solid border-[#194142] rounded-xl w-[100%] px-4 py-3'
                onChange={handleChange}
                value={input}
              />
              <button className='border-2 border-solid border-[#194142] rounded-xl md:px-7 bg-white text-[#ede5d9] py-3  '>subscribe</button>
            </div>
          </div>
        </div>

        <div className=' flex flex-col items-center justify-center gap-4'>
          <h1 className=' md:text-5xl text-3xl'>Wanna Get in Touch?</h1>
          <p className=' md:text-2xl text-xl'>asenadaniel@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contact

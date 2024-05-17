import React from 'react';
import cantini3 from '../../assets/cantini3.webp';

function Info1() {
  return (
    <section className='bg-[#194142] xl:h-[97vh] md:h-[60vh] flex justify-center items-center h-[100vh]  '>
      <div className=' gap-3 sm:flex '>
        <div className=' md:w-[50%]  '>
          <img src={cantini3} alt="Espresso Martini" className='w-[90rem] h-fit object-contain' />

          <p className='  text-xl flex justify-end md:text-3xl py-6 italic px-9 md:px-0'>"I’ll have one too!”</p>
        </div>
        <div className='ml-4  flex flex-col justify-center gap-5 md:w-[40%] xl:w-[40%]   '>
          <h1 className=' text-4xl xl:text-6xl md:text-5xl  mb-2 max-w-[900px] font-thin '>The Espresso Martini Effect</h1>
          <p className=' tracking-wider font-thin md:text-xl items-start xl:text-3xl '>
            When you spot a tray of Espresso Martinis on their way through a crowd, heads turn in excitement just imagining that smooth and satisfying flavor. Next thing you know, everyone at your table is enjoying one.
            <br />
            <br />
            Can-Tini is enticement in a can for your Espresso Martini cravings.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Info1;

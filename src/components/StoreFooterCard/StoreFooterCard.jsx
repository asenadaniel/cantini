import React, { useContext } from 'react'
import { storeContext } from '../../Context/StoreContext'
import { Link } from 'react-router-dom'

function StoreFooterCard() {

  const { cantini_list1 } = useContext(storeContext)

  return (
    <div className=' text-[#ede5d9]'>
      <h1 className=' md:text-6xl text-3xl text-center my-[20px]'>You may also like</h1>

      <div className=' md:flex mt-[80px] flex-col w-full  justify-center  items-center xl:flex-row gap-7 '>
        {cantini_list1.map((item, i) => {
          return (
            <div className=' flex flex-col   items-center'>

              <Link to={`/store/${item.id}`}>
                <img src={item.image} alt="" className=' w-[500px] md:h-[500px] h-[300px] object-contain' />
                <div className='flex flex-col py-6 justify-center items-center'>
                  <p className=' text-xl'>{item.name}</p>
                  <p className=' text-xl'>${item.price}.00</p>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default StoreFooterCard

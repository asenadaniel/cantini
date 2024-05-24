import React, { useContext } from 'react'
import NavStore from '../../components/NavStore/NavStore'
import { storeContext } from '../../Context/StoreContext'
import { Link } from 'react-router-dom'


function Store() {
  const { cantini_list, getTotalAmount } = useContext(storeContext)
  return (
    <div className=' text-black bg-[#ede5d9] pb-[100px]'>
      <div className=' sticky top-0'>
        <NavStore />
      </div>
      <div>
        <div className='h-[200px] bg-[#ede5d9] flex justify-center items-center mb-8 border-b'>
          <h1 className=' md:text-7xl text-4xl text-green-900 font-normal'>All Products</h1>
        </div>
        <div className=' grid md:grid-cols-4 px-[8%] gap-9'>
          {cantini_list.map((item, i) => {
            return (
              <div key={i}>
                <Link to={`/store/${item.id}`}>
                  <img src={item.image} alt="" className=' pb-7' />
                  <div className=' flex flex-col justify-center items-center text-green-900'>
                    <p className=' text-xl'>{item.name}</p>
                    <p className=' text-xl'>${item.price}</p>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Store

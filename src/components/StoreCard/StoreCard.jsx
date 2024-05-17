import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { storeContext } from '../../Context/StoreContext';
import NavStore from '../NavStore/NavStore';
import StoreFooterCard from '../StoreFooterCard/StoreFooterCard';
import Cart from '../../pages/Cart/Cart';

function StoreCard() {
  const { id } = useParams();
  const { cantini_list, addToCart } = useContext(storeContext);
  const [quantity, setQuantity] = useState(1);

  const product = cantini_list.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product Unavailable</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className='text-black bg-[#ede5d9] h-fit md:h-fit'>
      <NavStore />
      <div className='flex w-full px-[8%] py-[3%] justify-center'>
        <div className='flex-col justify-between gap-9 xl:flex-row flex '>
          <div className=' mb-7'>
            <img src={product.image} alt="" className=' w-[400px] md:w-[600px] border-[2px] border-solid border-green-950  object-cover' />
          </div>
          <div className='flex flex-col gap-[30px]'>
            <div className='gap-5 flex flex-col'>
              <h1 className='md:text-7xl text-3xl text-center md:text-left text-green-900'>{product.name}</h1>
              <p className='md:text-4xl text-2xl  text-center md:text-left text-green-900'>${product.price}.00</p>
            </div>
            <div className='flex items-center gap-5 py-2 flex-col md:flex-row'>
              <p className='text-green-800 text-xl'>Quantity</p>
              <div className='flex gap-5 justify-center items-center'>
                <button onClick={decreaseQuantity} className='border-[2px] border-green-800 px-5 py-2 text-3xl  hover:bg-green-800 hover:text-white'>-</button>
                {quantity}
                <button onClick={increaseQuantity} className='border-[2px] border-green-800 px-5 py-2 text-2xl hover:bg-green-800 hover:text-white'>+</button>
              </div>
            </div>
            <div className='flex flex-col gap-9 py-6 text-green-800'>
              <button onClick={handleAddToCart} className='cursor-pointer py-5 border-[2px] border-solid border-green-900 text-2xl'>
                Add to cart
                <span className='px-3'>--</span> ${product.price * quantity}
              </button>
              <button className='cursor-pointer py-5 bg-blue-700 text-white hover:bg-blue-900 text-2xl'>Buy</button>
            </div>
          </div>
        </div>
      </div>

      <div className=' bg-[#194142] xl:h-[100vh]  px-[8%] py-[3%] block  '>
        <StoreFooterCard />
      </div>
    </div>
  );
}

export default StoreCard;

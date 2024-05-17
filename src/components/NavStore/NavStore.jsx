import React, { useContext, useState } from 'react';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './navStore.css';
import { storeContext } from '../../Context/StoreContext';
import { Link } from 'react-router-dom';

function NavStore() {
  const [open, setOpen] = useState(false);
  const { addToCart, removeFromCart, cart, getTotalAmount } = useContext(storeContext);

  const increaseQuantity = (item) => {
    addToCart(item, 1);
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      addToCart(item, -1);
    }
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className='bg-[#ede5d9] h-32 w-full text-[#194142] relative'>
      <div className='flex justify-between w-[90%] mx-auto md:py-[3%] py-[7%] px-[6%] md:px-0 items-center border-b border-solid border-black'>
        <Link to={'/'}>
          <h2 className='text-xl hidden xl:block' >Home</h2>
        </Link>
        <Link to={'/'}>
          <h1 className='text-3xl'>Cantini</h1>
        </Link>
        <ul className='flex gap-9 text-xl'>
          <li className=' hidden xl:block'>Contact</li>
          <li className=' hidden xl:block'>Store</li>
          <div className='relative'>
            <div className='cursor-pointer flex gap-3' onClick={() => setOpen(!open)}>
              <Link to={'/store'}>
                <li className=' xl:hidden'>store</li>
              </Link>
              <ShoppingBagOutlinedIcon />
            </div>
            {cartItemCount > 0 && (
              <div className='absolute min-w-3 min-h-3 rounded-md bg-green-800 top-1 right-[-12px] text-white text-xs flex items-center justify-center'>

              </div>
            )}
          </div>
        </ul>
      </div>

      {open && (
        <div className='bg-[#194142] w-full animate-slideIn h-[100vh] overflow-scroll scroll absolute top-0 left-0 text-[#ede5d9] px-[5%] z-20'>
          <div className='items-center flex justify-between pt-[9%] pb-4 border-b-2 '>
            <h1 className='text-4xl'>Your cart</h1>
            <div className='cursor-pointer' onClick={() => setOpen(!open)}>
              <CloseOutlinedIcon />
            </div>
          </div>

          <div className='py-[10%] flex flex-col gap-9 '>
            {cart.map((item) => (
              <div key={item.id} className='flex gap-12 '>
                <div>
                  <img src={item.image} alt={item.name} className='w-[200px]' />
                </div>
                <div className='flex flex-col gap-4 md:gap-8 justify-center items-center'>
                  <p className='text-xl'>{item.name}</p>
                  <p className='text-xl'>${(item.price * item.quantity).toFixed(2)}</p>
                  <div className='flex items-center gap-2'>
                    <button className='border px-2' onClick={() => decreaseQuantity(item)}>-</button>
                    <span className='text-xl'>{item.quantity}</span>
                    <button className='border px-2' onClick={() => increaseQuantity(item)}>+</button>
                  </div>


                  <button className='border-2 border-[#ede5d9] px-5 py-5 hover:bg-[#ede5d9] hover:text-[#194142]' onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
            <div className='text-2xl border cursor-pointer py-5 hover:bg-[#ede5d9] text-center hover:text-[#194142]'>
              CheckOut
            </div>
            <div className='text-2xl'>
              Total Amount: ${getTotalAmount()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavStore;

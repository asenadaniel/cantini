import React, { useContext } from 'react';
import { storeContext } from '../../Context/StoreContext';

function Cart() {
  const { removeFromCart, cart } = useContext(storeContext);

  // Calculate the subtotal
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col items-center py-10 bg-[#eeeeee] min-h-screen px-[5%]">
      <h1 className="text-4xl flex font-bold mb-10 text-gray-800">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-2xl text-gray-600">Your cart is currently empty.</p>
      ) : (
        <div className="flex flex-col  items-center w-full gap-6 px-[4%]">
          <div className="overflow-y-auto max-h-96 w-full bg-white rounded-lg border border-solid  border-black  p-6">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row ite justify-center items-center gap-6 border-b pb-4 mb-4 text-center border-black  ">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg border"
                />
                <div className="flex flex-col md:justify-between justify-center w-full items-center">
                  <div>
                    <p className="text-xl font-semibold text-gray-800">{item.name}</p>
                    <p className="text-lg text-gray-600">${item.price.toFixed(2)}</p>
                    <p className="text-lg text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <button
                  className="md:self-start mt-2 px-4 py-2 bg-red-500 flex justify-center text-white rounded hover:bg-red-600"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className=" text-black bg-white border-[1px] border-solid w-[80%] h-[40vh]  rounded-lg  ">
            <h1 className=' text-3xl py-[5%]'>Summary</h1>
            <p className="text-2xl font-semibold text-gray-800 mb-4">Subtotal: ${subtotal.toFixed(2)}</p>
            <button className="px-6 py-3 bg-green-500 text-white rounded text-lg font-medium hover:bg-green-600">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

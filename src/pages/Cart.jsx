import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-50">
      {cart.length > 0 ? (
        <div className="flex gap-16 max-w-6xl p-6 mx-auto flex-wrap lg:flex-nowrap">
          
          <div className="lg:w-[70%] w-full">
            <div className="bg-white rounded-lg shadow-sm">
              {cart.map((item, index) => (
                <CartItem key={item.id} item={item} itemIndex={index} />
              ))}
            </div>
          </div>

          <div className="lg:w-[30%] w-full flex flex-col justify-between">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-6">
              <div className="space-y-5 mt-14">
                <div className="space-y-3">
                  <p className="text-xl text-[#166534] uppercase font-[600]">Your Cart</p>
                  <p className="text-3xl lg:text-4xl font-[600] text-[#15803d] uppercase">Summary</p>
                  <p className="font-[600] text-lg text-slate-700">
                    Total Items: <span className="font-normal">{cart.length}</span>
                  </p>
                </div>
              </div>

              <div className="space-y-5 mt-8">
                <div className="space-y-3">
                  <p className="text-slate-700 text-xl font-[600]">
                    Total Amount: <span className="font-bold text-black">${totalAmount.toFixed(2)}</span>
                  </p>
                </div>

                <button className="text-lg w-full py-3 rounded-lg font-bold text-white bg-[#15803d]
                                 border-2 border-[#15803d] hover:bg-white hover:text-[#15803d] 
                                 transition-all duration-300 ease-in hover:shadow-lg
                                 focus:outline-none focus:ring-4 focus:ring-green-300">
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[calc(100vh-80px)] flex flex-col gap-6 justify-center items-center">
          <h1 className="font-[600] text-xl text-gray-700">Your Cart is Empty!</h1>
          <Link to="/">
            <button className="bg-[#16a34a] text-white text-md uppercase font-[600] py-3 px-10 rounded-md
                             border-[#16a34a] border-2 hover:bg-white hover:text-[#16a34a] 
                             ease-in transition-all duration-300 hover:shadow-lg
                             focus:outline-none focus:ring-4 focus:ring-green-300">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;

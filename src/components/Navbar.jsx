import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div className="w-full">
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto px-4">
        
        <NavLink to="/" className="flex items-center">
          <div className="ml-5">
            <img 
              src="../logo.png" 
              className="lg:h-14 md:h-10 h-8 hover:scale-105 transition-transform" 
              alt="Ecomzy Logo" 
            />
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `hover:text-green-300 transition-colors ${isActive ? 'text-green-400' : ''}`
            }
          >
            <p>Home</p>
          </NavLink>

          <NavLink 
            to="/cart"
            className={({ isActive }) => 
              `hover:text-green-300 transition-colors ${isActive ? 'text-green-400' : ''}`
            }
          >
            <div className="relative">
              <FaShoppingCart className="text-2xl hover:scale-110 transition-transform" />
              {cart.length > 0 && (
                <span 
                  className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                           justify-center items-center animate-bounce rounded-full text-white font-bold"
                  aria-label={`${cart.length} items in cart`}
                >
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

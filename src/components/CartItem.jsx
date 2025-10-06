
import { MdDeleteSweep } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed from Cart");
  };

  return (
    <div className="p-4 border-b-2 last:border-none border-slate-300 hover:bg-gray-50 transition-colors">
      <div className="flex justify-between py-3.5 px-2.5 gap-14 flex-col md:flex-row">
        
        <div className="md:w-[30%] w-full flex justify-center items-center">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-[40%] md:w-[50%] lg:w-full object-contain hover:scale-105 transition-transform"
            loading="lazy" 
          />
        </div>
        
        <div className="md:w-[70%] w-full flex flex-col gap-5">
          <h1 className="text-xl font-[600] text-slate-700 hover:text-slate-900 transition-colors">
            {item.title}
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            {item.description.split(" ").slice(0, 15).join(" ") + "..."}
          </p>
          
          <div className="flex justify-between items-center">
            <p className="font-bold text-[#16a34a] text-lg">${item.price}</p>
            
            <button
              onClick={removeFromCart}
              className="w-10 h-10 rounded-full bg-red-200 flex justify-center items-center
                       hover:bg-red-400 group transition-all duration-300 cursor-pointer
                       focus:outline-none focus:ring-2 focus:ring-red-300"
              aria-label={`Remove ${item.title} from cart`}
            >
              <MdDeleteSweep 
                fontSize={25} 
                className="group-hover:text-white text-red-800 transition-all duration-300" 
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

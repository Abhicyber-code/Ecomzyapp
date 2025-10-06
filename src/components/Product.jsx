import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  };

  const isInCart = cart.some((p) => p.id === post.id);

  return (
    <div className="flex flex-col items-center justify-between w-full gap-3 p-4 rounded-xl 
                    border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:scale-[1.03]
                    md:hover:scale-[1.05] transition-all duration-300 ease-in bg-white group">
      
      <div className="w-full">
        <p 
          className="text-[#1d783e] font-semibold text-lg text-left truncate w-full mt-1"
          title={post.title}
        >
          {post.title}
        </p>
      </div>
      
      <div className="w-full">
        <p className="w-full text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      
      <div className="h-[180px] w-full flex items-center justify-center">
        <img 
          src={post.image} 
          className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300" 
          alt={post.title}
          loading="lazy"
        />
      </div>

      <div className="flex justify-between items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold text-lg">${post.price}</p>
        </div>
        
        {isInCart ? (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                     text-[12px] p-1 px-3 uppercase 
                     hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 ease-in"
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                     text-[12px] p-1 px-3 uppercase 
                     hover:bg-green-600 hover:border-green-600 hover:text-white transition-all duration-300 ease-in"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;

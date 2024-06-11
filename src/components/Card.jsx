import React from "react";
import { Minus, Plus, Star, TimerReset, Truck } from "lucide-react";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/authContext/Index";
import { NavLink } from "react-router-dom";

const ProductCard = ({ data, onclick }) => {
  const { image, name, price, rating } = data;
  const { useLoggedIn } = useAuth();

  return (
    <div className="flex flex-col rounded-lg shadow-md overflow-hidden bg-white max-w-sm mx-auto mt-2 mb-2">
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <h5 className="text-xl font-bold tracking-tight text-gray-900">
            {name}
          </h5>
          <p className="text-orange-700 mt-2 font-bold">$ {price}</p>
        </div>
        <div className="flex items-center justify-around mt-2">
          <span className="text-[#888] text-sm mr-2.5 flex items-center gap-1">
            <Truck className="w-4 text-orange-700" />
            Free Delivery
          </span>
          <span className="text-[#888] text-sm mr-2.5 flex items-center gap-1">
            <TimerReset className="w-4 text-orange-700" />
            15-30 Minutes
          </span>
        </div>
        <div className=" flex items-center justify-between mt-2">
          <span className=" bg-green-600 text-white w-[45px] text-center rounded-md flex">
            {rating} &nbsp;★
          </span>

          <div className="rounded-full flex items-center justify-between">
            <img
              className="w-5"
              src="https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        className="px-4 py-2 text-sm font-medium text-center text-white bg-orange-600 hover:bg-purple-950 rounded-b-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
        onClick={() => {
          onclick(data);
          toast.success(`${name} added to cart`);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;

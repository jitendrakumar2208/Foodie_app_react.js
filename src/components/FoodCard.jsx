// src/components/FoodCard.jsx
import { TimerReset, Truck } from "lucide-react";
import React from "react";

const FoodCard = ({ food }) => {
  const { image, name, price, rating } = food;

  return (
    <div className="bg-white rounded-sm shadow flex flex-col items-center justify-center m-1 flex-1 border border-yellow-400">
      <div className="h-[200px] overflow-hidden">
        <img
          className="h-auto object-fill w-full"
          src={image}
          alt="fodd image"
        />
      </div>
      <div className="mt-1 w-full">
        <div className="flex items-center justify-between">
          <h2 className="text-[#333] text-[20px] font-bold">{name}</h2>
          <p className="text-[#666] text-[16px] font-semibold text-orange-500">
            ₹{price}
          </p>
        </div>

        <span className="text-[#888] text-sm mr-2.5">
          {/*  <Truck /> */}
          Free Delivery
        </span>
        <span className="text-[#888] text-sm mr-2.5">
          {/* <TimerReset /> */}
          15-30 Minutes
        </span>
      </div>
    </div>
  );
};

export default FoodCard;

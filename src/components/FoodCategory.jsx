import React from "react";

import { menu_list } from "../assets/assets";

const FoodCategory = () => {
  return (
    <div className="h-[45vh] mt-7 py-3 flex flex-col items-center ">
      <h1 className="text-3xl font-mono underline text-center">
        What would you like to order
      </h1>
      {/* <div className="mt-5 flex flex-wrap gap-3">
        {menu_list.map((menu) => (
          <div className="py-2 px -2 flex flex-col items-center gap-5">
            <div className="w-[7.5vw] border border-pink-800 rounded-full">
              <img
                className=" w-full  cursor-pointer"
                src={menu.menu_image}
                alt=""
              />
            </div>
            <p className="text-md font-semibold font-serif text-[#888]">
              {menu.menu_name}
            </p>
          </div>
        ))}
      </div> */}

      <div class="grid grid-cols-6 gap-4 mt-10">
        {menu_list.map((menu) => (
          <div className="py-2 px -2 flex flex-col items-center gap-5">
            <div className="w-[7.5vw] border border-pink-800 rounded-full">
              <img
                className=" w-full  cursor-pointer"
                src={menu.menu_image}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
      <hr className="mt-2.5 h-0.5 bg-[#e2e2e2] border-none" />
    </div>
  );
};

export default FoodCategory;

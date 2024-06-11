import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import { food_list } from "../assets/assets";
import ProductCard from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/features/cartSlice";
import { useAuth } from "../contexts/authContext/Index";
const PopularFood = () => {
  const foodcart = useSelector((state) => state);
  const dispatch = useDispatch();
  const { useLoggedIn } = useAuth();
  const sendDataToCart = (e) => {
    if (useLoggedIn) {
      dispatch(addToCart(e));
    } else {
      alert("Please login to add to cart");
    }
    /* dispatch(addToCart(e)); */
  };
  const [chooseOption, SetChoosenOption] = useState("");
  const [filteredData, setFiltredData] = useState(food_list);

  const filterData = () => {
    if (chooseOption === "") {
      setFiltredData(food_list);
    } else if (chooseOption === "Price low to high") {
      setFiltredData(food_list.sort((a, b) => a.price - b.price));
    } else if (chooseOption === "Price high to low") {
      setFiltredData(food_list.sort((a, b) => b.price - a.price));
    } else if (chooseOption === "Rating high to low") {
      setFiltredData(food_list.sort((a, b) => b.rating - a.rating));
    } else if (chooseOption === "Rating low to high") {
      setFiltredData(food_list.sort((a, b) => a.rating - b.rating));
    } else {
      setFiltredData(food_list);
    }
  };

  useEffect(() => {
    filterData();
  }, [chooseOption]);
  console.log(chooseOption);
  return (
    <div className="mt-2 py-4  w-full">
      <div className="flex items-start justify-between">
        <h2 className="text-3xl font-bold">Popular Food</h2>
        <select
          name=""
          id=""
          value={chooseOption}
          onChange={(e) => SetChoosenOption(e.target.value)}
        >
          <option>Price low to high</option>
          <option>Price high to low</option>
          <option>Rating high to low</option>
          <option>Rating low to high</option>
        </select>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:full mt-5  sm:w-[1/3]">
        {filteredData.map((food) => (
          /*  <FoodCard key={food.id} food={food} /> */
          <ProductCard key={food.id} data={food} onclick={sendDataToCart} />
        ))}
      </div>
    </div>
  );
};

export default PopularFood;

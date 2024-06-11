import React from "react";
import Header from "../components/Header";
import FoodCategory from "../components/FoodCategory";
import PopularFood from "../components/PopularFood";

const Home = () => {
  return (
    <div className="px-[4%] md:px-[10%] h-screen">
      <Header />
      {/* <Hero /> */}
      <FoodCategory />
      <PopularFood />
    </div>
  );
};

export default Home;

import React from "react";
import logo from "../assets/logo.png";
import { Link, ShoppingCart } from "lucide-react";
import avatar from "../assets/avatar.png";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext/Index";
import { doSignOut } from "../firebase/auth";
import web_logo from "../assets/web-logo.png";
const Navbar = () => {
  const { cartList } = useSelector((state) => state.cart);
  const { useLoggedIn } = useAuth();

  const navigate = useNavigate();

  return (
    <nav className="flex py-3 max-w-screen mb-3 fixed left-0 right-0 px-[4%] md:px-[10%] z- transition delay-75 ease-in-out shadow-sm  drop-shadow-sm bg-white">
      <div className="flex justify-between items-center w-full">
        <section>
          <div className="flex items-center gap-3">
            <img className="w-8 h-8" src={logo} alt="logo" />
            <NavLink to={"/"}>
              <h1 className="text-3xl font-mono">Foodie</h1>
              {/*  <div className="w-[22%]">
                <img className="w-ful" src={web_logo} alt="logo" />
              </div> */}
            </NavLink>
          </div>
        </section>
        <section className="hidden md:flex">
          <ul className="flex items-center gap-5">
            <li>Home</li>
            <li>Menu</li>
            <li>Contact us</li>
          </ul>
        </section>
        <section className="flex items-center gap-4">
          <div className="relative mr-2">
            <ShoppingCart />
            <NavLink to={"/cart"}>
              <div className="absolute -top-2 -right-2 bg-red-600 rounded-full h-5 w-5 flex items-center justify-center">
                <p className="text-center font-mono text-white font-sm">
                  {cartList.length}
                </p>
              </div>
            </NavLink>
          </div>

          <div className="w-8 h-8 rounded-full">
            <img src={avatar} alt="" />
          </div>

          {/* {useLoggedIn && (
              <div className="flex items-center">
                <button
                  onClick={() => {
                    doSignOut().then(() => {
                      navigate("/login");
                    });
                  }}
                >
                  Logout
                </button>
              </div>
            )} */}
          {useLoggedIn ? (
            <>
              <button
                onClick={() => {
                  doSignOut().then(() => {
                    navigate("/login");
                  });
                }}
                className="text-sm text-blue-600 underline"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className="py-2 px-2 bg-green-800 text-white rounded-md"
                onClick={() => navigate("/login")}
              >
                Log In
              </button>
              <button
                className="py-2 px-2 bg-green-800 text-white rounded-md"
                onClick={() => navigate("/signup")}
              >
                Sign up
              </button>
            </>
          )}
        </section>
      </div>
    </nav>
  );
};

export default Navbar;

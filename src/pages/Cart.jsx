import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cartIcon from "../assets/cart_icon.gif";
import {
  addToCart,
  removeFromCart,
  singleItemRemove,
} from "../Redux/features/cartSlice";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { GiCrowDive } from "react-icons/gi";
const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartList } = useSelector((state) => state.cart);

  console.log(cartList);
  const dispatch = useDispatch();
  const remove = (id) => {
    dispatch(removeFromCart(id));
  };

  const increment = (e) => {
    dispatch(addToCart(e));
  };

  const decrement = (e) => {
    dispatch(singleItemRemove(e));
  };

  const total = () => {
    let total_price = 0;
    cartList.map((cart) => {
      total_price += cart.price * cart.quantity;
    });
    setTotalPrice(total_price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <div className="px-[4%] md:px-[10%] h-screen mt-20">
      <div>
        <div className="grid grid-cols-6 px-2 items-center text-gray-500">
          <p className="w-[20%]">Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {cartList.length <= 0 && (
          <div className="flex items-center justify-center h-[30vh]">
            <img src={cartIcon} alt="" />
            <p className="text-xl font-bold text-gray-500">
              Your cart is empty
            </p>
          </div>
        )}
        {cartList.map((cart) => (
          <div className="grid grid-cols-6  mt-3">
            <img className="w-12" src={cart.image} alt="" />
            <p> {cart.name}</p>
            <p>{cart.price}</p>
            <div className="flex items-center">
              <button
                onClick={
                  cart.quantity <= 1
                    ? () => remove(cart._id)
                    : () => decrement(cart)
                }
                className="py-0 px-1 w-7 bordder border-green-950 text-white bg-blue-900 rounded-md mr-3 hover:bg-orange-700"
              >
                -
              </button>
              <p>{cart.quantity}</p>
              <button
                onClick={() => increment(cart)}
                className="py-0 px-1 w-7 bordder border-green-950 text-white bg-blue-900 rounded-md ml-3 hover:bg-orange-700"
              >
                +
              </button>
            </div>

            <p>{cart.price * cart.quantity}</p>
            <p
              onClick={() => {
                remove(cart._id);
                toast.success(`${cart.name} remove from cart`);
              }}
              className="cursor-pointer"
            >
              X
            </p>
          </div>
        ))}

        <hr className="h-[1px] border-none bg-[#e2e2e2]" />
      </div>

      <div className="mt-20 flex justify-between lg:flex-row gap-10 md:flex-row flex-col">
        <div className=" flex-[.5] flex flex-col gap-5">
          <h2>Cart Totals</h2>
          <div>
            <div className="flex justify-between text-[#555]">
              <p>SubTotals</p>
              <p>{totalPrice}</p>
            </div>
            <hr className="mt-3" />
            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>{0}</p>
            </div>
            <hr className="mt-3" />
            <div className="flex justify-between text-[#555]">
              <b>Total</b>
              <b>{totalPrice}</b>
            </div>
          </div>
          <NavLink to={"/order"}>
            <button className="text-white bg-orange-500 lg:w-[15vw] sm:w-[45vw]  py-1 px-3 rounded-sm cursor-pointer">
              PROCEED TO CHECKOUT
            </button>
          </NavLink>
        </div>

        <div className="">
          <div className="flex flex-col items-center gap-5">
            <p className="text-xl text-gray-950">
              If you hava a promocode, Enter it here
            </p>
            <div className="flex flex-col items-center gap-3">
              <input
                className="outline-none border border-orange-950 rounded-md py-2 px-2"
                type="text"
                placeholder="Promocode"
              />
              <button className="bg-orange-700 text-white py-1 px-2 rounded-md">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

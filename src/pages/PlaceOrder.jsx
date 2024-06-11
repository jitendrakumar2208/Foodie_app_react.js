import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PlaceOrder = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const [totalPrice, setTotalPrice] = useState(0);
  const { cartList } = useSelector((state) => state.cart);

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
    <div className="px-[4%] md:px-[10%] h-screen mt-20 flex items-start justify-between">
      {/* left */}
      <div className="w-full max-w-[500px]">
        <p className="text-2xl font-bold mb-12">Delivery Information</p>
        <div className="flex gap-3">
          <input
            className="mb-4 w-full p-2 border border-[#5c5c5c] rounded-[4px] outline-red-600"
            type="text"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="mb-4 w-full p-3 border border-[#5c5c5c] rounded-[4px] outline-red-600"
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <input
          className="mb-4 w-full p-3 border border-[#5c5c5c] rounded-[4px] outline-red-600"
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="mb-4 w-full p-3 border border-[#5c5c5c] rounded-[4px] outline-red-600"
          type="text"
          placeholder="Street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <div className="flex gap-3">
          <input
            className="mb-4 w-full p-3 border border-[#5c5c5c] rounded-[4px] outline-red-600"
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            className="mb-4 w-full p-3 border border-[#5c5c5c] rounded-[4px] outline-red-600"
            type="text"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <input
            className="mb-4 w-full p-3 border border-[#5c5c5c] rounded-[4px] outline-red-600"
            type="text"
            placeholder="Zip Code"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
          <input
            className="mb-4 w-full p-3 border border-[#5c5c5c] rounded-[4px] outline-red-600"
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <input
          className="mb-4 w-full p-3 border border-[#5c5c5c] rounded-[4px] outline-red-600"
          type="phone"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      {/* right */}
      <div className="w-full max-w-[500px]">
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
          <button className="text-white bg-orange-500 lg:w-[15vw] sm:w-[45vw]  py-1 px-3 rounded-sm cursor-pointer">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;

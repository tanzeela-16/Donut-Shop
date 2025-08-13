import React, { useState } from "react";
import donutLogo from "../../assets/website/donut_logo.png"; // Use your donut logo image

const OrderForm = ({ updateCart }) => {
  const [quantities, setQuantities] = useState({});
  
  const donutTypes = [
    { id: 1, name: 'Glazed Donut', price: 180 },
    { id: 2, name: 'Chocolate Sprinkles', price: 220 },
    { id: 3, name: 'Strawberry Frosted', price: 200 },
    { id: 4, name: 'Caramel Crunch', price: 250 },
    { id: 5, name: 'Boston Cream', price: 270 },
  ];

  const handleQuantityChange = (event, donutId) => {
    const value = event.target.value;
    if (value >= 0) {
      setQuantities((prevQuantities) => {
        const updatedQuantities = { ...prevQuantities, [donutId]: parseInt(value) };
        updateCart(updatedQuantities);
        return updatedQuantities;
      });
    }
  };

  return (
    <div className="space-y-5">
      <h2 className="text-xl font-cursive text-pink-100 text-center mb-4">Choose Your Donuts 🍩</h2>

      {donutTypes.map((donut) => (
        <div
          key={donut.id}
          className="flex items-center justify-between p-2 rounded-md bg-[#f9e3f0] text-[#4b1a2b] shadow-md"
        >
          <div className="flex items-center gap-2">
            <img
              src={donutLogo}
              alt={`${donut.name}`}
              className="w-10 h-10"
            />
            <div className="flex flex-col">
              <span className="font-semibold">{donut.name}</span>
              <span className="text-sm text-[#914575]">Rs. {donut.price}</span>
            </div>
          </div>

          <input
            type="number"
            min="0"
            value={quantities[donut.id] || 0}
            onChange={(e) => handleQuantityChange(e, donut.id)}
            className="w-14 py-1 px-2 rounded-md text-center border-2 border-pink-300 text-black bg-white shadow-inner"
          />
        </div>
      ))}
    </div>
  );
};

export default OrderForm;

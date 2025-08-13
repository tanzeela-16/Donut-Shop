import React, { useState } from "react";
import Logo from "../../assets/website/donut_logo.png";
import { GiDonut } from "react-icons/gi";
import OrderForm from "../OrderForm/OrderForm";

const Menu = [
  { id: 1, name: "Home", link: "/#home" },
  { id: 2, name: "Menu", link: "/#services" },
  { id: 3, name: "About", link: "/#about" },
  { id: 4, name: "Reviews", link: "/#reviews" },
];

const Navbar = () => {
  const [isOrderFormVisible, setOrderFormVisible] = useState(false);
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleOrderClick = () => {
    setOrderFormVisible(!isOrderFormVisible);
  };

  const handleCloseModal = () => {
    setOrderFormVisible(false);
  };

  const updateCart = (updatedQuantities) => {
    const updatedCart = [];
    const donutTypes = [
      { id: 1, name: "Chocolate Donut", price: 350 },
      { id: 2, name: "Strawberry Donut", price: 300 },
      { id: 3, name: "Glazed Donut", price: 280 },
      { id: 4, name: "Vanilla Donut", price: 320 },
      { id: 5, name: "Caramel Donut", price: 360 },
    ];

    donutTypes.forEach((donut) => {
      const quantity = updatedQuantities[donut.id] || 0;
      if (quantity > 0) {
        updatedCart.push({
          name: donut.name,
          quantity,
          totalPrice: quantity * donut.price,
        });
      }
    });

    setCart(updatedCart);
  };

  const calculateSubtotal = () =>
    cart.reduce((acc, item) => acc + item.totalPrice, 0);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
      setCart([]);
      handleCloseModal();
    }, 2000);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-[#6b2f2f] to-[#b24949] shadow-md text-white">
        <div className="container py-2">
          <div className="flex justify-between items-center relative">
            {/* Logo */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              className="relative h-16 flex items-center"
            >
              <a
                href="#"
                className="font-bold text-2xl sm:text-3xl flex items-center gap-2 tracking-wider font-cursive"
              >
                <div className="relative w-20 sm:w-24 h-16">
                  <img
                    src={Logo}
                    alt="Logo"
                    className="absolute top-1/2 -translate-y-1/2 w-24 sm:w-28"
                  />
                </div>
                <span className="text-4xl font-lobster text-center mb-4">The Daily Donut</span>
              </a>
            </div>

            {/* Menu Links */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="flex justify-between items-center gap-4"
            >
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                className="bg-[#e18c8c] hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3"
                onClick={handleOrderClick}
              >
                Order
                <GiDonut className="text-xl text-white drop-shadow-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOrderFormVisible && (
        <>
          {/* Blurred Background */}
          <div className="fixed inset-0 backdrop-blur-md bg-black/30 z-40"></div>

          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-[#843f3f] p-8 rounded-lg shadow-lg w-[70%] sm:w-[50%] md:w-[40%] lg:w-[35%] text-white relative">
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl"
              >
                &times;
              </button>

              {/* Modal Content */}
              <h2 className="text-2xl font-lobster text-center mb-4">
                Donut Items
              </h2>
              <OrderForm updateCart={updateCart} />

              {/* Cart */}
              {cart.length > 0 && (
                <div className="mt-6 p-4 bg-[#5e2d2d] rounded-lg shadow-md">
                  <h3 className="text-lg font-bold">Your Cart</h3>
                  <ul className="space-y-2">
                    {cart.map((item, index) => (
                      <li key={index} className="flex justify-between text-sm">
                        <span>
                          {item.quantity}x {item.name}
                        </span>
                        <span>Rs. {item.totalPrice}</span>
                      </li>
                    ))}
                  </ul>
                  <hr className="my-2 border-t border-pink-200" />
                  <div className="flex justify-between text-lg font-semibold mt-4">
                    <span>Subtotal</span>
                    <span>Rs. {calculateSubtotal()}</span>
                  </div>
                </div>
              )}

              {/* Order Button */}
              {cart.length > 0 && !orderPlaced && (
                <button
                  onClick={handlePlaceOrder}
                  className="w-full mt-6 py-3 text-lg text-white font-semibold bg-gradient-to-r from-[#e18c8c] to-[#da5b5b] rounded-full hover:scale-105 duration-200"
                >
                  Place Order
                </button>
              )}

              {/* Confirmation */}
              {orderPlaced && (
                <div className="mt-6 text-center text-xl font-semibold text-green-400">
                  Your donut order is on the way!
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;

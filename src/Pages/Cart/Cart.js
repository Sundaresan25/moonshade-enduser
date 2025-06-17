import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Signature Perfume", quantity: 1, price: 49.99 },
    { id: 2, name: "Custom Blend", quantity: 1, price: 59.99 },
    { id: 3, name: "Seasonal collections", quantity: 1, price: 69.99 },
    { id: 4, name: "Gift Sets", quantity: 1, price: 79.99 },
  ]);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [step, setStep] = useState("cart");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleApplyCoupon = () => {
    if (coupon === "DISCOUNT10") {
      setDiscount(10);
    }
  };

  const totalPrice =
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0) - discount;

  const handleProceedToPayment = () => setStep("payment");

  const handleCompletePurchase = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    alert(`Payment successful with ${paymentMethod}`);
    setStep("confirmation");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 border border-gray-300 rounded-lg text-center bg-white shadow-md">
      {step === "cart" && (
        <>
          <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-200">
              <p className="font-medium">{item.name}</p>
              <p>Qty: {item.quantity}</p>
              <p>${item.price.toFixed(2)}</p>
            </div>
          ))}
          <div className="mt-6">
            <input
              type="text"
              placeholder="Enter coupon code"
              className="border border-gray-300 px-3 py-2 rounded mr-2"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            <button
              onClick={handleApplyCoupon}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Apply Coupon
            </button>
            <h3 className="text-xl font-semibold mt-4">Total Price: ${totalPrice.toFixed(2)}</h3>
            <button
              onClick={handleProceedToPayment}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded text-lg hover:bg-green-700"
            >
              Proceed to Payment
            </button>
          </div>
        </>
      )}

      {step === "payment" && (
        <div className="max-w-md mx-auto mt-6 p-4 border border-gray-200 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Payment Options</h2>
          <div className="text-left">
            <label className="block my-2">
              <input
                type="radio"
                name="payment"
                value="Credit Card"
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
              />
              Credit Card
            </label>
            <label className="block my-2">
              <input
                type="radio"
                name="payment"
                value="PayPal"
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
              />
              PayPal
            </label>
            <label className="block my-2">
              <input
                type="radio"
                name="payment"
                value="Google Pay"
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
              />
              Google Pay
            </label>
          </div>
          <button
            onClick={handleCompletePurchase}
            className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Complete Payment
          </button>
        </div>
      )}

      {step === "confirmation" && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-green-700">Order Confirmation</h2>
          <p className="mt-4 text-gray-700">Thank you for your purchase! Your order will be processed soon.</p>
        </div>
      )}
    </div>
  );
};

export default Cart;

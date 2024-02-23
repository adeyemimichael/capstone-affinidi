import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cartItems }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const getSubtotal = (item) => {
    return item.quantity * item.price;
  };

  const goToCheckout = () => {
    setIsLoading(true); // Set loading state to true when checkout button is clicked
    // Simulate checkout process (e.g., sending data to server)
    setTimeout(() => {
      setIsLoading(false); // Reset loading state after some delay (simulating asynchronous operation)
      navigate('/checkout');
    }, 2000); // Simulate 2 seconds delay
  };

  return (
    <div className="Cart">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Subtotal</th> {/* Added Subtotal column */}
          </tr>
        </thead>
        <tbody>
          {cartItems.length === 0 ? (
            <tr>
              <td colSpan="5">Your cart is empty.</td> {/* Adjusted colspan for new column */}
            </tr>
          ) : (
            cartItems.map((item) => (
              <tr key={item.id}>
                <td><img src={item.imageUrl} alt={item.name} /></td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
                <td>${getSubtotal(item)}</td> {/* Display subtotal for each item */}
              </tr>
            ))
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4">Total</td>
            <td>${getTotalPrice()}</td>
          </tr>
        </tfoot>
      </table>
      <button onClick={goToCheckout} disabled={cartItems.length === 0 || isLoading} className="CheckoutButton">
        {isLoading ? 'Loading...' : 'Go to Checkout'}
      </button>
    </div>
  );
};

export default Cart;

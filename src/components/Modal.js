import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Modal.css';

const Modal = ({ closeModal }) => {
  const navigate = useNavigate();

  const goToCart = () => {
    closeModal();
    navigate('/cart');
  };

  const continueShopping = () => {
    closeModal();
  };

  return (
    <div className="ModalOverlay">
      <div className="Modal">
        <p className="Message">Item successfully added to cart!</p>
        <div className="ButtonGroup">
          <button onClick={goToCart} className="Button GoToCartButton">Go to Cart</button>
          <button onClick={continueShopping} className="Button ContinueShoppingButton">Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};
 
export default Modal;

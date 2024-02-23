import React, { useState } from 'react';
import './ProductDisplay.css';

const ProductDisplay = ({ addToCart }) => {
  const [isDaylightMode, setIsDaylightMode] = useState(true);

  const toggleDaylightMode = () => {
    setIsDaylightMode((prevMode) => !prevMode);
  };

  const backgroundStyle = {
    backgroundColor: isDaylightMode ? '#f5f5f5' : '#333', // Daylight and night background colors
  };

  const products = [
    { id: 1, name: 'Hoodie', price: 10, imageUrl: 'hoodie.png' },
    { id: 2, name: 'T-Shirt', price: 15, imageUrl: 'tee.png' },
    { id: 3, name: 'Sweatpants', price: 20, imageUrl: 'https://bodenusa.com/en-us/printed-sweatpants/sty-g3314' },
    { id: 4, name: 'Sneakers', price: 30, imageUrl: 'sneakers.png' },
    { id: 5, name: 'Backpack', price: 25, imageUrl: 'backpack.png' },
    { id: 6, name: 'Beanie', price: 8, imageUrl: 'beanie.png' },
    { id: 7, name: 'Jacket', price: 40, imageUrl: 'jacket.png' },
    { id: 8, name: 'Jeans', price: 35, imageUrl: 'jeans.png' },
    { id: 9, name: 'Socks', price: 5, imageUrl: 'socks.png' },
    { id: 10, name: 'Watch', price: 50, imageUrl: 'watch.png' },
  ];

  return (
    <div className="ProductDisplay" style={backgroundStyle}>
      <div className="ToggleButtons">
        <button onClick={toggleDaylightMode}>
          {isDaylightMode ? 'Night Mode' : 'Daylight Mode'}
        </button>
      </div>
      {products.map((product) => (
        <div key={product.id} className="ProductItem">
          <img src={product.imageUrl} alt={product.name} className="ProductImage" />
          <div className="ProductInfo">
            <h2 className="ProductName">{product.name}</h2>
            <p className="ProductPrice">${product.price}</p>
            <button onClick={() => addToCart(product)} className="AddToCartButton">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDisplay;

import React, { useState } from "react";

const Product = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const addToCart = () => {
    const newQuantity = quantity +1;
    onAddToCart(product, newQuantity);
    setQuantity(newQuantity);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Weight: {product.weight}</p>
      <p>Price: ${product.price}</p>
      {quantity === 0 ? (
        <button onClick={addToCart}>Add to cart</button>
      ) : (
        <div>
          <button onClick={() => setQuantity(quantity - 1)}>-</button>
          {quantity}
          <button onClick={addToCart} disabled={quantity >= 10}>+</button>
        </div>
      )}
    </div>
  );
};

export default Product;
import React from "react";
import { Link } from "react-router-dom";
import "./Style/CartPage.css";

const CartPage = ({ products, onRemoveFromCart }) => {
  return (
    <div>
      <h2>CART PAGE.....</h2>
      <div className="cart-icon">
        <Link to="/confirm">
          <button>Checkout</button>
        </Link>
      </div>
      {products.length === 0 ? ( // Check if the cart is empty
        <img className="cartempty" src="https://www.vinsolutions.com/wp-content/uploads/sites/2/vinsolutions/media/Vin-Images/news-blog/Empty_Shopping_Cart_blog.jpg" alt="EmptyCartImage"/>
      ) : (
        <div className="product-line">
          {products.map((product) => (
            <div key={product.id}>
              <img className="image" src={product.image} alt="productImage" />
              <p>{product.name}</p>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <button onClick={() => onRemoveFromCart(product)}>Remove here</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;

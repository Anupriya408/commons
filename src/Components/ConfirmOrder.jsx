import React from "react";
import "./Style/ConfirmOrder.css";
import {Link} from 'react-router-dom';

const ConfirmOrderPage = ({ products }) => {
  //  For Calculating the total price of the order
  const total = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const handlePlaceOrder = () => {
   if(products.length === 0){
    alert("No products present to place an order")
   }else{
    alert("Successfully placed the order!")
   }
  };

  return (
    <div>
      <h2>CONFIRM ORDER..</h2>
      <div className="order">
        <h3>Orders Details</h3>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} = {product.quantity} x ${product.price.toFixed(2)}{" "}
              = ${(product.quantity * product.price).toFixed(2)}
            </li>
          ))}
        </ul>
        <p>Total: ${total.toFixed(2)}</p>
      </div>
      <button onClick={handlePlaceOrder} className="clickOrderButton">
        Place Order!!!!
      </button>
      <Link to="/">
        <button className="home">Click here to Go to Home Page</button>
      </Link>
    </div>
  );
};

export default ConfirmOrderPage;

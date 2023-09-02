import React, { useState, useEffect } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import "./Style/CataloguePage.css";
import { BsFillCartDashFill} from "react-icons/bs";
// BsFillCartDashFill

const CataloguePage = ({ products, onAddToCart }) => {
  
 return (
    <div>
      <h2>CATALOGUE PAGE.....</h2>
      <div className="cart-icon">
        <Link to="/cart"><BsFillCartDashFill/></Link>
      </div>
      <div className="product-line">
        {products.map((product) => (
          <Product
            className="product"
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default CataloguePage;

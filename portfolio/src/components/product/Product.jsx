import React from "react";
import "./product.css";

function Product({ img, link, title, desc }) {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <div className="p-img-container">
          <img src={img} alt={title} className="p-img" />
          <div className="p-overlay">
            <h3 className="p-title">{title}</h3>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Product;

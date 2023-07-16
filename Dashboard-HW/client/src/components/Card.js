import React from "react";
import { Link } from "react-router-dom";

export default function Card({
  id,
  name,
  price,
  description,
  cover,
  handleDelete,
}) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={cover} className="card-image" alt="Product" />
      </div>
      <div className="card-body">
        <div className="card-info">
          <h4 className="card-title">{name}</h4>
          <p className="card-price">{`$ ${price}.00`}</p>
        </div>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-footer">
        <button onClick={handleDelete} className="cart-btn delete-button">
          Delete Cart
        </button>

        <button className="cart-btn update-button">
          <Link to={`/update/${id}`} className="link-style">
            Update
          </Link>
        </button>
      </div>
    </div>
  );
}

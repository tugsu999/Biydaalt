import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import './ProductDetail.css';

const ProductDetail = ({ products, addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="product-detail">
      <div className="product-detail-info">
        <img
          src={product.image}
          alt={product.name}
          className="product-detail-image"
        />
        <div>
          <h3>{product.name}</h3>
          <p>${product.price}</p>

          <div className="color-selection">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className={`color-circle ${selectedColor === color ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              />
            ))}
          </div>

          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />

          <button onClick={() => addToCart(product, quantity, selectedColor)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import './ProductList.css'; 

const ProductList = ({ products, addToCart }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value); 
  };

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="product-container">
      <div className="category-filter">
        <select onChange={handleCategoryChange} value={selectedCategory}>
          <option value="All">All</option>
          <option value="Clothing">Clothing</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/detail/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </Link>
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

            <input type="number" min="1" defaultValue="1" />

            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

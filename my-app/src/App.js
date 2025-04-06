import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; 
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import products from "./data/products";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";
import ProtectedRoute from "./routes/ProtectedRoute"; 

import "./styles.css";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity, selectedColor) => {
    const productInCart = cart.find(item => item.id === product.id && item.selectedColor === selectedColor);

    if (productInCart) {
      setCart(cart.map(item => 
        item.id === product.id && item.selectedColor === selectedColor
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity, selectedColor }]);
    }
  };

  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <header className="app-header">
            <h1 className="logo">ShopSmart</h1>
            <nav className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/cart">Cart ({cart.length})</Link>
              <Link to="/profile">Profile</Link>
            </nav>
          </header>
          
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route 
              path="/" 
              element={
                <ProtectedRoute 
                  element={<ProductList products={products} addToCart={addToCart} />} 
                />
              }
            />
            <Route 
              path="/detail/:id" 
              element={<ProductDetail products={products} addToCart={addToCart} />} 
            />
            <Route path="/cart" element={<Cart cart={cart} />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;

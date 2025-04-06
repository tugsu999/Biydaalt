import React from 'react';

const Cart = ({ cart }) => {
  const getTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="cart-items">
          {cart.map((product, index) => (
            <div key={index} className="cart-item">
              <img
                src={product.image}
                alt={product.name}
                className="cart-image"
              />
              <div className="cart-item-details">
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Color: {product.colors}</p>
                <p>Total: ${(product.price * product.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-total">
        <h3>Total: ${getTotal()}</h3>
      </div>
    </div>
  );
};

export default Cart;

import React from "react";
import store from "./store";
import "./css/cart.css";
import { observer } from "mobx-react-lite";

const Cart: React.FC = observer(() => {
  const { cart } = store;

  const handleRemoveFromCart = (id: string) => {
    store.removeFromCart(id);
  };

  const handleIncreaseQuantity = (id: string) => {
    store.increaseQuantity(id);
  };

  const handleDecreaseQuantity = (id: string) => {
    store.decreaseQuantity(id);
  };

  return (
    <div className="cart-container">
      <h2>Корзина</h2>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="item-details">
                <span className="item-name">{item.name}</span>
                <span className="item-price">{item.price} Рублей</span>
              </div>
              <div className="quantity-controls">
                <button
                  onClick={() => handleDecreaseQuantity(item.id)}
                  className="quantity-button"
                >
                  -
                </button>
                <span className="item-quantity">{item.quantity}</span>
                <button
                  onClick={() => handleIncreaseQuantity(item.id)}
                  className="quantity-button"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="remove-button"
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default Cart;

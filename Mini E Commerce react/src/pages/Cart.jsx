import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {

  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="product-section">

      <h1 className="heading">Your Cart</h1>

    {cart.length === 0 && <p className="empty-cart">Your Cart is Empty 🛒</p>}
      <div className="product-grid">

        {cart.map((item) => (

          <div key={item.id} className="product-card">

            <img
              src={item.image}
              alt={item.name}
              className="product-img"
            />

            <h2>{item.name}</h2>

            <p className="price">₹ {item.price}</p>

            <button
              onClick={() => removeFromCart(item.id)}
              className="btn"
            >
              Remove
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Cart;
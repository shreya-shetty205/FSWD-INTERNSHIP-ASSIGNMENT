import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar(){

const {cart} = useContext(CartContext);

return(

<nav className="navbar">

<h2 className="logo">MiniShop</h2>

<div className="nav-links">

<NavLink to="/" className="link">Home</NavLink>

<NavLink to="/products" className="link">Products</NavLink>

<NavLink to="/cart" className="link">
Cart ({cart.length})
</NavLink>

</div>

</nav>

)

}

export default Navbar;
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({product}){

const {addToCart} = useContext(CartContext);

return(

<div className="product-card">

<img src={product.image} alt={product.name} className="product-img"/>

<h2>{product.name}</h2>

<p>₹ {product.price}</p>

<button
onClick={()=>addToCart(product)}
className="btn"
>
Add To Cart
</button>

</div>

)

}

export default ProductCard;
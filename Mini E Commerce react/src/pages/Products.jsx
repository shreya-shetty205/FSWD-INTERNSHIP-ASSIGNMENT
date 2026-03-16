import { products } from "../services/productService";
import ProductCard from "../components/ProductCard";

function Products(){

return(

<div className="product-section">

<h1 className="heading">Our Products</h1>

<div className="product-grid">

{products.map(product=>(
<ProductCard key={product.id} product={product}/>
))}

</div>

</div>

)

}

export default Products;
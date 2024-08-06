import Product from "../Product/Product"

import "./ProductList.css"

const ProductList = ({ products, onDelete }) => {
    return (
        <div className="product-list">
            {products.map((item) => {
                return <Product key={item.id} Product={item} onDelete={onDelete}/>
            })}
        </div>
    )
}

export default ProductList
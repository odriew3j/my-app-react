import './Product.css'

const Product = ({ Product, onDelete }) => {
     return (
     <div className='product'>
        <div>{Product.title}</div>
        <div>
            <button className="btn" onClick={() => onDelete(Product.id)}>
                Delete
            </button>
        </div>
     </div>
     )
}

export default Product
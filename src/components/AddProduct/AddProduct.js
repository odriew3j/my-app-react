import { useState } from "react"

import "./AddProduct.css"

const AddProduct = ({ onAdd }) => {
    const [title, setTitle] = useState('')

    const submitForm = (event) => {
        event.preventDefault()

        onAdd({ title })

        setTitle('')
    }

    return (
        <div>
            <form className="add-product-form" onSubmit={submitForm}>
                <div className="form-control">
                    <input
                    type="text"
                    placeholder="Add Product"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <button type="submit" className="form-btn">
                    Add
                </button>
            </form>
        </div>
    )
}

export default AddProduct
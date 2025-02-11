import { useState, useEffect} from 'react'
import ProductList from './components/ProductList/ProductList'
import MyFile from './components/My-file/My-file'
import AddProduct from './components/AddProduct/AddProduct'

const App = () => {    // products : state now && // setProduct : update this state if needed
    const[products , setProducts] = useState([])
    
    useEffect(() => {
        const sendRequest = async () => {
            const response = await fetch('http://localhost:8000/products')

            const responseData = await response.json()

            setProducts(responseData)
        }

        sendRequest()
    }, [])

    const addProduct = async (title) => {
        const response = await fetch('http://localhost:8000/products', {
            method: 'POST',
            headers: {
                'content-type': 'aplication/json',
            },
            body: JSON.stringify(title),
        })

        const responseData = await response.json()

        setProducts([...products, responseData])
    }

    const deleteProduct = async (id) => {
        await fetch(`http://localhost:8000/products/${id}`, {
            method: 'DELETE',
        })

        setProducts(products.filter((item) => item.id !== id))    
    }

    return  (
        <div className='container'>
            <MyFile header1='hello world'/>
            <AddProduct onAdd={addProduct}/>
            <ProductList products={products} onDelete={deleteProduct}/>
        </div>
    )
}

export default App
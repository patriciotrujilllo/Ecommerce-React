import { useParams } from "react-router-dom"
import './productDescription.css'
import { Header } from "./component/Header"
import { useCart } from "./hooks/useCart"
import { useState } from "react"

export const ProductDescription = ({products}) =>{

    const [quantity,setQuantity] = useState(1)
    const {addToCart} = useCart()
    const {id} = useParams()
    const product = products? products.find(product=>product.id===parseInt(id)): false
    // const productInCart = cart? cart.find(product=>product.id===parseInt(id)): false
    return(
        product? 
        <main className="main-description">
            <Header/>
            <figure className="figure-description">
                <img src={product.image} alt="" />
            </figure>
            <div className="title-price-description">
                <div className="title">{product.title}</div>
                <div className="price-description">PRECIO:${product.price}</div>
            </div>
            <div className="product-description">
                {product.description}
            </div>
            <div className="product-add">
                <div className="buttons">
                    <div className="quantity">
                    <button onClick={()=>setQuantity(prevState=>prevState>1? prevState-1:prevState)}>-</button>
                        <div className="number">
                            {quantity}
                        </div>
                    <button onClick={()=>setQuantity(prevState=>prevState+1)}>+</button>
                    </div>
                    <button className="Add-cart" onClick={()=>addToCart(product,quantity)}>Añadir al carrito</button>
                    
                </div>
            </div>
        </main> : <div>Loading...</div>
    )
}
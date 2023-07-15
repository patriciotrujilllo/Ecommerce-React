import {MdOutlineRemoveShoppingCart,MdShoppingCart} from 'react-icons/md'
import { useId } from 'react'
import './Cart.css'
import { useCart } from '../hooks/useCart'

export const Cart = () =>{
    const idCart = useId()
    const {cart,addToCart,cleanCart} = useCart()

    const ItemOfCart = ({product,addToCart}) =>{
        return (
            <>
                <li>
                        <img src={product.image} alt={product.title} />
                    </li>
                    <div>
                        <strong>{product.title}</strong> -{product.price}
                    </div>
                    
                    <footer>
                        <small>
                            cantidad: {product.cantidad}
                        </small>
                        <button onClick={addToCart}>+</button>
                    </footer>
            </>
        )
    }
    return (
        <>
            <label className='cart-button' htmlFor={idCart}>
                <MdShoppingCart size='2rem'/>
            </label>

            <input id={idCart} type="checkbox" hidden/>

            <aside className='cart'>
                <ul>
                    {
                        cart.map(product=>(
                            <ItemOfCart key={product.id} product={product} addToCart={()=>addToCart(product)}/>
                        ))
                    }
                </ul>
                <button onClick={cleanCart}>
                    <MdOutlineRemoveShoppingCart size='1.5rem'/>
                </button>
            </aside>
        </>  
        
    )

    
}
import {MdOutlineRemoveShoppingCart,MdShoppingCart} from 'react-icons/md'
import { useId } from 'react'
import './Cart.css'

export const Cart = () =>{
    const idCart = useId()

    return (
        <>
            <label className='cart-button' htmlFor={idCart}>
                <MdShoppingCart size='2rem'/>
            </label>

            <input id={idCart} type="checkbox" hidden/>

            <aside className='cart'>
                <ul>
                    <li>
                        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Shirt" />
                    </li>
                    <div>
                        <strong>Shirt's Men</strong> -22.3
                    </div>
                    
                    <footer>
                        <small>
                            Cantidad: 1
                        </small>
                        <button>+</button>
                    </footer>
                </ul>
                <button>
                    <MdOutlineRemoveShoppingCart size='1.5rem'/>
                </button>
            </aside>
        </>  
        
    )

    
}
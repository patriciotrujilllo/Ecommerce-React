import '../../styles.css'
import { MdShoppingCartCheckout, MdOutlineRemoveShoppingCart } from 'react-icons/md'
import {useCart} from '../../hooks/useCart'

export const Cards = ({props}) =>{

    const {addToCart, cart, removeFromCart} = useCart()

    const isInCart = cart.some(item=> item.id=== props.id)

    return (
        <>
    
        <div className='item'>
            <figure>
                <img src={props.image} alt="" />
            </figure>
            
            <div className='info-product'>
                <h2>{props.category}</h2>
                <h4>{props.title}</h4>
                
            <div className='separador'>
            <span>Price : ${props.price}</span>
                <button onClick={()=>{
                    isInCart ? removeFromCart(props) : addToCart(props)
                                    }
                    }>
                {
                    isInCart?
                    <MdOutlineRemoveShoppingCart size='2rem'/>: 
                    <MdShoppingCartCheckout size='2rem'/>
                }
                    
                    
                </button>
            </div>
                
                
            </div>
        </div>
        </>
    )
    }
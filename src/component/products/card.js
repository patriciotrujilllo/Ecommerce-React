import '../../styles.css'
import { MdShoppingCartCheckout, MdOutlineRemoveShoppingCart } from 'react-icons/md'
import {useCart} from '../../hooks/useCart'
import { Link } from 'react-router-dom'

export const Cards = ({props}) =>{

    const {addToCart, cart, removeFromCart} = useCart()

    const isInCart = cart.some(item=> item.id=== props.id)
    const caratersLimit = props.title.split(" ").slice(0,3).join(" ")

    return (
        <>
    
        <div className='item'>
            <Link to={`/product/${props.id}`}>
                <figure className='figure-items'>
                    
                        <img src={props.image} alt="" />
                    
                </figure>
            </Link>
            
            <div className='info-product'>
                <h2>{props.category}</h2>
                <h4>{caratersLimit}</h4>
                </div>  
            <div className='separador'>
                <span style={{fontWeight: 'bold'}}>${props.price}</span>
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
        </>
    )
    }
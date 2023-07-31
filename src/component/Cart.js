import {MdOutlineRemoveShoppingCart} from 'react-icons/md'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {IoIosArrowRoundBack} from 'react-icons/io'
import { useEffect, useState } from 'react'
import './Cart.css'
import { useCart } from '../hooks/useCart'
import { Badge } from "@prismane/core";

export const Cart = () =>{
    const {cart,addToCart,cleanCart,subtractToCart,removeFromCart} = useCart()
    const [isOpen,setIsOpen] = useState(false)

    const ItemOfCart = ({product,addToCart,subtractToCart,removeFromCart}) =>{
        const [totalperPorduct,setTotalperPorduct] = useState(product.cantidad * product.price)

        useEffect(()=>{
            setTotalperPorduct(parseFloat((product.cantidad*product.price).toFixed(2)))
        },[product.cantidad, product.price])


        return (
            <>
                <li className='cart-item'>
                        
                        <img className='img-item' src={product.image} alt={product.title} />
                        <strong className='title-item'>{product.title}</strong>
                        <button className='remove-item' onClick={removeFromCart}>x</button>
                        <div className='contador-item'>
                            <button onClick={
                            subtractToCart
                            }> - </button><div className='number-cart'>{product.cantidad}</div>
                            <button onClick={
                                addToCart
                                }>+</button> 
                        </div>

                        <div className='price-item'>${product.price}</div>

                        <div className='total-price-item'>${totalperPorduct}</div>
                        
                </li>
            </>
        )
    }

    const total = cart.reduce((accumulator, product) => accumulator + product.cantidad * product.price, 0);

    return (
        <>
            <div className='cart-button'  onClick={()=> setIsOpen(!isOpen)}>
            {cart.length>0 ? (
            
            <Badge label={cart.length} style={{zIndex: 0}}>
                <AiOutlineShoppingCart size='2rem'/>
            </Badge>
            ):
            (<AiOutlineShoppingCart size='2rem'/>
            
            )}
            
            </div>


            <aside className= "cart" style={{ right: isOpen ? '0' : '-100%' }}>
                <div className='button-back' onClick={()=> setIsOpen(!isOpen)}>
                    <IoIosArrowRoundBack size='2rem' />
                </div>
                
                <ul>
                    {
                        cart.map(product=>(
                            <ItemOfCart key={product.id} 
                            product={product} 
                            addToCart={()=>addToCart(product,1)} 
                            subtractToCart={()=>subtractToCart(product)} 
                            removeFromCart={()=>removeFromCart(product)}
                            />
                        ))
                    }
                </ul>
                <footer className='footer'>
                    <div className='total'>Total: ${total.toFixed(2)}</div>
                    <button onClick={cleanCart}>
                        <MdOutlineRemoveShoppingCart size='1.5rem'/>
                    </button>
                </footer>
                
            </aside>
        </>  
        
    )

    
}
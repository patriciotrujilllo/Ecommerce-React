import '../../styles.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export const Cards = ({props}) =>{
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
                <button type="button"><AiOutlineShoppingCart size='2rem'/></button>
            </div>
                
                
            </div>
        </div>
        </>
    )
    }

/*
{
"id": 1,
"title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
"price": 109.95,
"description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
"category": "men's clothing",
"image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
"rating": {
"rate": 3.9,
"count": 120
}
}
*/
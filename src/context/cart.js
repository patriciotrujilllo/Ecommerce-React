import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart,setCart] = useState([])

    const addToCart = product =>{

        const productInCart = cart.findIndex(item=> item.id === product.id)

        if(productInCart>=0){
            //producto esta en el carrito, por lo tanto se debe agregar a la cantidad +1
        
            const newCart = structuredClone(cart)
            newCart[productInCart].cantidad +=1
            console.log(newCart)

            return setCart(newCart)
        }
        //en el caso de que no este el producto entoces se agrega directamente al carrito
        setCart(prevState=>[...prevState,{...product, cantidad:1}])

    }

    const removeFromCart = product =>{
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }
    const cleanCart = () =>{
        setCart([])
    }
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            cleanCart,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
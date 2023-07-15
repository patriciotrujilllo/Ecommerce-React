import { useContext } from "react";
import { CartContext } from "../context/cart";

export const useCart = () =>{
    const cart = useContext(CartContext)

    if(!cart){
        throw new Error('El componente no tiene acceso al contexto')
    }

    return cart
}
import { createContext } from "react";
import { useReducer } from "react";

export const CartContext = createContext()

const initialState= JSON.parse(window.localStorage.getItem('cart')) || []

const updateStateLocalStorage = newState =>{
    window.localStorage.setItem('cart',JSON.stringify(newState))
}


const reducer = (state,action) =>{
        switch(action.type){
            
            case 'ADD_TO_CART': {

                const productInCart = state.findIndex(item=> item.id === action.payload.id)

                if(productInCart>=0){
                    //producto esta en el carrito, por lo tanto se debe agregar a la cantidad +1
                    const newCart = structuredClone(state)
                    newCart[productInCart].cantidad +=1
                    ///Otra manera de hacerlo seria con un map
                    /*
                    const newState=state.map(item=>{
                        if(item.id===productInCart){
                            return {
                                ...item,
                                cantidad: item.cantidad+1
                            }
                            return item
                        }
                    })
                    
                    
                    */
                    updateStateLocalStorage(newCart)
                    return newCart
                }
                //en el caso de que no este el producto entoces se agrega directamente al carrito
                const newState = [...state,{...action.payload, cantidad:1}]
                updateStateLocalStorage(newState)
                return newState
            }
            case 'SUBTRACT_TO_CART': {

                const productInCart = state.findIndex(item=> item.id === action.payload.id)

                if(state[productInCart].cantidad>1){
                    const newCart = structuredClone(state)
                    newCart[productInCart].cantidad -=1
                    updateStateLocalStorage(newCart)
                    return newCart
                }
                const newState = state.filter(item => item.id !== action.payload.id)
                updateStateLocalStorage(newState)
                return newState
            }
            case 'CLEAN_CART': {
                updateStateLocalStorage([])
                return []
            }
            case 'REMOVE_TO_CART': {
                const newState = state.filter(item => item.id !== action.payload.id)
                updateStateLocalStorage(newState)
                return newState
            }
            default: console.log('ACTION_NOT_ALOWED')
        }
}

export const CartProvider = ({children}) =>{
    const [state, dispatch ] = useReducer(reducer,initialState)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })
    const subtractToCart = product => dispatch({
        type: 'SUBTRACT_TO_CART',
        payload: product
    })
    const cleanCart = () =>dispatch({
        type: 'CLEAN_CART'
    })
    const removeFromCart = product =>dispatch({
        type: 'REMOVE_TO_CART',
        payload: product
    })

    return (
        <CartContext.Provider value={{
            cart:state,
            addToCart,
            cleanCart,
            subtractToCart,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
/** import {createContext, useContext, useState} from 'react';
\
const CartContext = createContext();

export function CartProvider({children}){
    const [cart, setCart] = useState([]);

    const removerFromCart = (itemtoRemove) => {}

    const addToCart = (plant) => {}

    const value = {
        cart, //cart: cart
        removerFromCart,
        addToCart,
    };

    return <CartContext.Provider>{Children}</CartContext.Provider>
}

export function useCart(){
    const context = useContext(CartContext)
    if(!context){
        throw Error("useCart must be used within a CartProvider");
    }
    return context;
} **/

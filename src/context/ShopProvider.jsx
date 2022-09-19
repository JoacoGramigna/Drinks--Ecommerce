import React, { useState } from 'react';
import { createContext } from 'react';

export const Shop = createContext(null);

const ShopProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        const flag = isInCart(item.id);
        if (flag){
            const cartModified = cart.map(product =>{
                if(product.id === item.id){
                    product.quantity += item.quantity;
                    return product;
                }
                return product;
            })
            setCart(cartModified);
        } else{
            const cartModificado = [...cart,item];
            setCart(cartModificado);
        }
    } 

    const isInCart = (id) =>{
        return cart.some(product => product.id === id)
    }

    return (
        <Shop.Provider value={{cart, addItem}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider;
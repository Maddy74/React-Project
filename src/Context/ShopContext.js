import React, { createContext, useState } from "react";
import all_product from '../components/Assets/all_product';



export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}


const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());


    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
            console.log(updatedCart); // Log the updatedCart
            return updatedCart;
        });
    };
    const removefromcart = (itemId) => {
        setCartItems((Prev) => ({ ...Prev, [itemId]: Prev[itemId] - 1 }));
    }

    const getTotalcartamount = () => {
        let totalamount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalamount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalamount;
    };

    const getTotalcartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = { getTotalcartItems, getTotalcartamount, all_product, cartItems, addToCart, removefromcart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
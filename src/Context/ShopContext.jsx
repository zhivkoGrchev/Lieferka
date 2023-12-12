import {createContext, useState} from 'react'
import PropTypes from 'prop-types'
import {items} from '../Components/DataItems.jsx'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart =  {};
  for (let i = 1; i < items.length + 1; i++) {
    cart[i] = 0;
}
return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const product in cartItems) {
      if (cartItems[product] > 0) {
      let itemInfo = items.find((item) => item.id === Number(product));
      totalAmount += cartItems[product] * itemInfo.price;
    }
  }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    cartItems, 
    addToCart, 
    removeFromCart, 
    updateCartItemCount,
    getTotalCartAmount,
  };

  return (
          <ShopContext.Provider value={contextValue}>
            {props.children}
          </ShopContext.Provider>
  );

};

ShopContextProvider.propTypes = {
  children : PropTypes.node,
}

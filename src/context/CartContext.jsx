import { createContext, useState } from "react";
export const CartContext = createContext();
//cartcontextprovider puede ir el nombre que querramos en el provider
//siempre en mayuscula ej:CartContext
const CartContextProvider = ({ children }) => {
  //estado del carrito
  const [cart, setCard] = useState([]);
  const addToCart = () => {};
  const cleanCart = () => {};
  return (
    <CartContext.Provider
      value={{ cart: cart, addToCart: addToCart, cleanCart: cleanCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

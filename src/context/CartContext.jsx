import { createContext, useState } from "react";
export const CartContext = createContext();
import PropTypes from "prop-types";

//cartcontextprovider puede ir el nombre que querramos en el provider
//siempre en mayuscula ej:CartContext
const CartContextProvider = ({ children }) => {
  //estado del carrito
  const [cart, setCart] = useState([]); // el carrito marca 3 productos [ arreglo] x {objeto}
  //quantity 10 - price 5 --->50
  //quantity 3 - price 10 --->30
  //sunar todos los subtotales // 80
  //funcion modificar
  const addToCart = (product) => {
    let existe = isInCart(product.id);
    if (existe) {
      //recorro
      //pregunto
      //si no lo encuentro lo modifico
      //y sino, lo dejo como estaba
      let newArray = cart.map((elemento) => {
        // [{como esta} {como esta}, {quiero mofificar}, {como esta}],
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: product.quantity, // cantidad quantity
          };
        } else {
          return elemento;
        }
      }); //siempre devuelve un array y siempre de la misma longitud
      setCart(newArray);
    } else {
      setCart([...cart, product]); // lo que ya tiene el carrito mas un nuevo producto
    }
  };

  const cleanCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    let existe = cart.some((product) => product.id === id); //devuelve true y sino se cumple devuelve false
    return existe;
  };

  //una funcion
  //eliminar cada producto
  const deleteProduct = (id) => {
    // encontrar producto y eleminarlo
    console.log(id);
    //filter devuelve siempre un nuevo array
    let newArr = cart.filter((elemento) => elemento.id !== id); //filter retorna un booleano
    setCart(newArr);
  };

  const getQuantityById = (id) => {
    //no tenes unidades --- > 1
    //no tenes unidades --- > x unidades
    let productoEncontrado = cart.find((product) => product.id === id);
    //siempre el metodo find devuelve un elemento o un undefined si no hay conincidencias
    //return productoEncontrado.quantity; // se rompe si es underfined
    return productoEncontrado?.quantity;
  };

  //total del precio
  //const getTotalPrice = () => {
  //let total = 0;
  //for (let i = 0; i < cart.length; i++) {
  //total += cart[i].price * cart[i].quantity;
  //}
  //return total;
  //};
  //cantidad de elementos
  const getTotalItems = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return total;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);
    return total; //acc-acumulador(primero)
  };
  let data = {
    cart,
    addToCart,
    cleanCart,
    deleteProduct,
    getQuantityById,
    getTotalPrice,
    getTotalItems,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

CartContextProvider.propTypes = {
  children: PropTypes.element,
};

export default CartContextProvider;

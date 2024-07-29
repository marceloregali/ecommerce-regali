import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, clearCart, deleteProduct, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice(); //precio por la compra completa
  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div
            key={elemento.id}
            style={{ border: "2px solid black", width: "200px" }} //agregar diseño
          >
            <h2>{elemento.title}</h2>
            <h2>{elemento.quantity}</h2>
            <h2>{elemento.price}</h2>
            <Button
              variant="contained"
              onClick={() => deleteProduct(elemento.id)}
            >
              Eliminar
            </Button>
          </div>
        );
      })}
      <h2>Total a Pagar: {total}</h2>
      {/*no funciona limpiar carrito*/}
      <Button onClick={clearCart}>Limpiar carrito</Button>
      <Link to="/checkout">
        <Button variant="contained">Finalizar Compra</Button>
      </Link>
    </div>
  );
};

export default Cart;

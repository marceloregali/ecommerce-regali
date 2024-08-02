import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import "./Cart.css";

const Cart = () => {
  const { cart, cleanCart, deleteProduct, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice(); //precio por la compra completa

  const handleDelete = (id) => {
    Swal.fire({
      title: "Estas seguro de eliminar?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Borrar",
      denyButtonText: `No borrar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado!", "", "success");
        deleteProduct(id);
      } else if (result.isDenied) {
        Swal.fire("No se elimino", "", "info");
      }
    });
  };

  return (
    <div className="CartConteiner">
      {cart.map((elemento) => {
        return (
          <div
            key={elemento.id}
            style={{
              border: "2px solid black",
              width: "200px",
              marginBottom: "30px",
              margin: "20px",
            }}
          >
            <h2>{elemento.title}</h2>
            <h2>{elemento.quantity}</h2>
            <h2>{elemento.price}</h2>
            <Button
              variant="contained"
              onClick={() => handleDelete(elemento.id)}
            >
              Eliminar
            </Button>
          </div>
        );
      })}
      <h2 className={cart.length > 0 ? "title" : "ocultar"}>
        Total a Pagar: {total}
      </h2>
      {cart.length > 0 && <Button onClick={cleanCart}>Limpiar carrito</Button>}

      <Link to="/checkout">
        <Button
          variant="contained"
          style={{
            backgroundColor: cart.length > 0 ? "green" : "blue",
          }}
        >
          Finalizar Compra
        </Button>
      </Link>
    </div>
  );
};

export default Cart;

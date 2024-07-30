import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
const Cart = () => {
  const { cart, clearCart, deleteProduct, getTotalPrice } =
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
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Eliminado!", "", "success");
        deleteProduct(id);
      } else if (result.isDenied) {
        Swal.fire("No se elimino", "", "info");
      }
    });
  };

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
      {cart.length > 0 && <Button onClick={clearCart}>Limpiar carrito</Button>}
      {/*no funciona limpiar carrito*/}

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

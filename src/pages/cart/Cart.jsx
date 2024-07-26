import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <h1>Aca va el carrito</h1>
      <Link to="/checkout">
        <Button variant="contained">Finalizar Compra</Button>
      </Link>
    </div>
  );
};

export default Cart;

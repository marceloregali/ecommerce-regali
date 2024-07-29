import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
const CartWidge = () => {
  //dame el carrito
  //x va el nombre que querramos

  const { getTotalItems } = useContext(CartContext);
  let total = getTotalItems();

  return (
    <Link to="/cart">
      <Badge badgeContent={total} color="primary" showZero={true}>
        <ShoppingCartIcon
          style={{ fontSize: 40, color: "white", marginRight: "40%" }}
        />
      </Badge>
    </Link>
  );
};

export default CartWidge;

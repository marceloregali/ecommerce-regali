import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const CartWidge = () => {
  return (
    <Link to="/cart">
      <Badge badgeContent={0} color="primary" showZero={true}>
        <ShoppingCartIcon
          style={{ fontSize: 40, color: "white", marginRight: "40%" }}
        />
      </Badge>
    </Link>
  );
};

export default CartWidge;

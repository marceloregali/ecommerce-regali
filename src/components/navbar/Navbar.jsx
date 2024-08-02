import "./navbar.css";

import Button from "@mui/material/Button";

import CartWidget from "../cartWidget/CartWidge";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="contentNavBar">
      <>
        <div className="containerNavbar">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dxeifza9d/image/upload/v1718915255/OIP.CgMsyL6oyplTAsvevl6g3QHaFm_nmozje.jpg"
              alt=""
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
              }}
            />
          </Link>
          <ul style={{ display: "flex", gap: "30px" }}>
            <Link
              to="/category/Urbanas"
              style={{ listStyle: "none", color: "white", fontSize: "1.5rem" }}
            >
              <Button variant="outlined">Urbanas</Button>
            </Link>
            <Link
              to="/category/Deportivas"
              style={{ listStyle: " none", color: "white", fontSize: "1.5rem" }}
            >
              <Button variant="outlined">Deportivas</Button>
            </Link>
            <Link
              to="/"
              style={{ listStyle: "none", color: "white", fontSize: "1.5rem" }}
            >
              <Button variant="outlined"> Mis Productos</Button>
            </Link>
          </ul>
          <CartWidget />
        </div>
      </>
    </div>
  );
};

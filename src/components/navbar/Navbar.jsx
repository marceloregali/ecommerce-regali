import "./navbar.css";
import { BsCartCheckFill } from "react-icons/bs";

export const NavBar = () => {
  return (
    <div className="navbarContainer">
      <img src="" alt="" />

      <ul style={{ display: "flex", gap: "30px" }}>
        <li style={{ listStyle: "none", color: "white", fontSize: "1.5rem" }}>
          Producto
        </li>
        <li style={{ listStyle: " none", color: "white", fontSize: "1.5rem" }}>
          Caracteristicas
        </li>
        <li style={{ listStyle: "none", color: "white", fontSize: "1.5rem" }}>
          Contacto
        </li>
      </ul>

      <BsCartCheckFill color="white" size={40} />
    </div>
  );
};

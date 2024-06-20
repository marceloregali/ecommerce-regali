import "./navbar.css";
import { BsCartCheckFill } from "react-icons/bs";

export const NavBar = () => {
  return (
    <div className="navbarContainer">
      <img
        src="https://th.bing.com/th/id/OIP.CgMsyL6oyplTAsvevl6g3QHaFm?w=185&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        alt=""
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
        }}
      />

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

      <BsCartCheckFill
        color="white"
        size={40}
        style={{ marginRight: "20px" }}
      />
    </div>
  );
};

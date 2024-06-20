import "./navbar.css";
import { BsCartCheckFill } from "react-icons/bs";

export const NavBar = () => {
  return (
    <div className="navbarContainer">
      <img
        src="https://res.cloudinary.com/dxeifza9d/image/upload/v1718915255/OIP.CgMsyL6oyplTAsvevl6g3QHaFm_nmozje.jpg"
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

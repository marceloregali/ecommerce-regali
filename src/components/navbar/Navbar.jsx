import "./navbar.css";
import { BsCartCheckFill } from "react-icons/bs";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
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
          <Button variant="outlined">Deportivas</Button>
        </li>
        <li style={{ listStyle: " none", color: "white", fontSize: "1.5rem" }}>
          <Button variant="outlined">Urbanas</Button>
        </li>
        <li style={{ listStyle: "none", color: "white", fontSize: "1.5rem" }}>
          <Button variant="outlined">Contacto</Button>
        </li>
      </ul>
      <div style={{ padding: "40px" }}></div>
      <TextField label="Email" variant="outlined" />
      <BsCartCheckFill
        color="white"
        size={40}
        style={{ marginRight: "20px" }}
      />
    </div>
  );
};

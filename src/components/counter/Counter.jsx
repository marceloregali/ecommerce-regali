import { Button } from "@mui/material";
import PropTypes from "prop-types";

export const Counter = ({ restar, contador, sumar, onAdd }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Button variant="conteined" onClick={restar}>
        Restar
      </Button>
      <h2>{contador}</h2>
      <Button variant="contained" onClick={sumar}>
        Sumar
      </Button>

      <Button variant="outlined" onClick={() => onAdd(contador)}>
        Agregar al carrito
      </Button>
    </div>
  );
};

Counter.propTypes = {
  sumar: PropTypes.object,
  restar: PropTypes.object,
  onAdd: PropTypes.func,
  contador: PropTypes.number,
};

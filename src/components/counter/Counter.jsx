import { Button } from "@mui/icons-material";

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

      <Button variant="outlined" onClick={onAdd}>
        Agregar al carrito
      </Button>
    </div>
  );
};

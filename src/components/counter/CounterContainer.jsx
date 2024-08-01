import { useState } from "react";
import { Counter } from "./Counter";
import PropTypes from "prop-types";

const CounterContainer = ({ onAdd, stock, initial = 1 }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("stock maximo");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("minimo");
    }
  };

  return (
    <Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd} />
  );
};

CounterContainer.propTypes = {
  stock: PropTypes.object,
  onAdd: PropTypes.func,
  initial: PropTypes.number,
};

export default CounterContainer;

import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const FetchData = () => {
  const [productos] = useState([]);
  useEffect(() => {
    const getProducts = fetch(" aca va la URL");

    getProducts
      .then((res) => res.json())

      .then((res) => console.log(res));
  }, []);
  return (
    <div>
      {productos.map((producto) => (
        <h1 key={producto.title}>{producto.title}</h1>
      ))}
    </div>
  );
};

FetchData.propTypes = {
  setProductos: PropTypes.element,
};

export default FetchData;

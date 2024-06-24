import { useEffect } from "react";
import { useState } from "react";

const FetchData = () => {
  const [productos, setProductos] = useState([]);
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

export default FetchData;

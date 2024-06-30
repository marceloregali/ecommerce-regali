import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../components/products";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    // Cambiar 'usesEffect' a 'useEffect' (error de ortografía)
    let product = products.find((product) => product.id === +id); // Cambiar 'product' a 'products' para buscar en el array 'products'
    if (product) {
      setItem(product);
    }
  }, [id]);
  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;

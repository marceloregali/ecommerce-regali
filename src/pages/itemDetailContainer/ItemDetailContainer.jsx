import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../components/products";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
const ItemDetailContainer = () => {
  //aca quiero mi contexto

  const { addToCart, getQuantityById } = useContext(CartContext);
  const { id } = useParams();

  const [item, setItem] = useState({});

  let initial = getQuantityById(+id); //retorna un numero

  useEffect(() => {
    let product = products.find((product) => product.id === +id);
    if (product) {
      setItem(product);
    }
  }, [id]);

  const onAdd = (quantity) => {
    //informacion del producto
    //cuantas unidades
    let objetoFinal = { ...item, quantity: quantity };
    addToCart(objetoFinal);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto Agregado",
      showConfirmButton: true,
      timer: 2000,
    });
  };

  return <ItemDetail item={item} onAdd={onAdd} initial={initial} />;
};

export default ItemDetailContainer;

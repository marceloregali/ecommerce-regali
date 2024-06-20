import ItemList from "./ItemList";
import { products } from "../../components/products";
import { useState } from "react";
import { useEffect } from "react";
const ItemListConteiner = () => {
  //una peticion que me traiga los productos del backend

  const [items, setItems] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        resolve(products);
      } else {
        reject({ message: "error", codigo: "404" });
      }
    });

    //manejar la promesa

    getProducts
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  console.log(items);
  return <ItemList items={items} />;
};

export default ItemListConteiner;

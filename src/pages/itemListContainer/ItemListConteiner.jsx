import ItemList from "./ItemList";
import { products } from "../../components/products";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";

const ItemListConteiner = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});
  const { name } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      let arrayFiltered = products.filter(
        (products) => products.category === name
      );
      if (x) {
        setTimeout(() => {
          resolve(name ? arrayFiltered : products);
        }, 2000);
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
  }, [name]);
  //if (items.lenght === 0) {
  //return <h1>Cargando...</h1>; //chequear
  // }
  //opcion 2 ///////////////
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {items.length === 0 ? (
        <HashLoader color="blue" size={90} />
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListConteiner;

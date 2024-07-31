import ItemList from "./ItemList";

import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListConteiner = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);

  //hacemos la peticion a firestone
  //me trae los producos
  //lo guardo en el estado

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = productsCollection;
    if (name) {
      consulta = query(productsCollection, where("category", "==", name));
    }

    let getProducts = getDocs(consulta);
    getProducts.then((res) => {
      let arrayValido = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(arrayValido);
    });
  }, [name]);

  {
    /*  const addProducts = () => {
    let productsCollection = collection(db, "products");
    products.forEach((elemento) => {
      addDoc(productsCollection, elemento);
    });
  };*/
  }

  //metodo de espera(ternario) //
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/*<Button variant="contained" onClick={addProducts}>
        Agregar Producto
      </Button>*/}
      {items.length === 0 ? (
        <HashLoader color="blue" size={90} />
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListConteiner;

//useEffect(() => {
//const getProducts = new Promise((resolve, reject) => {
//let x = true;
//let arrayFiltered = products.filter(
//(products) => products.category === name
//);
//if (x) {
//setTimeout(() => {
//resolve(name ? arrayFiltered : products);
//}, 2000);
//} else {
//reject({ message: "error", codigo: "404" });
//}
//});

//manejar la promesa

//getProducts
//.then((res) => {
//setItems(res);
//})
//.catch((error) => {
//setError(error);
//});
//}, [name]);
//if (items.lenght === 0) {
//return <h1>Cargando...</h1>; //chequear
// }
//opcion 2 ///////////////

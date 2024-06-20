import ItemList from "./ItemList";
import { products } from "../../products";
const ItemListConteiner = () => {
  //una peticion que me traiga los productos del backend
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
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });

  return <ItemList />;
};

export default ItemListConteiner;

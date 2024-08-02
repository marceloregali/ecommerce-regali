import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import "./Checkout.css";
import { TextField, Button } from "@mui/material";

const Checkout = () => {
  const navigate = useNavigate(); //devuelve una funcion

  const [user, setUser] = useState({ nombre: "", email: "", telefono: "" });
  const { cart, getTotalPrice, cleanCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(""); //truthy y falsy
  let total = getTotalPrice();
  const envioDeFormulario = (event) => {
    event.preventDefault();
    let order = {
      buyer: user,
      items: cart,
      total: total,
    };

    let ordersCollection = collection(db, "orders");
    let productCollection = collection(db, "products");
    cart.forEach((elemento) => {
      let refDoc = doc(productCollection, elemento.id);
      updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
    });

    addDoc(ordersCollection, order)
      .then((res) => {
        setOrderId(res.id);
        toast.success(`Gracias por su compra, su ticket es ${res.id}`);
      })
      .catch()
      .finally(() => {
        cleanCart();
        navigate("/");
      });
  };

  const capturarData = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h1> Formulario</h1>
      {orderId ? (
        <h2>Gracias por tu Compra, tu ticket es :{orderId} </h2>
      ) : (
        <form onSubmit={envioDeFormulario}>
          <TextField
            id="nombre"
            label="nombre"
            variant="outlined"
            placeholder="Ingresa tu Nombre"
            onChange={capturarData}
            name="Nombre"
          />
          <TextField
            id="Telefono"
            label="Telefono"
            variant="outlined"
            placeholder="Ingresa tu Telefono"
            onChange={capturarData}
            name="Telefono"
          />
          <TextField
            id="Email"
            label="Email"
            variant="outlined"
            placeholder="Ingresa tu Email"
            onChange={capturarData}
            name="Email"
          />

          <Button onClick={envioDeFormulario} variant="contained">
            Comprar
          </Button>
        </form>
      )}
    </div>
  );
};

export default Checkout;

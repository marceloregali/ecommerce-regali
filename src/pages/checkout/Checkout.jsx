import { useState } from "react";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  const envioDeFormulario = (event) => {
    event.preventDefault();
    console.log("se envio el formulario");
    console.log(nombre);
    console.log(email);
    console.log(telefono);
  };

  const capturarNombre = (event) => {
    setNombre(event.target.value);
  };
  const capturarEmail = (event) => {
    setEmail(event.target.value);
  };
  const capturarTelefono = (event) => {
    setTelefono(event.target.value);
  };

  const sumar = (a, b) => {
    console.log(a + b);
  };

  return (
    <div>
      <h1>Aca va el Formulario</h1>

      <form onSubmit={envioDeFormulario}>
        <input
          type="text"
          placeholder="Ingresa tu Nombre"
          onChange={capturarNombre}
          name="nombre"
        />
        <input
          type="text"
          placeholder="Ingresa tu Email"
          name="email"
          onChange={capturarEmail}
        />
        <input
          type="text"
          placeholder="Ingresa tu Telefono"
          name="telefono"
          onChange={capturarTelefono}
        />
        <button>Enviar</button>
        <button type="button">Cancelar</button>
      </form>

      <button onClick={() => sumar(10, 5)}>sumar</button>
    </div>
  );
};

export default Checkout;

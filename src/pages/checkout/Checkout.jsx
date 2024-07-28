import { useState } from "react";

const Checkout = () => {
  const [user, setUser] = useState({ nombre: "", email: "", telefono: "" });

  const [arrayCheckbox, setArrayCheckbox] = useState([]);
  console.log(arrayCheckbox);
  const envioDeFormulario = (event) => {
    event.preventDefault();
    console.log(user);
  };

  const capturarData = (event) => {
    //let { name, value } = event.target;
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  //aca el select--option
  const handleSelect = (e) => {
    console.log(e.target.value);
  };

  const handleRadio = (e) => {
    console.log(e.target.value);
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setArrayCheckbox([...arrayCheckbox, value]);
    } else {
      let newArr = arrayCheckbox.filter((el) => el !== value);
      setArrayCheckbox(newArr);
    }
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
          onChange={capturarData}
          name="nombre"
        />
        <input
          type="text"
          placeholder="Ingresa tu Email"
          name="email"
          onChange={capturarData}
        />
        <input
          type="text"
          placeholder="Ingresa tu Telefono"
          name="telefono"
          onChange={capturarData}
        />
        {/*SELECT*/}
        <select onChange={handleSelect}>
          <option label="uno" value={"one"} />
          <option label="dos" value={"two"} />
          <option label="tres" value={"tree"} />
        </select>
        {/*RADIO BUTTON*/}
        {/*name entidad (selecciono solo una opcion)*/}
        <label>Una Unidad</label>
        <input
          type="radio"
          name="entidad"
          onChange={handleRadio}
          value="avion"
        />
        <label>Dos Unidades</label>
        <input
          type="radio"
          name="entidad"
          onChange={handleRadio}
          value="avion"
        />

        {/*RADIO BUTTON*/}
        <label>Rojo</label>
        <input type="checkbox" value={"rojo"} onChange={handleCheckbox} />
        <label>Azul</label>
        <input type="checkbox" value={"azul"} onChange={handleCheckbox} />
        <label>Verde</label>
        <input type="checkbox" value={"verde"} onChange={handleCheckbox} />
        <label>Amarillo</label>
        <input type="checkbox" value={"amarillo"} onChange={handleCheckbox} />
        {/*botones*/}
        <button>Enviar</button>
        <button type="button">Cancelar</button>
      </form>

      <button onClick={() => sumar(10, 5)}>sumar</button>
    </div>
  );
};

export default Checkout;

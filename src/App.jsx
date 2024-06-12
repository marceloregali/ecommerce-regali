import { NavBar } from "./components/navbar/Navbar";
import ItemListConteiner from "./pages/itemListContainer/ItemListConteiner";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListConteiner greeting={"Primeros pasos React"} />
    </div>
  );
}

export default App;

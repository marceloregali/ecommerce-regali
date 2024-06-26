import Footer from "./components/footer/Footer";
import { NavBar } from "./components/navbar/Navbar";
import ItemListConteiner from "./pages/itemListContainer/ItemListConteiner";
//import ProbandoTResponsive from "./components/probandoResponsive/ProbandoResponsive";
function App() {
  return (
    <>
      <NavBar />
      <ItemListConteiner />
      <Footer />
    </>
  );
}

export default App;

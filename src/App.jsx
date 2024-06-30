import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListConteiner from "./pages/itemListContainer/ItemListConteiner";
import Cart from "./pages/cart/Cart";
import ItemDetailContainer from "./pages/itemDetailContainer/ItemDetailContainer";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListConteiner />} />
          <Route path="/category/:name" element={<ItemListConteiner />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/itemDetail/:id"
            element={<ItemDetailContainer />}
          ></Route>
        </Route>
        <Route path="*" element={<h1> 404 Not found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

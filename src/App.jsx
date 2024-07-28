import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListConteiner from "./pages/itemListContainer/ItemListConteiner";
import Cart from "./pages/cart/Cart";
import ItemDetailContainer from "./pages/itemDetailContainer/ItemDetailContainer";
import Layout from "./components/layout/Layout";
import Checkout from "./pages/checkout/Checkout";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListConteiner />} />
            <Route path="/category/:name" element={<ItemListConteiner />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/itemDetail/:id"
              element={<ItemDetailContainer />}
            ></Route>
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          <Route path="*" element={<h1> 404 Not found</h1>}></Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;

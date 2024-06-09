import Footer from "./components/footer/Footer";
import { NavBar } from "./components/navbar/Navbar";
import { Home } from "./pages/home/home";

function App() {
    return (  
        <div>
            <NavBar />
            <Home />
            <Footer />
        </div>
    );
}

export default App;

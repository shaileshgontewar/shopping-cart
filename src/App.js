import "./App.css";
import Header from "./component/Navbar/Header";
import Product from "./component/Product/product";
import Newsletter from "./component/NewLetter";
import Branding from "./component/Product/Branding";
import Footer from "./component/Footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Branding />
      <Product />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

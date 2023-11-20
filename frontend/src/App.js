import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Kitty from "./components/home/kitty";
import Footer from "./components/footer";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Kitty />
      <div className="contentwithshadow" style={{ marginTop: '50px', marginBottom: '80px' }}>
        <Home />
      </div>
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;


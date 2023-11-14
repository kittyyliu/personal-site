import Navbar from "./components/navbar";
import Home from "./components/home/home";
import Kitty from "./components/home/kitty";
import Footer from "./components/footer";
import About from "./components/about/about";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="contentwithshadow" style={{ marginTop: '50px', marginBottom: '80px' }}>
        <Home />
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default App;


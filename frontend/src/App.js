import Navbar from "./components/navbar";
import Home from "./components/home/home";
import Kitty from "./components/home/kitty";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Kitty/>
      <div className="contentwithshadow" style={{ marginTop: '50px' }}>
        <Home />
      </div>
    </div>
  );
}

export default App;


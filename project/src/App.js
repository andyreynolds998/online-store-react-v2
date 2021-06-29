import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import Catalog from "./components/catalog";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <h1> Yeehaw Fashion Center </h1>
      <button className="btn btn-primary"> Click me! </button>

      <Catalog></Catalog>

      <Footer></Footer>
    </div>
  );
}

export default App;

// inv react function components for homework and intro git track on team treehouse
// https://picsum.photos/200/300

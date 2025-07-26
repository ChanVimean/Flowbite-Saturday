import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>

      <main>
        <Home />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Test from "./pages/Test";

const App = () => {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>

      <main>
        {/* <Test /> */}
        <Home />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;

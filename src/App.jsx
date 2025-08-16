import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Test1 from "./pages/Test1";

const App = () => {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>

      <main>
        {/* <Test /> */}
        {/* <Home /> */}
        <Test1 name={"James"} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;

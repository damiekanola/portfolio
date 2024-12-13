import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <>
      <header className=" px-8 py-4 bg-red-400 h-[240px]">
        <Navbar />
        <Header />
      </header>
      <About />
    </>
  );
}

export default App;

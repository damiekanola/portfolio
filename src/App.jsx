import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <header className=" px-8 py-4 bg-gddefault min-h-[280px]">
        <Navbar />
        <Header />
      </header>
      <About />
      <Skills />
      <Contact />
    </>
  );
}

export default App;

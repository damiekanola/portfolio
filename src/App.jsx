import "./App.css";

import Herooo from "./components/Herooo";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/projects";


function App() {
  return (
    <>
    <main className=" bg-gddefault px-5">

      <Navbar />
  
      {/* <Header /> */}
      <Herooo />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
    </>
  );
}

export default App;

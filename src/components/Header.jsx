import Navbar from "./Navbar"
import Hero from "./Hero"

function Header() {
  return (
    <header className=" py-4 bg-gddefault" id="header">
        <Navbar />
        <Hero />
    </header>
  )
}

export default Header

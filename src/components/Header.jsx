import Navbar from "./Navbar"
import Hero from "./Hero"

function Header() {
  return (
    <header className=" px-8 py-4 bg-gddefault" id="header">
        <Navbar />
        <Hero />
    </header>
  )
}

export default Header

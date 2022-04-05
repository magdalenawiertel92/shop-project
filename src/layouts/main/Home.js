import React from "react"
import NavBar from "../main/NavBar"
import Slider from "../main/Slider"
import Media from "../main/Media"
import Collection from "../main/Collection"
import Bestsellers from "./Bestsellers"
import Sale from "../main/Sale"
import Brands from "../main/Brands"
import About from "../main/About"

const Home = () => {
  return (
    <>
      <header>
        <NavBar />
        <Slider />
      </header>
      <main>
        <Media />
        <Collection />
        <Bestsellers />
        <Sale />
        <Brands />
        <About />
      </main>
    </>
  )
}

export default Home

import React from "react"
import "../../styles/main/brands.scss"
import addict from "../../images/addict-logo.png"
import abandonship from "../../images/abandonship-logo.png"
import adidas from "../../images/adidas-logo.png"
import boylondon from "../../images/boylondon-logo.png"
import converse from "../../images/converse-logo.png"
import calvinklein from "../../images/calvinklein-logo.png"
import edwin from "../../images/edwin-logo.png"
import grenson from "../../images/grenson-logo.png"

const ForTablets = () => {
  return (
    <div className="brands">
      <img src={addict} alt="logo" />
      <img src={abandonship} alt="logo" />
      <img src={adidas} alt="logo" />
      <img src={boylondon} alt="logo" />
      <img src={converse} alt="logo" />
      <img src={calvinklein} alt="logo" />
    </div>
  )
}

const ForBigScreen = () => {
  return (
    <div className="brands">
      <img src={addict} alt="logo" />
      <img src={abandonship} alt="logo" />
      <img src={adidas} alt="logo" />
      <img src={boylondon} alt="logo" />
      <img src={converse} alt="logo" />
      <img src={calvinklein} alt="logo" />
      <img src={edwin} alt="logo" />
      <img src={grenson} alt="logo" />
    </div>
  )
}

const Brands = () => {
  const width = window.innerWidth
  return (
    <div className="brands-wrapper">
      <p className="text">favourite brands</p>
      {width > 1064 ? <ForBigScreen /> : <ForTablets />}
    </div>
  )
}

export default Brands

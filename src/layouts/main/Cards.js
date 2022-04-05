import React from "react"
import cards from "../../images/cards.png"
import "../../styles/main/cards.scss"

const Cards = () => {
  return (
    <div className="cards-wrapper">
      <p className="text">We accept</p>
      <img src={cards} alt="cards" />
    </div>
  )
}

export default Cards

import React from "react"
import "../../styles/main/collection.scss"

const Collection = () => {
  const handleShowProducts = () => {
    const productsStart = document.querySelector(".products-wrapper")
    productsStart.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div className="collection-wrapper">
      <div className="text-wrapper">
        <div className="text">
          <p className="best">best</p>
          <p className="outfits">outfits</p>
          <div className="and-container">
            <p className="and">&</p>
          </div>
          <p className="looks">looks</p>
        </div>
      </div>
      <div className="summer-wrapper">
        <div className="text-summer">
          <p className="summer">Summer</p>
          <p className="party">party</p>
          <p className="collection">collection</p>
        </div>
      </div>
      <div className="bestsellers">
        <div className="text-bestsellers" onClick={handleShowProducts}>
          <p>bestsellers</p>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
      <div className="fall">
        <div className="fall-text-content">
          <p className="fall-text">fall leather</p>
          <button onClick={handleShowProducts}>shop now</button>
        </div>
      </div>
    </div>
  )
}

export default Collection

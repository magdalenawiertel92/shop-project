import React from "react"
import "../../styles/product/productMedia.scss"

const ProductMedia = () => {
  return (
    <>
      <div className="icons-section">
        <div className="media">
          <a href="https://www.facebook.com/">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <p>share on facebook</p>
        </div>
        <div className="media">
          <a href="https://pl.pinterest.com/">
            <i className="fa-brands fa-pinterest"></i>
          </a>
          <p>pin this product</p>
        </div>
        <div className="media">
          <a href="https://twitter.com/">
            <i className="fab fa-twitter"></i>
          </a>
          <p>tweet this product</p>
        </div>
        <div className="media">
          <a href="https://www.google.com/intl/pl/gmail/about/policy/">
            {" "}
            <i className="fa-solid fa-envelope"></i>
          </a>
          <p>email a friend</p>
        </div>
      </div>
    </>
  )
}

export default ProductMedia

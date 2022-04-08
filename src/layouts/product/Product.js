import React from "react"
import "../../styles/product/product.scss"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../../reducer/actions/index"

const Product = () => {
  const navigate = useNavigate()
  const { productInfo, products } = useSelector(state => state)

  console.log(productInfo)

  const dispatch = useDispatch()

  const { add_to_cart } = bindActionCreators(actionCreators, dispatch)

  const handleAddToCart = (name, photo, price, basePrice, path) => {
    const cart = document.querySelector(".cart-wrapper")
    cart.classList.add("added")
    setTimeout(() => {
      cart.classList.remove("added")
    }, 1000)
    add_to_cart(name, products.currencySign, photo, price, basePrice, path)
  }
  return (
    <div className="product-container">
      <div className="images">
        <div className="big-image">
          <img src={productInfo.image} alt="product" className="bigPicture" />
        </div>
      </div>
      <div className="about-product-container">
        <div className="return">
          <i className="fa-solid fa-chevron-left"></i>
          <div>
            Back to <p onClick={() => navigate("/clothes")}>Women's Clothing</p>
          </div>
        </div>
        <div className="product-text-wrapper">
          <div className="product-name">{productInfo.name}</div>
          <div className="product-price">
            <p className="price">
              {products.currencySign}
              {(productInfo.price * products.ratio).toFixed(2)}
            </p>
          </div>
          <div className="product-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eius
            cupiditate, beatae itaque laboriosam soluta commodi, dolores
            explicabo deleniti harum fugit asperiores nobis quos enim a officia
            magni nemo impedit? Esse eum magnam laudantium magni vitae
            voluptatum aut unde consequuntur dolorem possimus quibusdam minima
            est maxime eaque tenetur sed distinctio, quae cupiditate dicta in
            amet sint totam! Suscipit, delectus alias. Ex necessitatibus
            impedit, soluta, temporibus aut cupiditate placeat quae sapiente
            expedita natus porro!
          </div>
          <div className="choose-size">
            <p> Select size</p>
            <div className="custom-select">
              <select name="options">
                <option value="extra small">XS</option>
                <option value="small">S</option>
                <option value="medium">M</option>
                <option value="large">L</option>
                <option value="extra large">XL</option>
                <option value="double extra large">XXL</option>
              </select>
            </div>
          </div>
          <div className="buttons">
            <button
              onClick={() => {
                handleAddToCart(
                  productInfo.name,
                  productInfo.image,
                  productInfo.price,
                  (productInfo.price * products.ratio).toFixed(2),
                  productInfo.path
                )
              }}
            >
              add to cart
              <p>+</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product

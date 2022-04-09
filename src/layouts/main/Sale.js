import React, { useState } from "react"
import circle from "../../images/sale-circle.png"
import "../../styles/main/products.scss"
import "../../styles/main/sale.scss"
import { useSelector } from "react-redux"
import productListForSale from "../../static/productListForSale"
import { bindActionCreators } from "redux"
import { actionCreators } from "../../reducer/actions/index"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"

const Clearance = () => {
  const products = useSelector(state => state.products)

  const dispatch = useDispatch()

  const { add_to_cart, get_product_info } = bindActionCreators(
    actionCreators,
    dispatch
  )

  const handleAddToCart = (name, photo, price, basePrice, path) => {
    const cart = document.querySelector(".cart-wrapper")
    cart.classList.add("added")
    setTimeout(() => {
      cart.classList.remove("added")
    }, 1000)
    add_to_cart(name, products.currencySign, photo, price, basePrice, path)
  }

  const handleSetProductInfo = (name, price, image, path) => {
    get_product_info(name, price, image, path)
    const userBar = document.querySelector(".user-bar-wrapper")
    userBar.scrollIntoView()
  }

  const [productStatus, setProductStatus] = useState(productListForSale)

  let [numberOfClicks, setNumberOfClicks] = useState(1)

  const handleLoad = () => {
    const products = { ...productStatus }
    setNumberOfClicks(numberOfClicks + 1)
    switch (numberOfClicks) {
      case 1:
        products[numberOfClicks].active = !products[numberOfClicks].active
        break
      case 2:
        products[numberOfClicks].active = !products[numberOfClicks].active
        break
      case 3:
        products[numberOfClicks].active = !products[numberOfClicks].active
        break
      default:
        break
    }
    setProductStatus(products)
  }

  const items = productListForSale.map((slide, index) => {
    const price = products.bestsellersPrices[slide.id]
      ? products.bestsellersPrices[slide.id].toFixed(2)
      : products.baseBestsellersPrices[slide.id].toFixed(2)
    return (
      <div
        className={
          productStatus[index].active ? "product active" : "product hidden"
        }
        key={slide.id}
      >
        <div className="image">
          <NavLink to={slide.path}>
            <div
              className="shop-it"
              onClick={() => {
                handleSetProductInfo(slide.name, price, slide.image, slide.path)
              }}
            >
              <i className="fas fa-shopping-bag"></i>
              <p className="shop">show product</p>
            </div>
          </NavLink>
          <img src={slide.image} alt="product" />
        </div>
        <div className="product-info">
          <p className="name">{slide.name}</p>
          <p className="price">
            {products.currencySign}
            {price}
          </p>
          <button
            onClick={() => {
              handleAddToCart(
                slide.name,
                slide.image,
                products.baseBestsellersPrices[slide.id],
                price,
                slide.path
              )
            }}
          >
            add to cart
            <p>+</p>
          </button>
        </div>
      </div>
    )
  })
  return (
    <div className="clearance-wrapper">
      <div className="clearance-sign">
        <img src={circle} alt="sign" />
        <div className="text">
          <div className="line1">
            <p className="text1">clearance</p>
          </div>
          <div className="line2">
            <p className="text2">50</p>
            <p className="text3">%</p>
            <p className="text4">off</p>
          </div>
        </div>
      </div>
      <div className="products-container">
        <div className="products">{items}</div>
        {numberOfClicks > 3 ? null : (
          <button className="load" onClick={handleLoad}>
            load more
          </button>
        )}
      </div>
    </div>
  )
}

export default Clearance

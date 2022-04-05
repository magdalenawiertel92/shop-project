import React, { useState } from "react"
import bestsellersProductList from "../../static/bestsellersProductList"
import "../../styles/main/products.scss"
import Carousel from "react-elastic-carousel"
import { useSelector, useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { bindActionCreators } from "redux"
import { actionCreators } from "../../reducer/actions/index"
import bestsellersMenu from "../../static/bestsellersMenu"

const Bestsellers = () => {
  const { products } = useSelector(state => state)

  const dispatch = useDispatch()

  const { add_to_cart, get_product_info } = bindActionCreators(
    actionCreators,
    dispatch
  )

  const handleAddToCart = (name, photo, price, basePrice, path) => {
    const cart = document.querySelector(".cart")
    cart.scrollIntoView({ behavior: "smooth" })
    add_to_cart(name, products.currencySign, photo, price, basePrice, path)
  }

  const [bestesellersRandomList, setBestsellersRandomList] = useState(
    bestsellersProductList
  )

  const handleSetProductInfo = (name, price, image, path) => {
    get_product_info(name, price, image, path)
  }

  const [productStatus, setProductStatus] = useState(bestsellersProductList)
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
      case 4:
        products[numberOfClicks].active = !products[numberOfClicks].active
        break
      case 5:
        products[numberOfClicks].active = !products[numberOfClicks].active
        break
      case 6:
        products[numberOfClicks].active = !products[numberOfClicks].active
        break
      default:
        break
    }
    setProductStatus(products)
  }

  const items = bestesellersRandomList.map((slide, index) => {
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

  const [name, setName] = useState(`what's hot?`)

  const [isOpen, setIsOpen] = useState(false)

  const handleShowInRandomOrder = name => {
    setBestsellersRandomList([
      ...bestesellersRandomList.sort(() => Math.random() - 0.5),
    ])
    setName(name)
    if (!isOpen) {
      setIsOpen(prevValue => !prevValue)
    } else {
      setIsOpen(prevValue => !prevValue)
    }
    const list = document.querySelectorAll(".name")

    list.forEach(item => {
      item.classList.add("active")
    })
  }

  const [productsToShow, setProductToShow] = useState(6)

  const itemsToShow = () => {
    if (window.innerWidth >= 1500) {
      setProductToShow(6)
    } else if (window.innerWidth >= 1200) {
      setProductToShow(5)
    } else if (window.innerWidth >= 1064) {
      setProductToShow(4)
    } else if (window.innerWidth >= 768) {
      setProductToShow(3)
    }
  }

  const handleOnClick = () => {
    if (!isOpen) {
      setIsOpen(prevValue => !prevValue)
    } else {
      setIsOpen(prevValue => !prevValue)
    }
    const list = document.querySelectorAll(".name")

    list.forEach(item => {
      item.classList.add("active")
    })
  }

  const innerNav = bestsellersMenu.map((item, index) => (
    <li
      className={isOpen ? "name active" : "name"}
      key={index}
      onClick={() => {
        handleShowInRandomOrder(item.name.toUpperCase())
      }}
    >
      {item.name}
    </li>
  ))

  return (
    <div className="products-wrapper">
      <nav className="products-menu">
        <ul className="bestellers-menu">
          {isOpen ? null : <p>{name.toUpperCase()}</p>}
          {innerNav}
        </ul>
        <div className="dropdown-menu" onClick={handleOnClick}>
          <i className="fa-solid fa-angle-down"></i>
        </div>
      </nav>
      <div className="products-container">
        <div className="inner-wrapper">
          <Carousel onResize={itemsToShow} itemsToShow={productsToShow}>
            {items}
          </Carousel>
        </div>
      </div>
      <div className="products-container small">
        <div className="products">{items}</div>
        {numberOfClicks > 6 ? null : (
          <button className="load" onClick={handleLoad}>
            load more
          </button>
        )}
      </div>
    </div>
  )
}

export default Bestsellers

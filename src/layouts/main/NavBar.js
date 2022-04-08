import React, { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import navItems from "../../static/navItems"
import "../../styles/main/navBar.scss"
import logo from "../../images/logo.png"
import innerNavItems from "../../static/innerNavItems"
import { bindActionCreators } from "redux"
import { actionCreators } from "../../reducer/actions/index"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState(navItems)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const { remove_from_cart, get_product_info } = bindActionCreators(
    actionCreators,
    dispatch
  )

  const { cart, products } = useSelector(state => state)

  const showInnerMenu = id => {
    const navNames = { ...active }
    navNames[id].expanded = !navNames[id].expanded
    setActive(navNames)
  }

  const handleOnClick = () => {
    if (!isOpen) {
      setIsOpen(prevValue => !prevValue)
    } else {
      setIsOpen(prevValue => !prevValue)
    }
    document.querySelector(".mainNav").classList.toggle("active")
  }

  const handleShowProductsInCart = () => {
    const products = document.querySelectorAll(".product-in-cart")
    products.forEach(product => {
      product.classList.toggle("active")
    })
  }

  const handleRemoveFromCart = (id, product, photo, price) => {
    remove_from_cart(id, product, photo, price)
  }

  const handleSetProductInfo = (name, price, image, path) => {
    get_product_info(name, price, image, path)
  }

  const itemsInCart = cart.products.map((item, index) => (
    <li
      key={index}
      id={index}
      className="product-in-cart"
      style={
        index === 0
          ? { bottom: ` -${(index + 1) * 105}px` }
          : { bottom: ` -${(index + 1) * 70 + 35}px` }
      }
      onClick={() => {
        handleSetProductInfo(
          item,
          cart.calculatedPrice[index],
          cart.photos[index],
          cart.paths[index]
        )
      }}
    >
      <NavLink to={cart.paths[index]}>
        <img src={cart.photos[index]} alt="mini-product" />
      </NavLink>

      <NavLink
        to={cart.paths[index]}
        style={{ textDecoration: "none", color: "rgb(148, 147, 147)" }}
      >
        <p className="productInCart">{item}</p>
      </NavLink>
      <p>
        {products.currencySign}
        {cart.calculatedPrice[index]}
      </p>
      <button
        onClick={e => {
          e.stopPropagation()
          handleRemoveFromCart(
            index,
            cart.products[index],
            cart.photos[index],
            cart.calculatedPrice[index]
          )
        }}
      >
        X
      </button>
    </li>
  ))

  const innerNav = innerNavItems.map((item, index) => (
    <p className="category-name" key={index}>
      <NavLink to={item.path}>{item.name}</NavLink>
    </p>
  ))

  const width = window.innerWidth

  const menu = navItems.map((item, index) => (
    <li
      key={index}
      onClick={() => {
        showInnerMenu(index)
      }}
    >
      <p className="name"> {item.name}</p>
      <div className={item.expanded ? "inner-nav expanded" : "inner-nav"}>
        <div className="categories">{innerNav}</div>
      </div>
      {width > 768 ? null : <p className="sign">{item.expanded ? "-" : "+"}</p>}
    </li>
  ))

  return (
    <div className="outer-nav-wrapper">
      {width > 1064 ? (
        <div className="nav-wrapper">
          <div className="logo">
            <img
              src={logo}
              alt="logo"
              onClick={() => {
                navigate("/")
              }}
            />
          </div>
          <nav>
            <div className="hamburger">
              <div>MENU</div>
              <div
                onClick={handleOnClick}
                className={isOpen ? "menu-btn-open" : "menu-btn"}
              >
                <div className="menu-btn-burger"></div>
              </div>
            </div>
            <ul className="mainNav">{menu}</ul>
          </nav>
          <div className="cart">
            {cart.products.length ? (
              <ul className="items-in-cart" onClick={handleShowProductsInCart}>
                Your cart
                {itemsInCart}
              </ul>
            ) : (
              <div className="items-in-cart-empty">Your cart is empty</div>
            )}
            <div
              className={cart.numberOfItems ? "calculate added" : "calculate"}
            >
              <p>{cart.numberOfItems} ITEMS</p>
              <p>
                {products.currencySign}
                {cart.value.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="nav-wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="cart">
            <ul className="items-in-cart" onClick={handleShowProductsInCart}>
              Your cart
              {itemsInCart}
            </ul>
            <div className="calculate">
              <p>{cart.numberOfItems} ITEMS</p>
              <p>
                {products.currencySign}
                {cart.value.toFixed(2)}
              </p>
            </div>
          </div>
          <nav>
            <div className="hamburger">
              <div>MENU</div>
              <div
                onClick={handleOnClick}
                className={isOpen ? "menu-btn-open" : "menu-btn"}
              >
                <div className="menu-btn-burger"></div>
              </div>
            </div>
            <ul className="mainNav">{menu}</ul>
          </nav>
        </div>
      )}
    </div>
  )
}

export default NavBar

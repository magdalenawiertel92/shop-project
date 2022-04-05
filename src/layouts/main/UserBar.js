import React, { useState } from "react"
import "../../styles/main/userBar.scss"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../../reducer/actions"
import { NavLink } from "react-router-dom"
import bestsellersProductList from "../../static/bestsellersProductList"

const UserBar = () => {
  const { products, email, cart } = useSelector(state => state)

  const dispatch = useDispatch()

  const { calculate_value, calculate_cart_value } = bindActionCreators(
    actionCreators,
    dispatch
  )

  const handleChangeCurrency = e => {
    products.currency = e.target.value
    if (products.currency === "usDollar") {
      products.ratio = 1
      products.currencySign = "$"
    } else if (products.currency === "pound") {
      products.ratio = 1.3012
      products.currencySign = "£"
    } else if (products.currency === "euro") {
      products.ratio = 1.153
      products.currencySign = "€"
    }
    products.bestsellersPrices = products.baseBestsellersPrices.map(
      price => (price * products.ratio).toFixed(2) * 1
    )
    products.productsPrices = products.baseProductsPrices.map(
      price => (price * products.ratio).toFixed(2) * 1
    )
    products.productsOnSalePrices = products.baseProductsOnSalePrices.map(
      price => (price * products.ratio).toFixed(2) * 1
    )
    products.featuredProductsPrices = products.baseFeaturedProductsPrices.map(
      price => (price * products.ratio).toFixed(2) * 1
    )

    calculate_value(
      products.currency,
      products.ratio,
      products.bestsellersPrices,
      products.productsPrices,
      products.productsOnSalePrices,
      products.featuredProductsPrices,
      products.currencySign
    )

    if (cart.numberOfItems) {
      const newPricesInCart = cart.price.map(
        price => (price * products.ratio).toFixed(2) * 1
      )

      let startValue = 0

      const value = newPricesInCart.map(price => (startValue += price))
      calculate_cart_value(newPricesInCart, value[value.length - 1])
    }
  }

  const [activeSearch, setActiveSearch] = useState(false)

  const [search, setSearch] = useState("")

  const handleChange = e => {
    const inputValue = e.target.value
    setSearch(inputValue)
  }

  const handleSubmit = e => {
    e.preventDefault()
    document.querySelector(".search-icon").classList.toggle("active")
    document.querySelector(".account").classList.toggle("small")

    setActiveSearch(true)
    if (activeSearch) {
      setActiveSearch(false)
      setSearch("")
    }
  }

  const searchedProducts = bestsellersProductList
    .filter(product => product.name.toLowerCase().includes(search))
    .map((slide, index) => {
      return (
        <NavLink to={slide.path} style={{ textDecoration: "none" }} key={index}>
          <div
            className="product-info-list"
            style={{ bottom: ` -${(index + 1) * 30}px` }}
          >
            <p className="name">{slide.name}</p>
            <p className="price">
              {products.currencySign}
              {products.baseBestsellersPrices[slide.id].toFixed(2)}
            </p>
          </div>
        </NavLink>
      )
    })

  return (
    <div className="user-bar-wrapper">
      <div className="user-bar">
        <div className="custom-care">
          <p>CUSTOM CARE: 888-23-4567</p>
        </div>

        <div className="user-account">
          <div className="custom-select">
            <select id="currency" onChange={handleChangeCurrency}>
              <option value="usDollar">$ US</option>
              <option value="euro">€ EURO</option>
              <option value="pound">£ POUNDS</option>
            </select>
          </div>
          <NavLink
            to={email ? "logOut" : "signInForm"}
            style={{ textDecoration: "none" }}
            className="account"
          >
            <div className="user-section">
              {activeSearch ? <p></p> : <p>{email ? email : "MY ACCOUNT"}</p>}
            </div>
          </NavLink>
          <form className="search-icon" onSubmit={handleSubmit}>
            <input
              type="text"
              className="search"
              name="serch"
              value={search}
              onChange={handleChange}
            />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
            {search !== "" ? searchedProducts : null}
          </form>
        </div>
      </div>
    </div>
  )
}

export default UserBar

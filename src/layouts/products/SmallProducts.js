import React, { useState } from "react"
import navItems from "../../static/navItems"
import innerNavItems from "../../static/innerNavItems"
import productsOnSale from "../../static/productsOnSale"
import featuredProducts from "../../static/featuredProducts"
import "../../styles/products/smallProducts.scss"
import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../../reducer/actions"

const SmallProducts = () => {
  const { products } = useSelector(state => state)
  const [active, setActive] = useState(navItems)

  const dispatch = useDispatch()

  const { price_range, show_products_list, get_product_info } =
    bindActionCreators(actionCreators, dispatch)

  const showInnerMenu = id => {
    const navNames = { ...active }
    navNames[id].expanded = !navNames[id].expanded
    setActive(navNames)
  }

  const handleSetProductInfo = (name, price, image) => {
    get_product_info(name, price, image)
  }

  const innerNav = innerNavItems.map((item, index) => (
    <div className="category-name" key={index}>
      <NavLink to={item.path}>{item.name}</NavLink>
    </div>
  ))

  const menu = navItems.map((item, index) => (
    <li
      key={index}
      onClick={() => {
        showInnerMenu(index)
      }}
    >
      {item.name}
      <div
        className={
          item.expanded ? "inner-nav-small expanded" : "inner-nav-small"
        }
      >
        <div className="categories">{innerNav}</div>
      </div>
      <p className="sign">{item.expanded ? "-" : "+"}</p>
    </li>
  ))

  const smallItems = productsOnSale.map((slide, index) => {
    const price = products.productsOnSalePrices[slide.id]
      ? products.productsOnSalePrices[slide.id].toFixed(2)
      : products.baseProductsOnSalePrices[slide.id].toFixed(2)
    return (
      <NavLink to={slide.path} style={{ textDecoration: "none" }} key={index}>
        <div
          className="small-product"
          onClick={() => {
            handleSetProductInfo(slide.name, price, slide.image)
          }}
        >
          <div className="image">
            <img src={slide.image} alt="product" />
          </div>
          <div className="product-info">
            <p className="name">{slide.name}</p>
            <p className="price">
              {products.currencySign}
              {price}
            </p>
          </div>
        </div>
      </NavLink>
    )
  })

  const featured = featuredProducts.map((slide, index) => {
    const price = products.featuredProductsPrices[slide.id]
      ? products.featuredProductsPrices[slide.id].toFixed(2)
      : products.baseFeaturedProductsPrices[slide.id].toFixed(2)
    return (
      <NavLink to={slide.path} style={{ textDecoration: "none" }} key={index}>
        <div
          className="small-product"
          onClick={() => {
            handleSetProductInfo(slide.name, price, slide.image)
          }}
        >
          <div className="image">
            <img src={slide.image} alt="product" />
          </div>
          <div className="product-info">
            <p className="name">{slide.name}</p>
            <p className="price">
              {products.currencySign}
              {price}
            </p>
          </div>
        </div>
      </NavLink>
    )
  })

  const [firstPrice, setFirstPrice] = useState(0)
  const [secondPrice, setSecondPrice] = useState(0)

  const changeFirstValue = e => {
    setFirstPrice(e.target.value)
  }

  const changeSecondValue = e => {
    setSecondPrice(e.target.value)
  }

  const prices = products.productsPrices.length
    ? products.productsPrices
    : products.baseProductsPrices

  let filteredPricesIndexes = prices.map((price, index) =>
    price >= firstPrice && price <= secondPrice ? index : undefined
  )

  const showFilteredProducts = () => {
    setFirstPrice("")
    setSecondPrice("")
    price_range(firstPrice, secondPrice, filteredPricesIndexes)
    show_products_list(filteredPricesIndexes)
  }

  const handleSizeClick = e => {
    const button = e.target
    const allButtons = [...document.querySelectorAll(".size")]
    allButtons.map(button => button.classList.remove("choosen"))
    button.classList.add("choosen")
  }

  return (
    <aside>
      <div className="menu-filter-container">
        <p className="category-title">categories</p>
        <div className="categories">
          <ul className="categories-wrapper">{menu}</ul>
        </div>
        <div className="price-size-wrapper">
          {" "}
          <div className="price-filter">
            <p>price</p>
            <div className="price-set">
              from
              <input
                type="number"
                onChange={changeFirstValue}
                value={firstPrice}
              />
              {products.currencySign} to
              <input
                type="number"
                onChange={changeSecondValue}
                value={secondPrice}
              />
              {products.currencySign}
            </div>
            <button className="filter-price" onClick={showFilteredProducts}>
              filter
            </button>
          </div>
          <div className="size-filter">
            <p>select your size</p>
            <div className="sizes">
              <button className=" size choosen" onClick={handleSizeClick}>
                XS
              </button>
              <button className="size" onClick={handleSizeClick}>
                S
              </button>
              <button className="size" onClick={handleSizeClick}>
                M
              </button>
              <button className="size" onClick={handleSizeClick}>
                L
              </button>
              <button className="size" onClick={handleSizeClick}>
                XL
              </button>
              <button className="size" onClick={handleSizeClick}>
                XXL
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="on-sale-container">
        <p className="category-title">on sale</p>
        <div className="small-products-container"> {smallItems}</div>
      </div>
      <div className="featured-products-container">
        <p className="category-title">featured products</p>
        <div className="small-products-container"> {featured}</div>
      </div>
    </aside>
  )
}

export default SmallProducts

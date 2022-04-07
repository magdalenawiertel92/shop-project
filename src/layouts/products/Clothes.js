import React from "react"
import { NavLink } from "react-router-dom"
import "../../styles/products/clothes.scss"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../../reducer/actions/index"

const Clothes = () => {
  const { products } = useSelector(state => state)

  const dispatch = useDispatch()

  const {
    add_to_cart,
    sort_products_by_date,
    sort_products_by_highest_price,
    sort_products_by_lowest_price,
    get_product_info,
  } = bindActionCreators(actionCreators, dispatch)

  const handleAddToCart = (name, photo, price, basePrice, path) => {
    const cart = document.querySelector(".cart")
    cart.scrollIntoView({ behavior: "smooth" })
    add_to_cart(name, products.currencySign, photo, price, basePrice, path)
  }

  const handleSort = e => {
    const type = e.target.value
    switch (type) {
      case "date":
        sort_products_by_date(
          products.productsList.map(product => product.date)
        )
        break
      case "lowestPrice":
        sort_products_by_lowest_price(products.productsPrices)
        break
      case "highestPrice":
        sort_products_by_highest_price(products.productsPrices)
        break
      default:
        break
    }
  }

  const handleSetProductInfo = (name, price, image, path) => {
    get_product_info(name, price, image, path)
  }

  const items = products.productsList.map(slide => {
    const price = products.productsPrices[slide.id]
      ? products.productsPrices[slide.id].toFixed(2)
      : products.baseProductsPrices[slide.id].toFixed(2)
    return (
      <div className="product" key={slide.id}>
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
                products.baseProductsPrices[slide.id],
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
    <div className="products-container">
      <div className="filter-container">
        <div className="filter">
          <p className="sort">Sort by</p>
          <div className="custom-select">
            <select name="options" onChange={handleSort}>
              <option value="date">Date</option>
              <option value="lowestPrice">Lowest price</option>
              <option value="highestPrice">Highest price</option>
            </select>
          </div>
        </div>
        <div className="number-of-items">
          <p className="pages">
            Showing 1-{products.productsList.length} of{" "}
            {products.productsList.length}
          </p>
          <button className="page active" id="0">
            1
          </button>
        </div>
      </div>
      <div className="products-inner">{items}</div>
      <div className="number-of-items">
        <p className="pages">
          Showing 1-{products.productsList.length} of{" "}
          {products.productsList.length}
        </p>
        <button className="page2 active" id="0">
          1
        </button>
      </div>
    </div>
  )
}

export default Clothes

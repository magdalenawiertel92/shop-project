import React, { useEffect, useState } from "react"
import { Swiper } from "swiper"
import SwiperCore, { Navigation, Pagination } from "swiper"
import "swiper/swiper-bundle.css"
import "../../styles/products/productsSlider.scss"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../../reducer/actions/index"
import bestsellersProductList from "../../static/bestsellersProductList"

SwiperCore.use([Navigation, Pagination])

const Baner = ({ activeSlide }) => {
  const { products } = useSelector(state => state)
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
  const price = products.bestsellersPrices[
    bestsellersProductList[activeSlide].id
  ]
    ? products.bestsellersPrices[bestsellersProductList[activeSlide].id]
    : products.baseBestsellersPrices[bestsellersProductList[activeSlide].id]
  return (
    <div className="products-baner-wrapper">
      <div
        className="products-header"
        key={bestsellersProductList[activeSlide]}
      >
        <div className="products-image">
          <img src={bestsellersProductList[activeSlide].image} alt="product" />
        </div>
        <div className="products-text-wrapper">
          <div className="product-name">
            {bestsellersProductList[activeSlide].name}
          </div>
          <div className="product-price">
            {products.currencySign}
            {price}
          </div>
          <div className="product-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatem, ratione consequuntur magni nemo rerum cupiditate. Cum
            iusto dolorum autem animi incidunt nobis? Dicta vel aliquid
            inventore assumenda numquam, rerum tenetur.
          </div>
          <button
            onClick={() => {
              handleAddToCart(
                bestsellersProductList[activeSlide].name,
                bestsellersProductList[activeSlide].image,
                products.baseBestsellersPrices[
                  bestsellersProductList[activeSlide].id
                ],
                price,
                bestsellersProductList[activeSlide].path
              )
            }}
          >
            add to cart
            <p>+</p>
          </button>
        </div>
      </div>
    </div>
  )
}

const ProductsSlider = () => {
  useEffect(() => {
    new Swiper(".slider2", {
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination2",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    })
  }, [])

  const [activeSlide, setActiveSlide] = useState(0)

  const handleChangeActiveSlideNext = () => {
    if (activeSlide <= 6) {
      setActiveSlide(activeSlide + 1)
    }
  }

  const handleChangeActiveSlidePrev = () => {
    if (activeSlide >= 0) {
      setActiveSlide(activeSlide - 1)
    }
  }

  return (
    <div className="swiper slider2">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          {<Baner activeSlide={activeSlide} />}
        </div>
        <div className="swiper-slide">
          {<Baner activeSlide={activeSlide} />}
        </div>
        <div className="swiper-slide">
          {<Baner activeSlide={activeSlide} />}
        </div>
        <div className="swiper-slide">
          {<Baner activeSlide={activeSlide} />}
        </div>
        <div className="swiper-slide">
          {<Baner activeSlide={activeSlide} />}
        </div>
        <div className="swiper-slide">
          {<Baner activeSlide={activeSlide} />}
        </div>
        <div className="swiper-slide">
          {<Baner activeSlide={activeSlide} />}
        </div>
      </div>
      <div className="swiper-pagination swiper-pagination2"></div>
      <div className="back">
        <div
          className="swiper-button-prev"
          onClick={handleChangeActiveSlidePrev}
        ></div>
      </div>
      <div className="next">
        <div
          className="swiper-button-next"
          onClick={handleChangeActiveSlideNext}
        ></div>
      </div>
    </div>
  )
}

export default ProductsSlider

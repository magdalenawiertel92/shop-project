import React, { useEffect } from "react"
import { Swiper } from "swiper"
import SwiperCore, { Navigation, Pagination } from "swiper"
import "swiper/swiper-bundle.css"
import "../../styles/main/slider.scss"
import crazySummer from "../../images/crazy-summer-image.png"

SwiperCore.use([Navigation, Pagination])

const Baner = () => {
  const handleShowProducts = () => {
    const productsStart = document.querySelector(".products-wrapper")
    productsStart.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div className="baner-wrapper">
      <div className="header">
        <div className="text-wrapper">
          <div className="crazy">Crazy</div>
          <div className="crazy-summer">
            <img src={crazySummer} alt="baner" />
          </div>
          <div className="collection">woman collection</div>
          <button onClick={handleShowProducts}>shop now</button>
        </div>
      </div>
    </div>
  )
}

const Slider = () => {
  useEffect(() => {
    new Swiper(".slider1", {
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination1",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    })
  }, [])

  return (
    <div className="swiper slider1">
      <div className="swiper-wrapper">
        <div className="swiper-slide">{<Baner />}</div>
        <div className="swiper-slide">{<Baner />}</div>
        <div className="swiper-slide">{<Baner />}</div>
      </div>
      <div className="swiper-pagination swiper-pagination1"></div>
      <div className="back">
        <div className="swiper-button-prev"></div>
      </div>
      <div className="next">
        <div className="swiper-button-next"></div>
      </div>
    </div>
  )
}

export default Slider

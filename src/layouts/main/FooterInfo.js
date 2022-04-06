import React from "react"
import "../../styles/main/footerInfo.scss"
import footer from "../../images/footer-sign.png"

const FooterInfo = () => {
  const scrollToStart = () => {
    const userBar = document.querySelector(".user-bar-wrapper")
    userBar.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="footer-info-wrapper">
      <div className="contain">
        <div className="text">
          <div className="text-only">
            <div className="name">
              <p className="big-text">Customer Service</p>
              <p className="small-text" onClick={scrollToStart}>
                Contact
              </p>

              <p className="small-text" onClick={scrollToStart}>
                FAQ
              </p>
              <p className="small-text" onClick={scrollToStart}>
                Terms of payment
              </p>
              <p className="small-text" onClick={scrollToStart}>
                Terms of sale
              </p>
              <p className="small-text" onClick={scrollToStart}>
                Delivery terms and conditions
              </p>
              <p className="small-text" onClick={scrollToStart}>
                Returns and Refunds
              </p>
            </div>
            <div className="name">
              <p className="big-text">Information</p>
              <p className="small-text" onClick={scrollToStart}>
                Affiliate
              </p>
              <p className="small-text" onClick={scrollToStart}>
                Cookies
              </p>
              <p className="small-text" onClick={scrollToStart}>
                How to Shop
              </p>
              <p className="small-text" onClick={scrollToStart}>
                About Nelly
              </p>
              <p className="small-text" onClick={scrollToStart}>
                Investor relations
              </p>
            </div>
            <div className="name">
              <p className="big-text">Campaigns</p>
              <p className="small-text" onClick={scrollToStart}>
                Evening dresses
              </p>
              <p className="small-text" onClick={scrollToStart}>
                Makeup
              </p>
              <p className="small-text" onClick={scrollToStart}>
                Fashion forward
              </p>
              <p className="small-text" onClick={scrollToStart}>
                Training clothes
              </p>
              <p className="small-text" onClick={scrollToStart}>
                Special Occasion Dresses
              </p>
            </div>
            <div className="name">
              <p className="big-text">Stores</p>
              <p className="small-text" onClick={scrollToStart}>
                Paris
              </p>
              <p className="small-text" onClick={scrollToStart}>
                New York
              </p>
              <p className="small-text" onClick={scrollToStart}>
                London
              </p>
              <p className="small-text" onClick={scrollToStart}>
                Madrid
              </p>
              <p className="small-text" onClick={scrollToStart}>
                Tokio
              </p>
            </div>
          </div>
          <div className="name-logos">
            <p className="big-text">Media</p>
            <div className="logos">
              <div className="logo">
                <a href="https://twitter.com/">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
              <div className="logo">
                <a href="https://pl.pinterest.com/">
                  <i className="fab fa-pinterest"></i>
                </a>
              </div>
              <div className="logo">
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
              <div className="logo">
                <a href="https://www.google.com/">
                  <i className="fab fa-google-plus-g"></i>
                </a>
              </div>
              <div className="logo">
                <a href="https://www.tumblr.com/">
                  <i className="fab fa-tumblr"></i>
                </a>
              </div>
              <div className="logo">
                <a href="https://vimeo.com/">
                  <i className="fab fa-vimeo-v"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="sign">
          <div className="image">
            <img src={footer} alt="100% secured sign" />
            <p>100%</p>
            <p>secured</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterInfo

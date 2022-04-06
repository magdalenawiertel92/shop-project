import React from "react"
import "../../styles/main/footerInfo.scss"
import footer from "../../images/footer-sign.png"

const FooterInfo = () => {
  return (
    <div className="footer-info-wrapper">
      <div className="contain">
        <div className="text">
          <div className="text-only">
            <div className="name">
              <p className="big-text">Customer Service</p>
              <a href="/" className="small-text">
                Contact
              </a>

              <a href="/" className="small-text">
                FAQ
              </a>
              <a href="/" className="small-text">
                Terms of payment
              </a>
              <a href="/" className="small-text">
                Terms of sale
              </a>
              <a href="/" className="small-text">
                Delivery terms and conditions
              </a>
              <a href="/" className="small-text">
                Returns and Refunds{" "}
              </a>
            </div>
            <div className="name">
              <p className="big-text">Information</p>
              <a href="/" className="small-text">
                Affiliate
              </a>
              <a href="/" className="small-text">
                Cookies
              </a>
              <a href="/" className="small-text">
                How to Shop
              </a>
              <a href="/" className="small-text">
                About Nelly
              </a>
              <a href="/" className="small-text">
                Investor relations
              </a>
            </div>
            <div className="name">
              <p className="big-text">Campaigns</p>
              <a href="/" className="small-text">
                Evening dresses
              </a>
              <a href="/" className="small-text">
                Makeup
              </a>
              <a href="/" className="small-text">
                Fashion forward
              </a>
              <a href="/" className="small-text">
                Training clothes
              </a>
              <a href="/" className="small-text">
                Special Occasion Dresses
              </a>
            </div>
            <div className="name">
              <p className="big-text">Stores</p>
              <a href="/" className="small-text">
                Paris
              </a>
              <a href="/" className="small-text">
                New York
              </a>
              <a href="/" className="small-text">
                London
              </a>
              <a href="/" className="small-text">
                Madrid
              </a>
              <a href="/" className="small-text">
                Tokio
              </a>
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

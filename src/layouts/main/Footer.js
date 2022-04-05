import React from "react"
import "../../styles/main/footer.scss"

const Footer = () => {
  const width = window.innerWidth
  return (
    <div className="footer-wrapper">
      <div className="contain">
        <div className="text-to-click">
          {width < 640 ? <i className="fas fa-bars"></i> : null}
          <a href="/#" className="text">
            Privacy & Cookies
          </a>
          <a href="/#" className="text">
            Terms & Conditions
          </a>
          <a href="/#" className="text">
            Accessibility
          </a>
          <a href="/#" className="text">
            Store Directory
          </a>
          <a href="/#" className="text">
            About Us
          </a>
        </div>
        <div className="rights">
          <p className="text">© LookShop.com</p>
          <p className="text">All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

import React from "react"
import "../../styles/main/footer.scss"

const Footer = () => {
  const width = window.innerWidth

  const scrollToStart = () => {
    const userBar = document.querySelector(".user-bar-wrapper")
    userBar.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div className="footer-wrapper">
      <div className="contain">
        <div className="text-to-click">
          {width < 640 ? <i className="fas fa-bars"></i> : null}
          <p className="text" onClick={scrollToStart}>
            Privacy & Cookies
          </p>
          <p className="text" onClick={scrollToStart}>
            Terms & Conditions
          </p>
          <p className="text" onClick={scrollToStart}>
            Accessibility
          </p>
          <p className="text" onClick={scrollToStart}>
            Store Directory
          </p>
          <p className="text" onClick={scrollToStart}>
            About Us
          </p>
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

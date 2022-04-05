import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "../styles/main/componentsFromNav.scss"
import innerNavItems from "../static/innerNavItems"

const NavComponent = number => {
  const navigate = useNavigate()
  return (
    <div className="wrapper">
      <div className="inner">
        <button
          className="close"
          onClick={() => {
            navigate("/")
          }}
        >
          ×
        </button>
        <p className="text">
          You are on {innerNavItems[number.number].name} page
        </p>
        <p className="text">We are still working on that page</p>
        <button className="back">
          <Link to="/" style={{ textDecoration: "none", color: "#ffffff" }}>
            Back to home page
          </Link>
        </button>
      </div>
    </div>
  )
}

export default NavComponent

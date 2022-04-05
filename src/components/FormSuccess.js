import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "../styles/main/componentsFromNav.scss"
const FormSuccess = () => {
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
        <div className="text">We have received your request!</div>
        <button className="back">
          <Link to="/" style={{ textDecoration: "none", color: "#ffffff" }}>
            Back to home page
          </Link>
        </button>
      </div>
    </div>
  )
}

export default FormSuccess

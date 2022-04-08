import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useNavigate } from "react-router-dom"
import "../../styles/main/media.scss"

const schema = yup.object().shape({
  email: yup.string().email().required(),
})

const Media = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  })

  const navigate = useNavigate()

  const handleonSubmit = data => {
    navigate("/formSuccess")
  }

  return (
    <div className="media-wrapper">
      <div className="contain">
        <div className="email-section">
          <p>Stay updated</p>
          <label className="media-email">
            <input
              type="email"
              placeholder="Your email address"
              name="email"
              {...register("email")}
            />
          </label>

          <button onClick={handleSubmit(handleonSubmit)}>+</button>
        </div>
        <div className="icons-section">
          <p>Find us here</p>
          <a href="https://www.facebook.com/">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://pl.pinterest.com/">
            <i className="fa-brands fa-pinterest"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Media

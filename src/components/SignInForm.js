import React from "react"
import "../styles/main/signInForm.scss"
import { Link, useNavigate } from "react-router-dom"
import contentSignIn from "../static/contentSignIn"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../reducer/actions/index"

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required("password is required").min(6).max(15),
})

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const dispatch = useDispatch()

  const { take_email_value } = bindActionCreators(actionCreators, dispatch)

  const handleonSubmit = data => {
    take_email_value(data.email)
    setTimeout(() => {
      navigate("/")
    }, 20)
  }

  const navigate = useNavigate()

  return (
    <div className="sign-in-wrapper">
      <div className="sign-inner">
        <button
          className="close"
          onClick={() => {
            navigate("/")
          }}
        >
          ×
        </button>
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit(handleonSubmit)} noValidate>
          {contentSignIn.inputs.map((input, key) => {
            return (
              <label key={key}>
                {input.label}
                <input
                  type={input.type}
                  name={input.name}
                  {...register(input.name)}
                />
                <p>{errors[input.name]?.message}</p>
              </label>
            )
          })}
          <button type="submit">Sign in</button>
          <p className="SignUp">Need an account?</p>
          <Link to="/signUpForm">Sign up</Link>
        </form>
      </div>
    </div>
  )
}

export default SignInForm

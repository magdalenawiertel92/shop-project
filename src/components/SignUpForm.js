import React from "react"
import "../styles/main/signInForm.scss"
import { useNavigate } from "react-router-dom"
import contentSignUp from "../static/contentSignUp"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required("password is required").min(6).max(15),
  confirm: yup
    .string()
    .required("confirm password is required")
    .oneOf([yup.ref("password")], "passwords should match"),
})

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const navigate = useNavigate()

  const handleOnSubmit = data => {
    navigate("/formSuccess")
  }

  return (
    <div className="sign-up-wrapper">
      <div className="sign-inner">
        <button
          className="close"
          onClick={() => {
            navigate("/")
          }}
        >
          ×
        </button>
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit(handleOnSubmit)} noValidate>
          {contentSignUp.inputs.map((input, key) => {
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

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUpForm

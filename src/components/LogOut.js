import React from "react"
import "../styles/main/signInForm.scss"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../reducer/actions"

const LogOut = () => {
  const navigate = useNavigate()
  const email = useSelector(state => state.email)

  const dispatch = useDispatch()

  const { take_email_value } = bindActionCreators(actionCreators, dispatch)

  const handleOnClick = () => {
    take_email_value("")
    navigate("/")
  }

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
        <p className="text">You are logged as {email}</p>
        <button onClick={handleOnClick} className="back">
          Log out
        </button>
      </div>
    </div>
  )
}

export default LogOut

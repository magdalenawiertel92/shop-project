const emailReducer = (state = "", action) => {
  switch (action.type) {
    case "TAKE_EMAIL_VALUE":
      return action.payload
    default:
      return state
  }
}

export default emailReducer

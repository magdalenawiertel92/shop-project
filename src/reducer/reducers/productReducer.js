const INITIAL_STATE = {
  name: "",
  price: 0,
  image: "",
  path: "",
}

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCT_INFO":
      return {
        ...state,
        name: action.payload.name,
        price: action.payload.price,
        image: action.payload.image,
        path: action.payload.path,
      }
    default:
      return state
  }
}

export default productReducer

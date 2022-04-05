const INITIAL_STATE = {
  numberOfItems: 0,
  value: 0,
  products: [],
  currencySign: "$",
  photos: [],
  price: [],
  calculatedPrice: [],
  paths: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        numberOfItems: state.numberOfItems + 1,
        value: state.value + action.payload.basePrice * 1,
        products: [...state.products, action.payload.product],
        currencySign: action.payload.currencySign,
        photos: [...state.photos, action.payload.photo],
        price: [...state.price, action.payload.price],
        calculatedPrice: [
          ...state.calculatedPrice,
          action.payload.basePrice * 1,
        ],
        paths: [...state.paths, action.payload.path],
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        numberOfItems: state.numberOfItems - 1,
        value: state.value - action.payload.price,
        products: [
          ...state.products.slice(0, action.payload.id),
          ...state.products.slice(action.payload.id + 1),
        ],
        photos: [
          ...state.photos.slice(0, action.payload.id),
          ...state.photos.slice(action.payload.id + 1),
        ],
        price: [
          ...state.price.slice(0, action.payload.id),
          ...state.price.slice(action.payload.id + 1),
        ],
        calculatedPrice: [
          ...state.calculatedPrice.slice(0, action.payload.id),
          ...state.calculatedPrice.slice(action.payload.id + 1),
        ],
      }
    case "CALCULATE_CART_VALUE":
      return {
        ...state,
        value: action.payload.value,
        calculatedPrice: action.payload.basePrice,
      }
    default:
      return state
  }
}

export default cartReducer

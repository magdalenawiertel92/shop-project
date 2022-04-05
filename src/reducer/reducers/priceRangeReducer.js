const INITIAL_STATE = {
  minValue: 0,
  maxValue: 0,
  id: [0, 1, 2, 3, 4, 5, 6, 7, 8],
}

const priceRangeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "PRICE_RANGE":
      return {
        ...state,
        minValue: action.payload.minValue,
        maxValue: action.payload.maxValue,
        id: action.payload.id,
      }
    default:
      return state
  }
}

export default priceRangeReducer

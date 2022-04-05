export const calculate_value = (
  currency,
  ratio,
  bestsellersPrices,
  productsPrices,
  productsOnSalePrices,
  featuredProductsPrices,
  currencySign
) => {
  return dispatch => {
    dispatch({
      type: "CALCULATE_VALUE",
      payload: {
        currency,
        ratio,
        bestsellersPrices,
        productsPrices,
        productsOnSalePrices,
        featuredProductsPrices,
        currencySign,
      },
    })
  }
}

export const price_range = (minValue, maxValue, id) => {
  return dispatch => {
    dispatch({
      type: "PRICE_RANGE",
      payload: { minValue, maxValue, id },
    })
  }
}

export const take_email_value = emailValue => {
  return dispatch => {
    dispatch({
      type: "TAKE_EMAIL_VALUE",
      payload: emailValue,
    })
  }
}

export const add_to_cart = (
  product,
  currencySign,
  photo,
  price,
  basePrice,
  path
) => {
  return dispatch => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        product,
        currencySign,
        photo,
        price,
        basePrice,
        path,
      },
    })
  }
}

export const remove_from_cart = (id, product, photo, price) => {
  return dispatch => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        id,
        product,
        photo,
        price,
      },
    })
  }
}

export const calculate_cart_value = (basePrice, value) => {
  return dispatch => {
    dispatch({
      type: "CALCULATE_CART_VALUE",
      payload: {
        basePrice,
        value,
      },
    })
  }
}

export const show_products_list = id => {
  return dispatch => {
    dispatch({
      type: "SHOW_PRODUCTS_LIST",
      payload: {
        id,
      },
    })
  }
}

export const sort_products_by_date = date => {
  return dispatch => {
    dispatch({
      type: "SORT_PRODUCTS_BY_DATE",
      payload: {
        date,
      },
    })
  }
}

export const sort_products_by_lowest_price = lowestPrice => {
  return dispatch => {
    dispatch({
      type: "SORT_PRODUCTS_BY_LOWEST_PRICE",
      payload: {
        lowestPrice,
      },
    })
  }
}

export const sort_products_by_highest_price = highestPrice => {
  return dispatch => {
    dispatch({
      type: "SORT_PRODUCTS_BY_HIGHEST_PRICE",
      payload: {
        highestPrice,
      },
    })
  }
}

export const show_products = () => {
  return dispatch => {
    dispatch({
      type: "SHOW_PRODUCTS",
    })
  }
}

export const get_product_info = (name, price, image, path) => {
  return dispatch => {
    dispatch({
      type: "GET_PRODUCT_INFO",
      payload: {
        name,
        price,
        image,
        path,
      },
    })
  }
}

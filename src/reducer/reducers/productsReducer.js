import product1 from "../../images/products/product1.png"
import product2 from "../../images/products/product2.png"
import product3 from "../../images/products/product3.png"
import product4 from "../../images/products/product4.png"
import product5 from "../../images/products/product5.png"
import product6 from "../../images/products/product6.png"
import product7 from "../../images/products/product7.png"
import product8 from "../../images/products/product8.png"
import product9 from "../../images/products/product9.png"
import staticProductsList from "../../static/productsList"

const INITIAL_STATE = {
  productsList: [
    {
      image: product1,
      name: "Better Shorts",
      id: 0,
      path: "/betterShorts",
      date: new Date("2021-05-01"),
    },
    {
      image: product2,
      name: "Rosa Dress",
      id: 1,
      path: "/rosaDress",
      date: new Date("2021-05-01"),
    },
    {
      image: product3,
      name: "Fiona Dress",
      id: 2,
      path: "/fionaDress",
      date: new Date("2021-05-04"),
    },
    {
      image: product4,
      name: "Open Heart Top",
      id: 3,
      path: "/openHeartTop",
      date: new Date("2021-05-06"),
    },
    {
      image: product5,
      name: "Gooding Shorts",
      id: 4,
      path: "/goodingShorts",
      date: new Date("2021-05-02"),
    },
    {
      image: product6,
      name: "Melanie Dress",
      id: 5,
      path: "/melanieDress",
      date: new Date("2021-05-01"),
    },
    {
      image: product7,
      name: "Lousy Dress",
      id: 6,
      path: "/lousyDress",
      date: new Date("2021-05-10"),
    },
    {
      image: product8,
      name: "Colorful Bikini",
      id: 7,
      path: "/colorfulBikini",
      date: new Date("2021-05-15"),
    },
    {
      image: product9,
      name: "Plain Bikini",
      id: 8,
      path: "/plainBikini",
      date: new Date("2021-05-15"),
    },
  ],
  currency: "usDollar",
  ratio: 1,
  baseBestsellersPrices: [
    76.95, 59.95, 21.5, 35.95, 64.95, 26.95, 79.95, 76.95, 59.95, 21.5,
  ],
  bestsellersPrices: [],
  baseProductsPrices: [70.05, 59.7, 64.95, 25.75, 59.6, 55.5, 60.5, 59.7, 62.5],
  productsPrices: [],
  baseProductsOnSalePrices: [27.9, 28.1, 32.2],
  productsOnSalePrices: [],
  baseFeaturedProductsPrices: [10.0, 72.5, 85.2],
  featuredProductsPrices: [],
  currencySign: "$",
}

const productsReducer = (state = INITIAL_STATE, action) => {
  const price = state.productsPrices.length
    ? state.productsPrices
    : state.baseProductsPrices

  switch (action.type) {
    case "CALCULATE_VALUE":
      return {
        ...state,
        currency: action.payload.currency,
        ratio: action.payload.ratio,
        bestsellersPrices: action.payload.bestsellersPrices,
        productsPrices: action.payload.productsPrices,
        productsOnSalePrices: action.payload.productsOnSalePrices,
        featuredProductsPrices: action.payload.featuredProductsPrices,
        currencySign: action.payload.currencySign,
      }
    case "SHOW_PRODUCTS_LIST":
      return {
        ...state,
        productsList: staticProductsList.filter(product => {
          return action.payload.id.indexOf(product.id) > -1
        }),
      }
    case "SORT_PRODUCTS_BY_DATE":
      return {
        ...state,
        productsList: state.productsList.sort(
          (a, b) => a.date.getTime() - b.date.getTime()
        ),
      }
    case "SORT_PRODUCTS_BY_LOWEST_PRICE":
      return {
        ...state,
        productsList: state.productsList.sort(
          (a, b) => price[a.id] - price[b.id]
        ),
      }
    case "SORT_PRODUCTS_BY_HIGHEST_PRICE":
      return {
        ...state,
        productsList: state.productsList.sort(
          (a, b) => price[b.id] - price[a.id]
        ),
      }
    default:
      return state
  }
}
export default productsReducer

import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignInForm from "../../components/SignInForm"
import SignUpForm from "../../components/SignUpForm"
import FormSuccess from "../../components/FormSuccess"
import NavComponent from "../../components/NavComponent"
import navItems from "../../static/navItems"
import innerNavItems from "../../static/innerNavItems"
import LogOut from "../../components/LogOut"
import bestsellersProductList from "../../static/bestsellersProductList"
import Product from "../product/ProductPage"
import Home from "../main/Home"
import ProductsPage from "../products/ProductsPage"
import InnerNavComponent from "../../components/InnerNavComponent"
import { useSelector } from "react-redux"
import featuredProducts from "../../static/featuredProducts"
import productsOnSale from "../../static/productsOnSale"
import Cards from "../main/Cards"
import FooterInfo from "../main/FooterInfo"
import Footer from "../main/Footer"
import UserBar from "../main/UserBar"

const App = () => {
  const { products } = useSelector(state => state)
  const PathList = navItems.map((item, index) => (
    <Route
      key={index}
      path={item.path}
      element={<NavComponent number={index} />}
    />
  ))

  const innerNavPathList = innerNavItems.map((item, index) => (
    <Route
      key={index}
      path={item.path}
      element={
        item.path === "/clothes" ? (
          <ProductsPage />
        ) : (
          <InnerNavComponent number={index} />
        )
      }
    />
  ))

  const BestsellersProductPath = bestsellersProductList.map((item, index) => (
    <Route
      key={index + 5}
      path={item.path}
      element={<Product name={item.name} />}
    />
  ))

  const ProductPath = products.productsList.map((item, index) => (
    <Route
      key={index + 5}
      path={item.path}
      element={<Product name={item.name} />}
    />
  ))
  const ProductsOnSaleProductPath = productsOnSale.map((item, index) => (
    <Route
      key={index + 5}
      path={item.path}
      element={<Product name={item.name} />}
    />
  ))
  const FeaturedProductsPath = featuredProducts.map((item, index) => (
    <Route
      key={index + 5}
      path={item.path}
      element={<Product name={item.name} />}
    />
  ))
  return (
    <Router>
      <UserBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signInForm" element={<SignInForm />} />
        <Route path="logOut" element={<LogOut />} />
        <Route path="signUpForm" element={<SignUpForm />} />
        <Route path="formSuccess" element={<FormSuccess />} />
        {innerNavPathList}
        <Route path="clothes/*" element={<ProductsPage />} />
        {PathList}
        {BestsellersProductPath}
        {ProductPath}
        {ProductsOnSaleProductPath}
        {FeaturedProductsPath}
      </Routes>
      <footer>
        <Cards />
        <FooterInfo />
        <Footer />
      </footer>
    </Router>
  )
}

export default App

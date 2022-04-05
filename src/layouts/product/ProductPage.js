import React from "react"
import Sale from "../main/Sale"
import Product from "../product/Product"
import "../../styles/product/saleItems.scss"
import ProductMedia from "./ProductMedia"
import InfoAboutProduct from "./InfoAboutProduct"
import NavBar from "../main/NavBar"
import { Routes, Route } from "react-router-dom"
import SignInForm from "../../components/SignInForm"
import LogOut from "../../components/LogOut"

const ProductPage = props => {
  return (
    <>
      <header className="products-header">
        <NavBar />
      </header>
      <main>
        <Product />
        <ProductMedia />
        <InfoAboutProduct />
        <div className="sale-products-container">
          <p className="overline">Related products</p>
          <div className="products">
            <Sale />
          </div>
        </div>
      </main>
      <Routes>
        <Route path="signInForm" element={<SignInForm />} />
        <Route path="logOut" element={<LogOut />} />
      </Routes>
    </>
  )
}

export default ProductPage

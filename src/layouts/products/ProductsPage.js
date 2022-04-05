import React from "react"
import ProductsSlider from "./ProductsSlider"
import Clothes from "./Clothes"
import SmallProducts from "./SmallProducts"
import { Routes, Route } from "react-router-dom"
import SignInForm from "../../components/SignInForm"
import LogOut from "../../components/LogOut"
import NavBar from "../main/NavBar"
import Sale from "../main/Sale"

const ProductsPage = () => {
  const width = window.innerWidth
  return (
    <>
      <header className="products-header">
        <NavBar />
        <ProductsSlider />
      </header>
      {width > 1064 ? (
        <main className="main-wrapper">
          <div className="main-products-view">
            <Clothes />
            <SmallProducts />
          </div>
          <div className="sale-products-container">
            <p className="overline">Related products</p>
            <div className="products">
              <Sale />
            </div>
          </div>
        </main>
      ) : (
        <main className="main-wrapper">
          <div className="main-products-view">
            <SmallProducts />
            <Clothes />
          </div>
          <div className="sale-products-container">
            <p className="overline">Related products</p>
            <div className="products">
              <Sale />
            </div>
          </div>
        </main>
      )}

      <Routes>
        <Route path="signInForm" element={<SignInForm />} />
        <Route path="logOut" element={<LogOut />} />
      </Routes>
    </>
  )
}

export default ProductsPage

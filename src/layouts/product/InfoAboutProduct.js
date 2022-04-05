import React, { useState } from "react"
import "../../styles/product/infoAboutProduct.scss"
import "../../static/productInfo"
import productInfo from "../../static/productInfo"

const InfoAboutProduct = () => {
  const [active, setActive] = useState(productInfo)

  const showInfo = id => {
    const navNames = { ...active }
    navNames[id].expanded = !navNames[id].expanded
    setActive(navNames)
  }

  return (
    <>
      <div className="info-product-container">
        <div
          className="single-info"
          onClick={() => {
            showInfo(0)
          }}
        >
          <p>{productInfo[0].name}</p>
          <div
            className={
              productInfo[0].expanded ? "text-info expanded" : "text-info"
            }
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            temporibus illo repellendus, fugit qui esse veritatis minus quam
            quos dignissimos. Quis molestias explicabo tenetur soluta dolores ab
            voluptates in praesentium. Consequuntur esse ipsum mollitia quasi
            inventore expedita, natus nam nobis a. Nesciunt temporibus corrupti
            explicabo blanditiis sit a? Repellat consectetur possimus quasi
            molestiae expedita magnam voluptatem fugit nostrum perferendis
            assumenda. Blanditiis minus sed excepturi dolorem? Harum, distinctio
            quaerat? Consequatur cum quo repellat tempore non, sit sint esse, ut
            assumenda cupiditate, dolores inventore fugiat sequi! Aliquid quos
            quis facere facilis recusandae.
          </div>
        </div>
        <div
          className="single-info"
          onClick={() => {
            showInfo(1)
          }}
        >
          <p>{productInfo[1].name}</p>
          <div
            className={
              productInfo[1].expanded ? "text-info expanded" : "text-info"
            }
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            temporibus illo repellendus, fugit qui esse veritatis minus quam
            quos dignissimos. Quis molestias explicabo tenetur soluta dolores ab
            voluptates in praesentium. Consequuntur esse ipsum mollitia quasi
            inventore expedita, natus nam nobis a. Nesciunt temporibus corrupti
            explicabo blanditiis sit a? Repellat consectetur possimus quasi
            molestiae expedita magnam voluptatem fugit nostrum perferendis
            assumenda. Blanditiis minus sed excepturi dolorem? Harum, distinctio
            quaerat? Consequatur cum quo repellat tempore non, sit sint esse, ut
            assumenda cupiditate, dolores inventore fugiat sequi! Aliquid quos
            quis facere facilis recusandae.
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoAboutProduct

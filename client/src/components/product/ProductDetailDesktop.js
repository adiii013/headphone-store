import React from 'react'
import './ProductDetail.css'
import Rating from '../rating/RatingCard'

function ProductDetailDesktop() {
    const url = "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_7ec6f239-7534-4f13-844b-07238c109d67_600x.png?v=1632138514"
  return (
    <div className="product__detail__container">
        <p className="product__detail__heading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae adipisci aspernatur cumque ducimus dolores et veniam qui officia debitis rem. Vitae, expedita. Eos pariatur, cupiditate illum temporibus amet laudantium modi.</p>
        <div className="product__detail__subcontainer">
            <div className="product__detail__image__container">
            <img src={url} className='product__detail__main__image'  alt="" />
                <div className="product__detail__sub__image__container">
                    <img src={url}  alt="" className="product__detail__sub__image" />
                    <img src={url}  alt="" className="product__detail__sub__image" />
                    <img src={url}  alt="" className="product__detail__sub__image" />
                </div>
            </div>

            
            <div className="product__detail__text__container">
                <h2>Lorem, ipsum.</h2>
                <Rating/>
                <p>Price = 3000rs</p>
                <p>Color | Category</p>
                <p>About this item</p>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <p>Available - Instock</p>
                <p>Brand - Boat</p>
                <button className='add__to__cart'>Add to cart</button>
                <button className='buy__now'>Buy now</button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetailDesktop
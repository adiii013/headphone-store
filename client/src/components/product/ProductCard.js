import React from 'react'
import './ProductCard.css'
import { FaCartPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { AddToCart } from '../../features/cartSlice'
import axios from 'axios'


function ProductCard({ product }) {
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.user.login)
  const addToCartIcon = async (e) => {
    e.stopPropagation();
    try {
      const token = localStorage.getItem('token');
      if (token && user) {
        await axios.post('https://headphone-store.onrender.com/product/cart',{
          productid:product.productid
        }, {
          headers: {
            'Authorization': token,
          }
        })
        console.log(product.productid);
        dispatch(AddToCart(product))
        console.log("Product Added succesfuly");
      }
    } catch (e) {

     }
  }

  const naviate = useNavigate()
  return (
    <div key={product.productid} className="product__card__container" onClick={() => naviate('/product/abc')}>
      <div className="image__container" >
        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/e5881832-36f8-4c1c-a767-10f2c2a55a02.png?v=1625046573" alt="" className="product__image" />
        <FaCartPlus onClick={addToCartIcon} className='cart__icon' />
      </div>
      <div className="product__cart__detail">
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.productName}</p>
      </div>
    </div>
  )
}

export default ProductCard
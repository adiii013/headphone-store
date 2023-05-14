import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import Path from '../../components/path/Path'
import './Cart.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function CartDesktop() {
    const image_url = "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/e5881832-36f8-4c1c-a767-10f2c2a55a02.png?v=1625046573";
    const navigate = useNavigate()
    const cart = useSelector((state) => state.cart.cartProductId)
    const product = useSelector((state)=>state.products.productList)
    const [cartData,setCartData]= useState([]);
    useEffect(()=>{
        const productData = [];
       cart.forEach(cartProduct => {
         product.forEach(orgProduct =>{
            if(cartProduct.productid===orgProduct.productid){
                productData.push(orgProduct);
            }
         })
       });
       setCartData(productData)
       console.log(cartData);
    },[])
    

    return (
        <>
            <Header />
            <Path path={'Home/Cart'}/>
            <button className='back__to__products' onClick={() => navigate('/', { replace: true })}>Back to products</button>
            <p className="cart__container__heading">
                <AiOutlineShoppingCart className='cart__container__icon' size={40} /> My Cart
            </p>
            <div className="cart__container">
                <div className="cart__container__products__container">
                    <hr />
                    {
                        cartData.map((product) => <div key={product.productid} className="cart__container__products">
                            <img src={image_url} alt="" className="cart__container__product__image" />
                            <div className="cart__container__products__subtext">
                                <p className='cart__container__product__subtext__heading'>{product.name}</p>
                                <p>Color</p>
                                <p>Instock</p>
                            </div>
                            <div className="cart__container__products__subtext">
                                <p className='cart__container__product__subtext__heading'>Price</p>
                                <p>Color</p>
                            </div>
                            <div className="cart__container__products__subtext">
                                <p className='cart__container__product__subtext__heading'>Quantity</p>
                                <p>Color</p>
                            </div>
                            <div className="cart__container__products__subtext">
                                <p className='cart__container__product__subtext__heading'>Total</p>
                                <p>Color</p>
                            </div>
                        </div>)
                    }

                    <hr />
                </div>
                <div className="vertical__line">

                </div>
                <div className="cart__container__total">
                    <p>View Details</p>
                    {/* <p>Total Mrp : {totalPrice}</p> */}
                    <p>Total Mrp : 5000</p>
                    <p>Total Mrp : 5000</p>
                    <p className='cart__container__total__text'>Total Amount</p>
                    <button className='place__order' >Place Order</button>
                </div>
            </div>
        </>
    )
}

export default CartDesktop
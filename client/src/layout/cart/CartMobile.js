import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import Path from '../../components/path/Path'
import './CartMobile.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function CartMobile() {
    const image_url = "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/e5881832-36f8-4c1c-a767-10f2c2a55a02.png?v=1625046573";
    const navigate = useNavigate()
    const cart = useSelector((state) => state.cart.cartProductId)
    const product = useSelector((state)=>state.products.productList)
    // console.log(product);
    // console.log(cart);
    const [cartData,setCartData]= useState([]);
    const [total,setTotal] = useState(0)
    useEffect(()=>{
        const productData = [];
        let totalData = total;
       cart.forEach(cartProduct => {
         product.forEach(orgProduct =>{
            if(cartProduct.productid===orgProduct.productid){
                productData.push(orgProduct);
                totalData += parseInt(orgProduct.price);
            }
         })
       });
       setTotal(totalData)
       setCartData(productData)
       console.log(cartData);
    },[])
    

    return (
        <>
            <Header />
            <Path />
            <button className='back__to__products__mb' onClick={() => navigate('/', { replace: true })}>Back to products</button>
            <p className="cart__container__heading__mb">
                <AiOutlineShoppingCart className='cart__container__icon__mb' size={40} /> My Cart
            </p>
            <div className="cart__container__mb">
                <div className="cart__container__products__container__mb">
                    <hr />
                    {
                        cartData.map((product) => <div key={product.productid} className="cart__container__products__mb">
                            <img src={image_url} alt="" className="cart__container__product__image__mb" />
                            <div className="cart__container__product__abc__mb">
                            <div className="cart__container__products__subtext__mb">
                                <p className='cart__container__product__subtext__heading__mb'>{product.name}</p>
                            </div>
                            <div className="cart__container__products__subtext__mb">
                                <p className='cart__container__product__subtext__heading__mb'>Color = {product.color}</p>
                            </div>
                            <div className="cart__container__products__subtext__mb">
                                <p className='cart__container__product__subtext__heading__mb'>Quantity = 1</p>
                            </div>
                            <div className="cart__container__products__subtext__mb">
                                <p className='cart__container__product__subtext__heading__mb'>Total = {product.price}</p>
                            </div>
                            </div>
                        </div>)
                    }

                    <hr />
                </div>
                
                <div className="cart__container__total__mb">
                    <p className='cart__container__total__text__mb'>Total Amount - {total}₹</p>
                    <button className='place__order__mb' >Place Order</button>
                </div>
            </div>
        </>
    )
}

export default CartMobile
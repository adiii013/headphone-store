import React from 'react'
import './ViewProduct.css'
import Header from '../header/Header'
import Path from '../../components/path/Path'
import {Link} from 'react-router-dom'
import ProductDetail from '../../components/product/ProductDetail'

function ViewProductMobile() {
  return (
    <>
      <Header/>
      <div className='gap'></div>
      <ProductDetail/>
    </>
  )
}

export default ViewProductMobile
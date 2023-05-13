import React from 'react'
import './ViewProduct.css'
import Header from '../header/Header'
import Path from '../../components/path/Path'
import {Link} from 'react-router-dom'
import ProductDetail from '../../components/product/ProductDetail'

function ViewProduct() {
  return (
    <>
      <Header/>
      <Path/>
      <Link to='/' className='back__to__products'>Back to products</Link>
      <ProductDetail/>
    </>
  )
}

export default ViewProduct
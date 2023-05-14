import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import Advertise from '../advertise/Advertise'
import Search from '../../components/searchbar/Search'
import FilterComponent from '../../components/filter/FilterComponent'
import ProductCard from '../../components/product/ProductCard'
import './Home.css'
import Path from '../../components/path/Path'
import {useSelector} from 'react-redux'
import Loading from '../../components/loading/loading'

function Home() {
  
  const products = useSelector((state)=>state.products)
  const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 650;
    React.useEffect(() => {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);
  return (
    <>  
        <Header/>
        <Path/>
        <Advertise/>
        {
          (width < breakpoint) ? <div/> : <Search/>
        }
        <FilterComponent/>
        <div className="home__products">
          {
            (products.productList.length===0) ? <Loading /> : 
            products.productList.map((product)=><ProductCard product={product}/>)
          }
          </div>
    </>
  )
}

export default Home
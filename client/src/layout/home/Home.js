import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import Advertise from '../advertise/Advertise'
import Search from '../../components/searchbar/Search'
import FilterComponent from '../../components/filter/FilterComponent'
import ProductCard from '../../components/product/ProductCard'
import './Home.css'
import Path from '../../components/path/Path'
import { useSelector } from 'react-redux'
import Loading from '../../components/loading/loading'
import ProductCardList from '../../components/product/ProductCardList'

function Home() {

  const products = useSelector((state) => state.products)
  const [width, setWidth] = React.useState(window.innerWidth);
  const [listView, setListView] = useState(false);
  const breakpoint = 650;
  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  return (
    <>
      <Header />
      <Path path={'Home'}/>
      <Advertise />
      {
        (width < breakpoint) ? <div /> : <Search />
      }
      <FilterComponent listView={listView} setListView={setListView} />
      {(!listView) ? <div className="home__products">
        {
          (products.productList.length === 0) ? <Loading /> :
            products.productList.map((product) => <ProductCard product={product} />)
        }
      </div> : <div className="home__products__list">
        {
          (products.productList.length === 0) ? <Loading /> :
            products.productList.map((product) => <ProductCardList product={product} />)
        }
      </div>
      }

      <div className="gap"></div>
    </>
  )
}

export default Home
import React from 'react'
import './ProductDetail.css'
import Rating from '../rating/RatingCard'
import ProductDetailMobile from './ProductDetailMobile';
import ProductDetailDesktop from './ProductDetailDesktop';

function ProductDetail() {
    const url = "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_7ec6f239-7534-4f13-844b-07238c109d67_600x.png?v=1632138514"
 
    const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  
  return width < breakpoint ? <ProductDetailMobile /> : <ProductDetailDesktop />;

}

export default ProductDetail
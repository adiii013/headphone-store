import React from 'react'
import './ViewProduct.css'
import ViewProductMobile from './ViewProductMobile'
import ViewProductDesktop from './ViewProductDesktop'

function ViewProduct() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;
  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  
  return width < breakpoint ? <ViewProductMobile /> : <ViewProductDesktop />;
}

export default ViewProduct
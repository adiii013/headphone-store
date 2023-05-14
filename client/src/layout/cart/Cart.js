import React from 'react'
import './Cart.css'
import CartMobile from './CartMobile'
import CartDesktop from './CartDesktop'

function Cart() {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 650;
    React.useEffect(() => {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);
  console.log(width);
    
    return width < breakpoint ? <CartMobile /> : <CartDesktop />;
}

export default Cart
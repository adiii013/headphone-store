import React from 'react'
import './Header.css'
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';


function Header() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;
  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  
  return width < breakpoint ? <HeaderMobile /> : <HeaderDesktop />;

}

export default Header
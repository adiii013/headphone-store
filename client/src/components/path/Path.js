import React from 'react'
import PathDesktop from './PathDesktop'


function Path({path}) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  
  return width < breakpoint ? <div /> : <PathDesktop path={path}/>;

}

export default Path
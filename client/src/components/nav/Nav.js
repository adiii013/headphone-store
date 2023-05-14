import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Nav({activeNav,setActiveNav}) {
  

  return (
    <nav>
      <Link to="/" onClick={()=>setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}><AiOutlineHome/></Link>
      <Link to="/cart" onClick={()=>setActiveNav('/cart')} className={activeNav === '/cart' ? 'active' : ''}><AiOutlineShoppingCart/></Link>
      <Link to="/login" onClick={()=>setActiveNav('/')} className={activeNav === '/login' ? 'active' : ''}><AiOutlineUser/></Link>
    </nav>
  )
}

export default Nav
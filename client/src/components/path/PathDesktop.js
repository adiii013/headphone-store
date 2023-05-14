import React from 'react'
import Logo from '../../images/logo.png'
import './Path.css'
import {BsCart4} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

function Path() {
  const navigate = useNavigate()
  return (
    <div className='path__container'>
    <div className="logo__path__container">
        <img src={Logo} alt="" />
        <p className='logo__text'>Musicart</p>
        <p>Home</p>
    </div>
    <button onClick={()=>navigate('/cart')}><BsCart4 /> View Cart</button>
    </div>
  )
}

export default Path
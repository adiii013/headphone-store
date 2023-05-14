import React from 'react'
import './HeaderMobile.css'
import {BsSearch} from 'react-icons/bs'

function HeaderMobile() {
 
  
  return (
    <div className="header__container">
        <div className="search__bar__header">
            <BsSearch color='black'/>
            <input type="text" className="header__search__input" />
        </div>
    </div>
  )
}

export default HeaderMobile
import React from 'react'
import './Search.css'
import {AiOutlineSearch} from 'react-icons/ai'

function Search() {
  return (
    <div className="search__bar__container">
      <AiOutlineSearch className='search__icon'/>
      <input type="text" placeholder='Search Products'/>
    </div>
  )
}

export default Search
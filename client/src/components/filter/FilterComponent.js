import React from 'react'
import './FilterComponent.css'

import {BsFillGridFill} from 'react-icons/bs'
import {FaThList} from 'react-icons/fa'

function FilterComponent() {
  return (
    <div className='filter__container'>
    <div className="view__container">
    <BsFillGridFill />
    <FaThList />
    </div> 
      <select name="Headphone Type"  id="" className='filter__item'>
        <option defaultChecked value="">Headphone Type</option>
        <option value="">Inhear Headphone</option>
        <option value="">Inhear Headphone</option>
        <option value="">Inhear Headphone</option>
        <option value="">Inhear Headphone</option>
      </select>
      <select name="Headphone Type"  id="" className='filter__item'>
      <option defaultChecked value="">Company</option>
        <option value="">In-ear Headphone</option>
        <option value="">On-ear Headphone</option>
        <option value="">Over-ear Headphone</option>
      </select>
      <select name="Headphone Type"  id="" className='filter__item'>
      <option defaultChecked value="">Color</option>
        <option value="">JBL</option>
        <option value="">Sony</option>
        <option value="">Boat</option>
        <option value="">Zebronics</option>
      </select>
      <select name="Headphone Type"  id="" className='filter__item'>
      <option defaultChecked value="">Featured</option>
        <option value="">Blue</option>
        <option value="">Black</option>
        <option value="">White</option>
        <option value="">Brown</option>
      </select>
      <select name="Headphone Type"  id="" className='filter__item'>
      <option defaultChecked value="">Price</option>
        <option value="">$1 - $1000</option>
        <option value="">$1000 - $2000</option>
        <option value="">$2000 - $10000</option>
      </select>
    </div>
  )
}

export default FilterComponent
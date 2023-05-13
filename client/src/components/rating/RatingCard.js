import React from 'react'
import './Rating.css'
import {AiOutlineStar} from 'react-icons/ai'

function RatingCard() {
  return (
    <div className="rating__container">
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <span>  (50 reviews)</span>
    </div>
  )
}

export default RatingCard
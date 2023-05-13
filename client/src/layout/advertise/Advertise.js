import React from 'react'
import AdvertiseImage from '../../images/advertise.png'
import './Advertise.css'

function Advertise() {
    return (
        <div className="advertise__container">
            <div className="advertise__text">
                <p>Grab upto 50% off on
                    Selected headphones</p>
                <button className='advertise__button'>Buy now</button>
            </div>
           <img src={AdvertiseImage} alt="" className="advertise__image" />
        </div>
    )
}

export default Advertise
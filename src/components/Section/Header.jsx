import React from 'react'
import Logowhite from '../../assets/img/icon/Logowhite.svg'

const Header = () => {
    return (
        <div className='Header_container'>
            <div className='Header_box'>
                <img src={Logowhite} className='LogoWhite'></img>
            </div>
        </div>
    )
}

export default Header
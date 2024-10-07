import React from 'react'
import Logo from '../assets/img/icon/Logo.svg'
import '../assets/scss/setting/common.scss'

const Loading = () => {
    return (
        <div className='Loading_wrap container'>
            <div className='Loading_Logo'>
                <img src={Logo}></img>
            </div>
        </div>
    )
}

export default Loading
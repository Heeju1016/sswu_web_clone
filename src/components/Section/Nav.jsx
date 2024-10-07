import React from 'react'
import Home from '../../assets/img/icon/home.svg'
import Like from '../../assets/img/icon/like.svg'
import Search from '../../assets/img/icon/search.svg'
import Mypage from '../../assets/img/icon/mypage.svg'

const Nav = () => {
    return (
        <div className='Nav_container'>
            <div className='Nav_list'>
                <ul>
                    <li className='Homebtn'><img src={Home}></img></li>
                    <li className='Likebtn'><img src={Like}></img></li>
                    <li className='Searchbtn'><img src={Search}></img></li>
                    <li className='Mypagebtn'><img src={Mypage}></img></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
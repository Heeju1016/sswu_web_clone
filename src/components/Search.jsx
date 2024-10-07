import React, { useState }from 'react'
import Slider from './Section/Slider'
import KakaoMap from './Section/KakaoMap'
import SearchIcon from '../assets/img/icon/search.svg'
import '../assets/scss/section/_section.scss'

const Search = () => {
    const [text, setText] = useState('');

    return (
        <div className='Search_wrap container'>
            <Slider/>
            <div className='InputContainer'>
                <input type='text' value={text} placeholder='장소를 검색해주세요!' onChange={(e)=> {
                    setText(e.target.value)
                }}>
                </input>
                <img src={SearchIcon}></img>
            </div>
            <KakaoMap />
        </div>
    )
}

export default Search
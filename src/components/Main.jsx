import React from 'react'
import Slider from './Section/Slider'
import Introduce from '../assets/img/png/introduce.png'

const Main = () => {
    return (
        <div className='Main_wrap container'>
            <Slider />
            <section className='introduce_container'>
                <div className='intro_box'>
                    <p>공지사항</p>
                </div>
                <div className='intro_list'>
                    <ul>
                        <li><p>[교양 교학팀] 2024 성신 All Write 교양도서 백일장 공모전...</p><div className='line'></div></li>
                        <li><p>[교양 교학팀] 2024 성신 All Write 교양도서 백일장 공모전...</p><div className='line'></div></li>
                        <li><p>[교양 교학팀] 2024 성신 All Write 교양도서 백일장 공모전...</p><div className='line'></div></li>
                        <li><p>[교양 교학팀] 2024 성신 All Write 교양도서 백일장 공모전...</p><div className='line'></div></li>
                        <li><p>[교양 교학팀] 2024 성신 All Write 교양도서 백일장 공모전...</p><div className='line'></div></li>
                        <li><p>[교양 교학팀] 2024 성신 All Write 교양도서 백일장 공모전...</p><div className='line'></div></li>
                        <li><p>[교양 교학팀] 2024 성신 All Write 교양도서 백일장 공모전...</p><div className='line'></div></li>
                    </ul>
                </div>
            </section>
            <section className='introduce_mv'>
                <img src={Introduce} className='intro_mv'></img>
            </section>
        </div>
    )
}

export default Main
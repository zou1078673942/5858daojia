import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './myinfo.css'
import Footer from '../../pubilc/Footer';

function MyInfo() {
    const [Info, setInfo] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/info/info")
            .then(data => data.json())
            .then(res => setInfo(res))
    }, [])
    const myInfo = Info.info
    // console.log(myInfo)
    return (
        <div className="info-wrapper">
            <div className="info-top">
                <span className="help"></span>
                <span className="my-info">我的消息</span>
                <Link to="/info/help" className="help">帮助中心</Link>
            </div>
            <ul className="info-item">
                {
                    myInfo?.map((item, index) => {
                        return (
                            <li key={item+index}>
                                <img src={item.avatar} alt="" />
                                <span className="item-words">
                                    <div className="item-box">
                                        <p className='item-name'>{item.name}</p>   
                                        <p className='item-time'>{item.time}</p>  
                                    </div>
                                    <p className="item-text">{item.text}</p>
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default MyInfo
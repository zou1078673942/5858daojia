import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './myinfo.css'

function MyInfo() {
    return (
        <div className="info-wrapper">
            <div className="info-top">
                <span className="help"></span>
                <span className="my-info">我的消息</span>
                <Link to="/info/help" className="help">帮助中心</Link>
            </div>
            <ul className="info-item">

            </ul>
        </div>
    )
}
export default MyInfo
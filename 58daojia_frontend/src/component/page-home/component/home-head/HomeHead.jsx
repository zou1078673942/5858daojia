import React from 'react';
import { Link,BrowserRouter } from 'react-router-dom';
import './homehead.css'
function HomeHead() {
    return (
        <div className="home-head-wrapper">
            <div className="loge">
                <Link to='/home' className="head-loge">
                </Link>
            </div>
            <div className="topbar-wrap">
                <Link to="/home/city" className="city">
                    东华理工大学
                </Link>
                <input type="text" placeholder="(loge)搜索"/>
            </div>
        </div>
    )
}
export default HomeHead
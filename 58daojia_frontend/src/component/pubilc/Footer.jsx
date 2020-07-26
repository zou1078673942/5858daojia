import React from 'react';
import { Link } from 'react-router-dom'
import './footer.css'
export default function Footer() {
    return (
        <div className="footer">
            <ul>
                <li>
                    <Link to="/home" className="foot-link">
                        <img src={require('../../icon/shouye.png')} alt="" />
                    </Link>

                </li>
                <li>
                    <Link to="/all" className="foot-link">
                        <img src={require('../../icon/fenlei.png')} alt="" />
                    </Link>
                </li>
                <li>
                    <Link to="/info" className="foot-link">
                        <img src={require('../../icon/xiaoxi.png')} alt="" />
                    </Link>
                </li>
                <li>
                    <Link to="/my" className="foot-link">
                        <img src={require('../../icon/wode.png')} alt="" />
                    </Link>
                </li>
            </ul>
        </div>
    )
}
import React from 'react';
import './index.css'
import HomeHead from './home-head/HomeHead';
import HomeNav from './home-nav/HomeNav';
import ToHome from './to-home/ToHome';
import UpDoor from './updoor/UpDoor';
import Need from './need/Need';
import More from './more/More';
import Footer from '../../pubilc/Footer';
function HomePage () {
    return (
        <div className="home-wrapper">
            <HomeHead/>
            <HomeNav/>
            <ToHome/>
            <UpDoor/>
            <Need/>
            <More/> 
        </div>
    )
}
export default HomePage
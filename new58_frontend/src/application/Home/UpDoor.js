import React from 'react';
import './updoor.css'
export default function UpDoor() {
    const updoor = [{
        src: 'https://static.daojia.com/changsha/fe-website-dj-m/static/images/home/door_1.png', text: '电脑维修'
    }, {
        src: 'https://static.daojia.com/changsha/fe-website-dj-m/static/images/home/door_2.png', text: '手机维修'
    }, {
        src: 'https://static.daojia.com/changsha/fe-website-dj-m/static/images/home/door_3.png', text: '管道疏通'
    }, {
        src: 'https://static.daojia.com/changsha/fe-website-dj-m/static/images/home/door_4.png', text: '开锁换锁'
    }]
    return (
        <>
            <div className="updoor-title">
                <span className="left">立即上门</span>
                <span className="right">商家极速接单</span>
            </div>
            <div className="updoor-body">
                {
                    updoor.map((item, index) => {
                        return (
                            <span className="updoor-box" key={index+item}>
                                <img src={item.src} alt=""/>
                                <p className='updoor-text'>{item.text}</p>
                            </span>
                        )
                    })
                }
            </div>
        </>
    )
}
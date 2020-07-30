import React from 'react';
import { Route, Link } from 'react-router-dom'
import Hot from './pages/hot/hot'
import add from './icons/add.png'
import Clear from './pages/clear/hot'
import Bmys from './pages/bmys/hot'

import './index.css'
import Footer from '../pubilc/Footer';


function All() {
    let routerConfig = [
        { path: '#hot', title: '热门', component: <Hot /> },
        { path: '#clear', title: '保洁清洗', component: <Clear /> },
        { path: '#babysit', title: '保姆月嫂', component: <Bmys /> },
        { path: '#bj', title: '搬家', component: <Hot /> },
        { path: '#wx', title: '房屋维修', component: <Clear /> },
        { path: '#smwx', title: '数码维修', component: <Bmys /> },
        { path: '#smaz', title: '上门安装', component: <Hot /> },
        { path: '#xhms', title: '鲜花美食', component: <Clear /> },
        { path: '#lr', title: '丽人', component: <Bmys /> },
        { path: '#jtxh', title: '家庭洗护', component: <Hot /> },
        { path: '#bmfw', title: '便民服务', component: <Clear /> },
    ]
    return (
        <div>
            <div className="nav">
                <div className='search'>擦玻璃</div>
                <div className='add'>
                    <img src={add} alt="" />
                </div>
            </div>
            <div className='mainDiv'>
                <div className='leftNav'>
                    <ul>。
                        {
                            routerConfig.map((item, index) => {
                                return (
                                    <div className='link'>
                                        <a href={item.path}>
                                            <div className='wenzi1' style={{ 'color': 'black' }}>{item.title}</div>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="rightMain">
                    {
                        routerConfig.map((item, index) => {
                            return (
                                <a name={item.path.substring(1)} key={index}>
                                    {item.component}
                                </a>
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default All

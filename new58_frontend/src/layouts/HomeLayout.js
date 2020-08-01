import React from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom'
import { Tab, TabItem } from './HomeLayout.style'

function Home(props) {
    const { route } = props
    return (
        <>
            <Tab>
                <NavLink to="/">
                    <TabItem>
                        <span className="iconfont">&#xe603;</span>
                    </TabItem>
                </NavLink>
                <NavLink to="/all">  
                    <TabItem>
                        <span className="iconfont icon-caidanguanli">&#xe618;</span>
                    </TabItem>
                </NavLink>
                <NavLink to="/info">
                    <TabItem>
                        <span className="iconfont icon-yijianhuizong">&#xe623;</span>
                    </TabItem>
                </NavLink>
                <NavLink to="/my">
                    <TabItem>
                        <span className="iconfont icon-zhanghao">&#xe63b;</span>
                    </TabItem>
                </NavLink>
            </Tab >
            {renderRoutes(route.routes)}
        </>
    )
}

export default Home
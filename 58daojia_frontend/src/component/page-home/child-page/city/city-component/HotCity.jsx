import React from 'react';
import './hotcity.css'

export default function HotCity(props) {
    const { hotCities } = props
    // console.log(hotCities)
    return (
        <div 
        className="hot-wrapper">
            <p className="hot-title">热门城市</p>
            <div 
            className="hot-box">
                {
                    hotCities?.map((item, index) => {
                        return (
                            <div className="hot-city" key={item + index}>
                                {item.name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
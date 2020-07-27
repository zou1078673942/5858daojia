import React, { useState, useEffect } from 'react';
import Back from '../../../pubilc/Back';
import './City.css'
import HotCity from './city-component/HotCity'
import AllCity from './city-component/AllCity';
import UsefulCity from './city-component/UsefulCity';

export default function City() {
    const [cities, setCities] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/cities/cities")
            .then(data => data.json())
            .then(res => setCities(res))
    }, [])
    const hotCities = cities.hotCities
    const allCities = cities.cityList
    return (
        <div className="city-page" >
            <div className="body" data-body={'#'}>
                <div className="top-wrap">
                    <div className="city-top">
                        <Back />
                        <span className='city-title'>选择服务地址</span>
                        <span style={{ width: 42, height: 42 }}></span>
                    </div>
                </div>
                <HotCity hotCities={hotCities} />
                <AllCity allCities={allCities} />
                <UsefulCity />
            </div>
        </div>
    )
}
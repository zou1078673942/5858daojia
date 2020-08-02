import React from 'react'
import './index.css'
import Header from '../../baseUI/header/'
import CityStyle from './City.style'
import {allCity} from '../../api/config'
import AllCity from './AllCity'

function Address () {
    const usefulCity = (localStorage.getItem('name'))?[...JSON.parse(localStorage.getItem('name'))]:[]
    console.log(allCity)
    return (
        <div className="address">
            <Header title='请选择地址' text="帮助"/>
            <CityStyle title='常用城市' cities={usefulCity}/>
            <CityStyle title='热门城市' cities={allCity[0].hotCities}/>
            <AllCity allCities={allCity[0].cityList}/>
        </div>
    )
}
export default Address
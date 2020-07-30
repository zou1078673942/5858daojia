import React, { memo } from 'react';
import './hotcity.css'
import { Link } from 'react-router-dom';
import { changeCity } from '../../../store/actionCreator'
import { connect } from 'react-redux';
import { localCity } from './LocalCIty'

function HotCity(props) {
    const { hotCities } = props
    const { chooseCity } = props
    const clickCity = (name) => {
        localCity(name)
        chooseCity(name)
    }
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
                            <Link 
                            to='/Home'
                            className="hot-city" 
                            key={item + index}
                            onClick={() => {clickCity(item.name)}}
                            >
                                {item.name}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        chooseCity: (city) => {
            dispatch(changeCity(city))
        }
    }
}
export default connect(null,mapDispatchToProps)(memo(HotCity))
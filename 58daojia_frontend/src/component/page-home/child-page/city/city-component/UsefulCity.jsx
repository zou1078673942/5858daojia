import React, { useEffect, useState, memo } from 'react'
import { changeCity } from '../../../store/actionCreator'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { localCity } from './LocalCIty'
import './usefulcity.css'


function UsefulCity(props) { 
    const { chooseCity } = props
    const usefulCity = [...JSON.parse(localStorage.getItem('city'))]
    console.log(usefulCity)
    const clickCity = (name) => {
        localCity(name)
        chooseCity(name)
    }
    return (
        <div className="useful-wrapper">
            <p className="useful-title">常用城市</p>
            <div className="useful-box">
                {
                    usefulCity?.map((item, index) => {
                        return (
                            <Link
                            to='/Home'
                            className='useful-city'
                            key={item+index}
                            onClick={()=>{clickCity(item.city)}}
                            >
                                {item.city}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    city: state.city.city
})
const mapDispatchToProps = (dispatch) => {
    return {
        chooseCity: (city) => {
            dispatch(changeCity(city))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(memo(UsefulCity))
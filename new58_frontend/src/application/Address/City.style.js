import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import * as actionTypes from './store/actionCreator'
import { connect } from 'react-redux'
import {localCity} from '../../api/utils'

export const Tabs = styled.div`
    padding-top:1.2rem;
    
    p{
        color: #828e99;
        font-size: 0.4rem;
        padding-left: 5px;
    }
    .wrapper{
        padding-left:21px;
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        .hot-box{
            padding-top: 3px;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
            a{
                color: #292d33;
                margin: 5px;
                background-color: #f2f5f7;
                width: 2.7rem;
                height: 1.25rem;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 0.45rem;
                border-radius: 5px;
            }
        }
    }
`

const City = props => {
    const { title, cities } = props
    const { chooseCity } = props
    const clickCity = (name) => {
        localCity(name)
        chooseCity(name)
    }
    return (
        <Tabs>
            <p>{title}</p>
            <div className="wrapper">
                <div className="hot-box">
                    {
                        cities?.map((item, index) => {
                            return (
                                <Link
                                    to='/home'
                                    key={item + index}
                                    onClick={() => { clickCity(item.name) }}
                                >{item.name}
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </Tabs>
    )
}

City.defaultProps = {
    title: '标题',
    cities: []
}

City.porpTypes = {
    title: PropTypes.string,
    text: PropTypes.array
}

const mapDispatchToProps = (dispatch) => {
    return {
        chooseCity: (city) => {
            dispatch(actionTypes.changeCity(city))
        }
    }
}

export default connect(null, mapDispatchToProps)(React.memo(City))
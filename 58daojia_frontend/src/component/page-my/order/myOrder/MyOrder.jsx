import React, { useEffect, useState } from 'react'
import './myOrder.css'
import Back from '../../../pubilc/Back'
import Swiper from "swiper/js/swiper.min.js"
import "swiper/css/swiper.css"

function MyOrder() {
    const tab = ['待确认', '待服务', '待支付', '待评价', '全部']
    useEffect(() => {
        new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class='+className+'>' +tab[index] + '</span>';
                },
            },
        },
        )
    })
    return (
        <div className="my-order">
            <div className="order-top">
                <Back />
                <p>全部订单</p>
                <span>分类</span>
            </div>
            <div className="swiper-container">
                <div className="swiper-pagination"></div>
                <div
                    className="swiper-wrapper">
                    {
                        tab.map((item, index) => {
                            return (
                                <div
                                    swiper-index={index}
                                    key={item + index}
                                    className="swiper-slide">
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default MyOrder
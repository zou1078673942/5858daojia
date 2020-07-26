import React from 'react';
import { Link } from 'react-router-dom'
import './help.css'
import Back from '../../pubilc/Back';
function Help() {
    return (
        <div className="help-wrapper">
            <div className="help-top">
                <Back/>
                <span className="title">帮助中心</span>
                <span className="top-between"></span>
            </div>
            <p className="subtitle">常见问题</p>
            <ul className="normal-pro">
                <li>
                    <img src={require('../icons/gonghuchongzhi.png')} alt="" />
                    优惠券问题
                    <img className="to" src={require('../icons/前进.png')} alt="" />
                </li>
                <li>
                    <img src={require('../icons/tixian.png')} alt="" />
                    卡问题
                    <img className="to" src={require('../icons/前进.png')} alt="" />
                </li>
                <li>
                    <img src={require('../icons/caigoudating-dianjihou.png')} alt="" />
                    保洁订单问题
                    <img className="to" src={require('../icons/前进.png')} alt="" />
                </li>
                <li>
                    <img src={require('../icons/yuetixian.png')} alt="" />
                    账户信息问题
                    <img className="to" src={require('../icons/前进.png')} alt="" />
                </li>
            </ul>
            <p className="subtitle">更多问题分类</p>
            <div className="other-pro-wrapper">
                <div className="other-pro">
                    <div className="other-pro-title">保洁</div>
                    <div className="other-pro-type">订单信息/优惠券/卡咨询</div>
                </div>
                <div className="other-pro">
                    <div className="other-pro-title">保姆/月嫂/育儿嫂</div>
                    <div className="other-pro-type">售前咨询/售后咨询</div>
                </div>
                <div className="other-pro">
                    <div className="other-pro-title">搬家</div>
                    <div className="other-pro-type">费用/订单信息/售后服务</div>
                </div>
                <div className="other-pro">
                    <div className="other-pro-title">维修/安装</div>
                    <div className="other-pro-type">咨询/订单信息/售后服务</div>
                </div>
                <div className="other-pro">
                    <div className="other-pro-title">其他平台服务</div>
                    <div className="other-pro-type">咨询/订单信息/售后服务</div>
                </div>
                <div className="other-pro">
                    <div className="other-pro-title">商家入驻</div>
                    <div className="other-pro-type">如何入驻/资质要求</div>
                </div>
            </div>
            <br />
            <div className="complain">
                <img src={require("../icons/投诉.png")} alt="" />
                账户信息问题
                <img className="to" src={require('../icons/前进.png')} alt="" />
            </div>
        </div >
    )
}
export default Help
import React from 'react';
import Header from './header/header.js'
import Order from './order/order.js'
import Wait from './wait/wait.js'
import Collect from './collect/collect.js'
import Data from './datas/datas'
import Login_out from './login_out/login_out'
import Footer from '../pubilc/Footer'


export default function My(){
    return(
        <div className='login'>
            <Header />
            <Order />
            <Wait />
            <Collect />
            <Data />
            <Login_out />
            <Footer />
        </div>
    )
}
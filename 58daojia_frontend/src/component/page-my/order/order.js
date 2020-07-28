import React from 'react';
import './order.css'
import { Link } from 'react-router-dom';
export default function Order() {
    return (
        <Link to='/my/order' className='order'>
            <div className='my'>我的订单</div>
            <div></div>
            <div className='all'>查看全部订单</div>
        </Link>
    )
}
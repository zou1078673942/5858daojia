import React ,{Component}from 'react';
import './wait.css'
import jiedan from '../icons/jiedan.png';
import pay from '../icons/pay.png';
import pinjia from '../icons/pinjia.png';

import wait from '../icons/wait.png';
class Wait extends Component {
    state = { 
        wait:[{src:wait,content:'待确认',link:'#'},]
     }
    render() { 
        return ( 
            <div className='wait'>
                <div className='img_box'>
                      <img src={wait} alt=""/>
                      <div>待确认</div>
                </div>
                <div className='img_box'>
                      <img src={jiedan} alt=""/>
                      <div>待服务</div>
                </div>
                <div className='img_box'>
                      <img src={pay} alt=""/>
                      <div>待支付</div>
                </div>
                <div className='img_box'>
                      <img src={pinjia} alt=""/>
                      <div>待评价</div>
                </div>
            </div>
         );
    }
}
 
export default Wait;
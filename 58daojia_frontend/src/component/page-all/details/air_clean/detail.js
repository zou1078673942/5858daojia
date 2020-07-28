import React from 'react';
import Swiper from "swiper"
import "swiper/css/swiper.css"
import './detail.css'
import Price from './price'
import Title from './title'
import {Biaoyu} from './biaoyu.js'
import {Gou} from './gou.js'
import {Youhui} from './youhui'
import {Xuanze} from './xuanze'
import {Pic} from './pic'
import {Buy} from './buy'
import Back from '../../../pubilc/Back';
export default class Details extends React.Component {
  constructor() {
    super()
    // 这个组件 state , 属于这个组件， 不属于其他组件， 
    // 1. 用假数据 把页面先做出
    // 2. 未来再改成接口
    this.state = {
      loading: true,
      sliderList: [{
        id: 1,
        picUrl: 'https://images.daojia.com/pic/commodity/online/70d521722931d39c05b3d608aaaddcb1.png?x-oss-process=image/auto-orient,0/format,webp',
        linkUrl: 'https://https://xw.qq.com/m/sports' 
      }, {
        id: 2,
        picUrl: 'https://images.daojia.com/pic/commodity/online/d8fecda527d8478f99c553b322cd6e74.png?x-oss-process=image/auto-orient,0/format,webp',
        linkUrl: 'https://https://xw.qq.com/m/sports'
      }, {
        id: 3,
        picUrl: 'https://images.daojia.com/pic/commodity/online/84e50ddac079a5a8db55a55b7c448cd4.png?x-oss-process=image/auto-orient,0/format,webp',
        linkUrl: 'https://https://xw.qq.com/m/sports'
      },{
        id: 4,
        picUrl: 'https://images.daojia.com/pic/commodity/online/d5f109846022186697d004b7fee39fc2.png?x-oss-process=image/auto-orient,0/format,webp',
        linkUrl: 'https://https://xw.qq.com/m/sports'
      }] // 幻灯片  没有必要去redux 

    }
  }
  componentDidMount() {
    new Swiper(".slider-container", {
      loop: true,
      autoplay: {
        delay: 1500,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      }
    })
  }
  render(){
    return(
       
      <div className='detail'>
      <div className='banner'>
      <div className='detail_back'><Back/></div> 
      <div className="slider-container">
      <div className="swiper-wrapper">
        {
          this.state.sliderList.map(slider => {
            return (
              <div className="swiper-slide" key={slider.id}>
                <a href={slider.linkUrl} className="slider-nav">
                  <img src={slider.picUrl} alt="" width="100%" height="10%"/>
                </a>
              </div>
            );
          })
        }
      </div>
      <div className="swiper-pagination"></div>
    </div>
    </div>
    <Price />
    <Title />
      <Biaoyu>高温除尘菌 让呼吸更清新 让感觉更合适</Biaoyu>
      <Gou>
        <ul>
          <li className='iconfont'>&#xe84b;随时预约</li>
          <li className='iconfont'>&#xe84b;专业清洗工具</li>
          <li className='iconfont'>&#xe84b;阿姨专业培训</li>
        </ul>
      </Gou>
      <Youhui>
        <ul>
          <li>优惠</li>
          <li>6.5折无门槛优惠券</li>
          <li><div>立即领取</div></li>
        </ul>
      </Youhui>
      <Xuanze>
        <div className='xuanze_title'>
          <div className='head_title' >地址</div>
          <div className= 'detail_title1 iconfont' >请选择服务地址</div><div className= 'iconfont'> &#xe67b;</div>
        </div>
        <div className='xuanze_title'>
          <div className='head_title' >规格</div>
          <div className= 'detail_title1 iconfont'>请选择服务规格</div><div className= 'iconfont'> &#xe67b;</div>
        </div>
        <div className='xuanze_title'>
          <div className='head_title' >时间</div>
          <div className= 'detail_title1 iconfont'>请选择服务时间</div><div className= 'iconfont'> &#xe67b;</div>
        </div>
      </Xuanze>
      <Pic>
        <img src="https://images.daojia.com/pic/commodity/online/d49cb340147447aff1d2c972723b9b01.jpg?x-oss-process=image/auto-orient,0/format,webp" alt=""/>
        <img src="https://images.daojia.com/pic/commodity/online/10690ea952b4f41349d3846192dea38e.jpg?x-oss-process=image/auto-orient,0/format,webp" alt=""/>
        <img src="https://images.daojia.com/pic/commodity/online/c3a4b62f30b43df4bbebd2becc126164.jpg?x-oss-process=image/auto-orient,0/format,webp" alt=""/>
        <img src="https://images.daojia.com/pic/commodity/online/08f7f4b4b753bfa4ce28e594951ad6a5.jpg?x-oss-process=image/auto-orient,0/format,webp" alt=""/>
        <img src="https://images.daojia.com/pic/commodity/online/8b4eb621d275d8cbc04c029658ec4de6.jpg?x-oss-process=image/auto-orient,0/format,webp" alt=""/>
        <img src="https://images.daojia.com/pic/commodity/online/165c2cb8a74e2a65208716a795a8c962.jpg?x-oss-process=image/auto-orient,0/format,webp" alt=""/>
      </Pic>
      <Buy>
        <div className='kefu_icon'>
          <div className='kefu_icons iconfont'> &#xe61b; </div>
          <div className='kefu_word'>客服</div>
        </div>
          <div className='buy_now'>立即购买</div>
      </Buy>
    </div>
    )
  }
}
import React from 'react';
import './homenav.css'
function HomeNav() {
    let firnavConfig = [{
        src: 'https://images.daojia.com/dop/custom/f3e9130d1750ebab91caa9b86dbbd84e.png', text: '保洁'
    }, {
        src: 'https://images.daojia.com/dop/custom/64b0a24bebec5e986b7523d24f38c9e8.png', text: '保姆月嫂'
    }, {
        src: 'https://images.daojia.com/dop/custom/9b04c448bf5a2e53407227abb39b27dc.png', text: '搬家'
    }, {
        src: 'https://images.daojia.com/dop/custom/c16a42b496dad271fc602eae789ce1bf.png', text: '拉货快运'
    }, {
        src: 'https://images.daojia.com/dop/custom/01a443c96c08e02cd32ddd9958f82292.png', text: '房屋维修'
    }]
    let secnavConfig = [{
        src: 'https://images.daojia.com/dop/custom/d8bee5c0c7c859fe16ec4048bafe4472.png', text: '家电维修'
    }, {
        src: 'https://images.daojia.com/dop/custom/d8bee5c0c7c859fe16ec4048bafe4472.png', text: '家电维修'
    }, {
        src: 'https://images.daojia.com/dop/custom/d8bee5c0c7c859fe16ec4048bafe4472.png', text: '家电维修'
    }, {
        src: 'https://images.daojia.com/dop/custom/d8bee5c0c7c859fe16ec4048bafe4472.png', text: '家电维修'
    }, {
        src: 'https://images.daojia.com/dop/custom/d8bee5c0c7c859fe16ec4048bafe4472.png', text: '家电维修'
    }, {
        src: 'https://images.daojia.com/dop/custom/d8bee5c0c7c859fe16ec4048bafe4472.png', text: '家电维修'
    }, {
        src: 'https://images.daojia.com/dop/custom/d8bee5c0c7c859fe16ec4048bafe4472.png', text: '家电维修'
    }, {
        src: 'https://images.daojia.com/dop/custom/d8bee5c0c7c859fe16ec4048bafe4472.png', text: '家电维修'
    }, {
        src: 'https://images.daojia.com/dop/custom/d8bee5c0c7c859fe16ec4048bafe4472.png', text: '家电维修'
    }, {
        src: 'https://images.daojia.com/dop/custom/d8bee5c0c7c859fe16ec4048bafe4472.png', text: '家电维修'
    }]
    return (
        <div className="homenav-wrapper">
            <div className="fir-navs">
                {firnavConfig.map((item, index) => {
                    return (
                        <span className="fir-nav" key={index+item}>
                            <div className="fir-nav-icon">
                                <img src={item.src} alt="" />
                            </div>
                            <span className="fir-nav-text">
                                {item.text}
                            </span>
                        </span>
                    )
                })}
            </div>
            <div className="sec-navs">
                {secnavConfig.map((item, index) => {
                    return (
                        <span className="sec-nav" key={index+item}>
                            <div className="sec-nav-icon">
                                <img src={item.src} alt="" />
                            </div>
                            <span className="sec-nav-text">
                                {item.text}
                            </span>
                        </span>
                    )
                })}
            </div>
        </div>
    )
}
export default HomeNav
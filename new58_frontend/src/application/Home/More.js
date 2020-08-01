import React, { useState } from 'react';
import './more.css'
export default function More() {
    const [content, setContent] = useState([{
        text: '南昌保洁'
    }, {
        text: '南昌保姆'
    }, {
        text: '南昌搬家货运'
    }, {
        text: '南昌家电数码'
    }, {
        text: '南昌汽车'
    }, {
        text: '南昌健康'
    }])
    const [active, setActive] = useState(0)
    const contents = [
        {
            order: 0,
            title: '热门服务',
            content: [{
                text: '南昌保洁'
            }, {
                text: '南昌保姆'
            }, {
                text: '南昌搬家货运'
            }, {
                text: '南昌家电数码'
            }, {
                text: '南昌汽车'
            }, {
                text: '南昌健康'
            }]
        }, {
            order: 1,
            title: '热门城市',
            content: [{
                text: '北京58到家'
            }, {
                text: '上海58到家'
            }, {
                text: '广州58到家'
            }, {
                text: '深圳58到家'
            }, {
                text: '苏州58到家'
            }, {
                text: '天津58到家'
            }]
        }, {
            order: 2,
            title: '周边城市',
            content: [{
                text: '抚州58到家'
            }, {
                text: '九江58到家'
            }, {
                text: '鹰潭58到家'
            }, {
                text: '新余58到家'
            }, {
                text: '景德镇58到家'
            }, {
                text: '宜春58到家'
            }]
        }, {
            order: 3,
            title: '知识内容',
            content: [{
                text: '咨询'
            }, {
                text: '问答'
            }, {
                text: '百科'
            }, {
                text: '聚合会'
            }, {
                text: '食谱'
            }, {
                text: '工具'
            }]
        }]
    const handleClick = (e) => {
        const activeIndex = e.target.getAttribute('data-index')
        setActive(parseInt(activeIndex))
        setContent(contents[activeIndex].content)
    } 
    return (
        <>
            <div className="more-tab">
                {
                    contents.map((item, index) => {
                        return (
                            <span
                                onClick={handleClick}
                                className={active === index?'active-box':'tab-box'}
                                data-index={index}
                                key={index + item}
                            >{item.title}
                            </span>
                        )
                    })
                }
            </div>
            <div className="more-content">
                {
                    content.map((item, index) => {
                        return (
                            <div className="more-box" key={index + item}>
                                {item.text}
                            </div>
                        )
                    })
                }
            </div>
            <div className="see-more">
                <p>查看更多</p>
            </div>
        </>
    )
}
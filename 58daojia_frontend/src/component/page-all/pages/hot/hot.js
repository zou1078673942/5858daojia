import React, { useState, useEffect } from 'react';
import './hot.css'
import Item from './item'
import {Link} from 'react-router-dom'
export default function Hot() {
    const [AllList, setState] = useState({});
    useEffect(() => {
        fetch('http://localhost:8080/all/all')
            .then(data => data.json())
            .then(res => setState(res))

    }, []);
    const hot = AllList.hot;
    return (

        <div>
            <div className='img'>
                <img style={{ width: '7rem' }} src='https://images.daojia.com/dop/custom/9ae5199ea57920870ee5fd1a215ab9d6.png' />
            </div>
            <div className='wenzi'>---- 热门 ----</div>
            <div className='hot'>
                <div className='all_item'>
                    {
                        hot?.map((item, index) => {
                            return (
                                <Link to='/detail'>
                                <Item src={item.src} content={item.name} key={index} />
                                </Link>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
}


import React from 'react';
import './item.css'
export default function Item(props){
    return (
        <div className='itemss'>
            <div className='img'><img style={{width:'1.8rem'}}src={props.src} alt=""/></div>
            <div className='item_wenzi'>{props.content}</div>
        </div>
    )
}
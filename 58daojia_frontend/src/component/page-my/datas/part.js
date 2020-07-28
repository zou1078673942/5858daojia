import React from 'react';
import './part.css'
export default function Part(props) {
        return (
                <div className='data_box'>
                        <div className='a'>{props.wait.name}</div>
                        <div></div>
                        <div className='b'>{props.wait.content}</div>
                </div>
        )
}

import React from 'react';
export default function Part(props) {
//     console.log(props.wait.num)
    return (
        
            <div className='img_box'>
                    <div>{props.wait.num}</div>
                    <div>{props.wait.content}</div>
            </div>
        
    )
}

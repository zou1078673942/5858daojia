import React,{useState,useEffect} from 'react';
import './hot.css'
import Item from './item'
export default function Hot(){
        const [BabysitList, setState] = useState({});
        useEffect(() => {
            fetch('http://localhost:8080/all/all')
                .then(data => data.json())
                .then(res => setState(res))

        }, []);
        const baby_sitter = BabysitList.baby_sitter;
    

        return ( 
            <div>
            <div className='img'>
                <img style={{width:'7rem'}} src='https://static.daojia.com/assets/project/dj-weapp/images/headImg/bmys.png'/>
            </div>
            <div className='wenzi'>---- 保姆月嫂 ----</div>
            <div className ='hot'>
            <div className = 'all_item'>
            { 
               baby_sitter?.map((item,index)=>{
                return(
                    <Item src={item.src} content={item.content} key={index}/>
                )})       
                }
            
            <Item />
            </div>
        </div>
        </div>
         );
}


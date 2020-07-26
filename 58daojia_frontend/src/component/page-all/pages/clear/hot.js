import React,{useEffect,useState} from 'react';
import './hot.css'
import Item from './item'
export default function Hot(){    
         const [ClearList, setState] = useState({});
         useEffect(() => {
             fetch('http://localhost:8080/all/all')
                 .then(data => data.json())
                 .then(res => setState(res))
     
         }, []);
         const clear = ClearList.clear;
        return ( 
            <div>
            <div className='img'>
                <img style={{width:'7rem'}} src='https://static.daojia.com/assets/project/dj-weapp/images/headImg/baojie.png'/>
            </div>
            <div className='wenzi'>---- 日常保洁 ----</div>
            <div className ='hot'>
            <div className = 'all_item'>
            { 
               clear&&clear.map((item,index)=>{
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


import React from 'react';
import { Route , Link} from 'react-router-dom'
import Hot from './pages/hot/hot'
import add from './icons/add.png'
import Clear from './pages/clear/hot'
import Bmys from './pages/bmys/hot'

import './index.css'
import Footer from '../pubilc/Footer';


function All(){
    let routerConfig = [
        {path:'/all/',title:'热门',exact:true,component:Hot},
        {path:'/all/clear',title:'保洁清洗',exact:true,component:Clear},
        {path:'/all/bmys',title:'保姆月嫂',exact:true,component:Bmys},
        {path:'/all/bj',title:'搬家',exact:true,component:Hot},
        {path:'/all/fwwx',title:'房屋维修',exact:true,component:Clear},
        {path:'/all/smwx',title:'数码维修',exact:true,component:Bmys},
        {path:'/all/smaz',title:'上门安装',exact:true,component:Hot},
        {path:'/all/xhms',title:'鲜花美食',exact:true,component:Clear},
        {path:'/all/lr',title:'丽人',exact:true,component:Bmys},
        {path:'/all/jtxh',title:'家庭洗护',exact:true,component:Hot},
        {path:'/all/bmfw',title:'便民服务',exact:true,component:Clear},
    ]
    return (
          <div>
            <div className="nav">
                <div className='search'>擦玻璃</div>
                <div className='add'>
                    <img src={add} alt=""/>
                </div>
            </div>
                <div className = 'mainDiv'>
                <div className = 'leftNav'>
                    
                    <ul>
                       {
                        routerConfig.map((item,index)=>{
                            return(
                            <div className='link'>
                            <Link to ={item.path}>
                             <div className='wenzi1' style={{'color':'black'}}>{item.title}</div>
                             </Link>
                             </div>
                            )
                        })
                       }
                    </ul>
                </div>
                <div className="rightMain">
               { 
               routerConfig.map((item,index)=>{
                return(
                <Route 
                key={index} path={item.path} exact={item.exact} 
                component={item.component}
                />
                )})       
                }
                </div>
            </div>
            <Footer/>
            </div>
    )
}
export default All
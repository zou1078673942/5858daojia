import React ,{Component}from 'react';
import Part from './part'
import './part.css'
class Data extends Component {
    state = { 
        data:[{name:'地址',content:''},{name:'加盟',content:'企业入驻/个人发布'},{name:'聊天设置',content:''},{name:'帮助',content:''},]
     }
    render() { 
        return ( 
            <div className='out_box'>
            <Part wait={this.state.data[0]} />
            <Part wait={this.state.data[1]} />
            <Part wait={this.state.data[2]} />
            <Part wait={this.state.data[3]} />
            </div>
         );
    }
}
 
export default Data;
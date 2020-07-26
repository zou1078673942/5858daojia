import React ,{Component}from 'react';
import './collect.css'
import Part from './part'
// import wait from '../icons/wait.png';
class Wait extends Component {
    state = { 
        wait:[{num:0,content:'卡券'},{num:0,content:'收藏卡券'},{num:0,content:'收藏店铺'},{num:0,content:'足迹'},]
     }
    render() { 
        return ( 
            <div className='collect'>
            <Part wait={this.state.wait[0]} />
            <Part wait={this.state.wait[1]} />
            <Part wait={this.state.wait[2]} />
            <Part wait={this.state.wait[3]} />
            </div>
         );
    }
}
 
export default Wait;
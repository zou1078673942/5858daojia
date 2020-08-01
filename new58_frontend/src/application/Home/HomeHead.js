import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './homehead.css'
import { connect } from 'react-redux';
function HomeHead(props) {
    return (
        <div className="home-head-wrapper">
            <div className="loge"> 
                <Link to='/home' className="head-loge">
                </Link>
            </div>
            <div className="topbar-wrap">
                <Link to="/home/address" className="city">
                &#xe634;{props.city}
                </Link>
                <input type="text" placeholder="(loge)搜索"/>
            </div>
        </div>
    )
}
// const mapStateToProps = (state) => ({
//     city: state.city.city
// })
// export default connect(mapStateToProps)(memo(HomeHead))
export default HomeHead
import React, { useState, useEffect } from 'react';
import './index.css'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Help from './component/Help';
import MyInfo from './component/MyInfo';


function Info() {
    return (
        <BrowserRouter>
            <Route exact path='/info' component={MyInfo} />
            <Route path='/info/help' component={Help} />
        </BrowserRouter>
    )
}
export default Info
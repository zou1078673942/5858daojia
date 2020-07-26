import React from 'react';
import HomePage from './component'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import City from './child-page/city/City'
import Footer from '../pubilc/Footer';

export default function Home() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Route exact path='/home' component={HomePage} />
                <Route path='/home/city' component={City} />
            </BrowserRouter>
        </div>
    )
}
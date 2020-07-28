import React from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import './App.css';
import Home from './component/page-home'
import All from './component/page-all'
import Info from './component/page-info'
import My from './component/page-my'
import Footer from './component/pubilc/Footer';
import Detail from './component/page-all/details/air_clean/detail'
import MyOrder from './component/page-my/order/myOrder/MyOrder';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="page">
          <Route exact path='/home' component={Home} key="home"/>
          <Route path='/all' component={All} key="all" />
          <Route path='/info' component={Info} key="info"/>
          <Route path='/my' component={My} key="my"/>
          <Route path='/detail' component={Detail} />
          <Redirect from='/' to='/home'/>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
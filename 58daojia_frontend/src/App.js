import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './component/page-home'
import All from './component/page-all'
import Info from './component/page-info'
import My from './component/page-my'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="page">
          <Route exact path='/' component={Home} />
          <Route path='/All' component={All} />
          <Route path='/Info' component={Info} />
          <Route path='/My' component={My} />
        </div>
        <div className="footer">
          <ul>
            <li>
              <Link to="/" className="foot-link">
                <img src={require('./icon/shouye.png')} alt="" />
              </Link>

            </li>
            <li>
              <Link to="All" className="foot-link">
                <img src={require('./icon/fenlei.png')} alt="" />
              </Link>
            </li>
            <li>
              <Link to="Info" className="foot-link">
                <img src={require('./icon/xiaoxi.png')} alt="" />
              </Link>
            </li>
            <li>
              <Link to="My" className="foot-link">
                <img src={require('./icon/wode.png')} alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
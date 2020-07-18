import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Home from './component/page-home'
import All from './component/page-all'
import Info from './component/page-info'
import My from './component/page-my'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Home}/>
        <Route path='/All' component={All}/>
        <Route path='/Info' component={Info}/>
        <Route path='/My' component={My}/>
      </BrowserRouter>
    </div>
  );
}

export default App;

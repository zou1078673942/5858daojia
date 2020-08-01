import React from 'react';
import { Provider } from 'react-redux';
import routes from './routes';
import { renderRoutes } from "react-router-config";
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      {renderRoutes(routes)}
    </HashRouter>
  );
}

export default App;

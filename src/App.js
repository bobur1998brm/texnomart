import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import ProductShow from './pages/product/ProductShow'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
 
  return (
      <Router>
      <div className="app">
      <Switch>
      
        <Route exact path="/" component={Home}/>
        <Route exact path="/products/:productInfo" component={ProductShow} />

      </Switch>
      </div>
    </Router>
  );
}

export default App;

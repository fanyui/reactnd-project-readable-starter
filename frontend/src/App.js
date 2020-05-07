import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'

import './App.css';
import Home from './Home'
import Categories from '../src/component/Categories'
function App() {

  return (
    <Router >
        <>
          <Categories />
          <LoadingBar />
        <div className='container'>
          <Route path='/' exact component={Home} />

        </div>
        </>
    </Router>
  );
}

export default App;

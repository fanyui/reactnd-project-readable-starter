import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'

import './App.css';
import Home from './Home'
import Categories from './component/Categories'
import Post from './component/Post'
function App() {

  return (
    <Router >
        <>
          <Categories />
          <LoadingBar />
        <div className='container'>
          <Route path='/' exact component={Home} />
          <Route path='/:category' exact component={Home} />
          <Route path='/:category/:id' exact component={Post}/>

        </div>
        </>
    </Router>
  );
}

export default App;

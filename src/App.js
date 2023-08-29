import './App.css';
import Navbar from './components/Navbar'
import News from './components/News';

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route path = '/' element = {<News key="general"  pageSize={6} country="us" category="general"/>}/>
        </Routes>
        <Routes>
          <Route exact path = '/business' element = {<News key="business" pageSize={6} country="us" category="business"/>}/>
        </Routes>
        <Routes>
          <Route exact path = '/entertainment' element = {<News key="entertainment" pageSize={6} country="us" category="entertainment"/>}/>
        </Routes>
        <Routes>
          <Route exact path = '/health' element = {<News key="health" pageSize={6} country="us" category="health"/>}/>
        </Routes>
        <Routes>
          <Route exact path = '/science' element = {<News key="science" pageSize={6} country="us" category="science"/>}/>
        </Routes>
        <Routes>
          <Route exact path = '/sports' element = {<News key="sports" pageSize={6} country="us" category="sports"/>}/>
        </Routes>
        <Routes>
          <Route exact path = '/technology' element = {<News key="technology" pageSize={6} country="us" category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}


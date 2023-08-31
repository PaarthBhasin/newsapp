import './App.css';
import Navbar from './components/Navbar'
import News from './components/News';

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  state={
    progress:0
  }
  setProgress = (progress) =>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
          <Route path = '/' element = {<News setProgress={this.setProgress} apiKey={this.apiKey} key="general"  pageSize={6} country="in" category="general"/>}/>
        </Routes>
        <Routes>
          <Route exact path = '/business' element = {<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={6} country="in" category="business"/>}/>
        </Routes>
        <Routes>
          <Route exact path = '/entertainment' element = {<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={6} country="in" category="entertainment"/>}/>
        </Routes>
        <Routes>
          <Route exact path = '/health' element = {<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={6} country="in" category="health"/>}/>
        </Routes>
        <Routes>
          <Route exact path = '/science' element = {<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={6} country="in" category="science"/>}/>
        </Routes>
        <Routes>
          <Route exact path = '/sports' element = {<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={6} country="in" category="sports"/>}/>
        </Routes>
        <Routes>
          <Route exact path = '/technology' element = {<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={6} country="in" category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}


import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App=()=> {
  const pageSize = "12";
  const apiKey=process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  
  return (
    <div>
        <Router>
          <NavBar />
          <LoadingBar
          hieght={10}
          color='#f11946'
          progress={progress}
          />
          <Switch>
            <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="General" pageSize={pageSize} country="in" category="General" /></Route>
            <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="Business" pageSize={pageSize} country="in" category="Business" /></Route>
            <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={ apiKey} key="Entertainment" pageSize={pageSize} country="in" category="Entertainment" /></Route>
            <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="General" pageSize={pageSize} country="in" category="General" /></Route>
            <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="Health" pageSize={pageSize} country="in" category="Health" /></Route>
            <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="Science" pageSize={pageSize} country="in" category="Science" /></Route>
            <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="Sports" pageSize={pageSize} country="in" category="Sports" /></Route>
            <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="Technology" pageSize={pageSize} country="in" category="Technology" /></Route>

          </Switch >
        </Router >
      </div >
    ) 
    
  }
  
  export default App;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //795b51f0b0e745c1a6427fcfa4c2e9c1-news api
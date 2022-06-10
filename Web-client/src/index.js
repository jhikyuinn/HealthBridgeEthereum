import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route,Link } from "react-router-dom";
import Patient from './patient';
import Search from './search'; 
import Create from './Input';
import heart from './assets/heart.gif';

import './index.css'

const FullApp = () => (
  <Router>
     <nav>
      <header className="App-header">
          <h1 className="App-title text-center"><img src={heart} alt="" style={{width:200, height:90}} />   Health Bridge FHIR</h1>
      
        <Link className="list text-right" to="/"> Smart </Link>
        <Link className="list text-right" to="/search"> Search </Link>
        <Link className="list text-right" to="/create"> Input </Link>
        </header>

        
      </nav>
    
      <Routes>
      <Route path="/" element={<Patient/>}/> 
      <Route path="/search" element={<Search/>}/>
      <Route path="/create" element={<Create/>}/>
      </Routes>
    
  </Router>
);

ReactDOM.render(<FullApp />, document.getElementById('root'));

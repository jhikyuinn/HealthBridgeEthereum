import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route,Link } from "react-router-dom";
import Patient from './patient'
import Search from './search' 

import './index.css'

const FullApp = () => (
  <Router>
     <nav>
      <header className="App-header">
          <h1 className="App-title text-center">Health Bridge FHIR</h1>
      
        <Link className="list" to="/search"> Search </Link>
        <Link className="list" to="/"> Input </Link>
        
        </header>
      </nav>
    
      <Routes>
      <Route path="/" element={<Patient/>}/> 
      <Route path="/search" element={<Search/>}/>
      </Routes>
    
  </Router>
);

class App extends React.Component {
  
  render() {
    return (
      <div>
      </div>

    );
  }
}

ReactDOM.render(<FullApp />, document.getElementById('root'));

// import logo from './logo.svg';
// import React from 'react';
// import Counter from './components/Counter';
// import Factorial from './components/Factorial';
import About from './components/About'
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from "./components/Textform"
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode,setmode]=useState("light")
  const [alert,setalert]=useState(null)
  const togglemode=()=>{
    if (mode==="light") {
      setmode("dark")
      document.body.style.backgroundColor="grey"
      showalert("dark mode enabled","success")
      document.title="mb's-dark mode"
      
    }
    else{
      setmode("light")
      document.body.style.backgroundColor="white"
      showalert("light mode enabled","success")
      document.title="mb's-light mode"

    }
  }
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type,
    } )
    setTimeout(() => {
      setalert(null)
      
    }, 2000);
  }



  return (
  <>
  <Navbar title="msus" mode={mode} togglemode={togglemode} />
  <Alert alert={alert}/>
  {/* <Router> */}
    <div className="my-3 container">
          
          
          <Textform mode={mode} showalert={showalert}/>
  </div>
  
  
  

  </>
    
    );
}

export default App;

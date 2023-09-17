import React ,{useState} from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Place from './components/PlaceTovisit';
import About from './components/About';
import Contact from './components/contact';
import Home from './components/Home';



// const useStyles=makeStyles((theme)=>({
//   root:{
//     minHeight:'100vh',
//     width:"100vw",
//     margin:"0px",
//     padding:"0px",
    

//   }
// }))

function App() {
  // const classes =useStyles();
 
  return <div className="root">
   
    <CssBaseline/> 
    <Header/>
    <Home/>
    <About/>
    <Place/>
    <Contact/>

    
  </div>
 
}

export default App;

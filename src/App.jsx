import React ,{useState} from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Place from './components/PlaceTovisit';
import About from './components/About';


const useStyles=makeStyles((theme)=>({
  root:{
    minHeight:'100vh',
    backgroundRepeat:'no-repeat',
    backgroundSize: 'cover'

  }
}))

function App() {
  const classes =useStyles();

  return <div className={classes.root}>
   
    <CssBaseline/> 
    <Header/>
    <About/>
    
    <Place/>

    
  </div>
 
}

export default App;

import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import Array from '../Api';
import useWindowPosition from '../hook/useWindowPosition';
import ImageCard from './card';
import { Component } from 'react';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
 
];

const useStyles=makeStyles((theme)=>({
  root:{
    height:'100vh',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    [theme.breakpoints.down('md')]:{
        flexDirection:'column',
    },
  },
  colorText: {
    color: "green",
    fontSize: "1.5rem",
    fontFamily: 'Roboto Condensed'   
  },
  title: {
    color: "black",
    fontSize: "2rem",
    fontFamily: 'Roboto Condensed',
  },
  container:{
    width:"80%",
    display:"flex",
    alignItems: "center",
    justifyContent:"center" ,
    flexDirection:"column"
 }
 
}))

function Place() {
  const classes =useStyles();
  //  const checked = useWindowPosition('header');
  return <div className={classes.root} id='khanaa'>
    <div className={classes.container}>
      <div>.....</div>
       <span className={classes.colorText}>Special</span>
      <h3 className={classes.title}>Menu of the week</h3>
      <Carousel breakPoints={breakPoints} >
        {Array.map(item => <ImageCard  place={item}/>)} 
      </Carousel>  
      </div>  
  </div>
}

export default Place;
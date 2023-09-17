import React from 'react'
import { Link as Scroll } from 'react-scroll';
import { AppBar, Toolbar, IconButton,Collapse } from "@material-ui/core";
import { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
 
    icon: {
      color: "#fff",
      fontSize: "2rem",
    },
    appbarTitle: {
      margin:"10px",
      fontSize:"20px" ,
      fontFamily: 'Source Sans Pro' ,
      color:"grey",
      flexGrow:"1.5",
      cursor:"pointer",
      
    },
  
    appbarWrapper: {
      width: "90%",
      margin: "0 auto",
      display:"flex",
  
    
    },
    colorText: {
      color: "#5AFF3D",
      fontSize: "3rem",
      fontFamily: 'Roboto Condensed'
      
    },
    container:{
       width:"100%",
       display:"flex",
       alignItems: "center",
       justifyContent:"center",
       padding:"0 0 0 100px" ,
  
    }
    ,
    title: {
      flexGrow:"3",
      color: "black",
      fontSize: "2.5em",
      fontFamily: 'Lato'
     
    },
    
    container1:{
      flexGrow:"3",
      width:"100%"
  
    },
    goDown:{
        color:'#5AFF3D',
        fontSize:'2rem'
    },
   
    
    image:{
      
      width:"70%",
      height:"90vh", 
      marginTop:"100px"
     
    }
  }));
const Home = () => {
    const classes = useStyles();
  const [checked, setChecked] = useState(false);
  return (
    <div className={classes.container} id="home">
      
     
    <div className={classes.container1} >
    <h1 className={classes.title}>
    {/* <h1  className="appname1">HUNGR<span style={{color:"green"}}>AZy</span></h1> */}

      <span  className={classes.colorText}>Annyeong Haseyo</span><br/>
        Try the most delicious<br/>
         food <span>of the weak</span> 
        </h1>
        <h2 style={{fontFamily: 'Patrick Hand'}}>Take a seat grab a treat</h2>
        <Scroll to="place-to-visit" smooth={true}>
        <IconButton>
           < ExpandMoreIcon className={classes.goDown}></ExpandMoreIcon>
        </IconButton>
        </Scroll>
    </div>
         <img className={classes.image} id="img1" src="https://images.pexels.com/photos/7492234/pexels-photo-7492234.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
  </div>
  )
}

export default Home
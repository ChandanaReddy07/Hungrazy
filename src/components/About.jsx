import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';



const useStyles=makeStyles((theme)=>({
  root:{
    height:'100vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    [theme.breakpoints.down('md')]:{
        flexDirection:'column',
    },
  },

  colorText: {
    color: "green",
    fontSize: "2rem",
    fontFamily: 'Roboto Condensed'
    
  },
 
  title: {
    flexGrow:"3",
    color: "black",
    fontSize: "2.5rem",
    fontFamily: 'Roboto Condensed',
  },
  container:{
    width:"1000px",
    display:"flex",
    alignItems: "center",
    justifyContent:"center" 
 }
 ,
  
  container1:{
      padding:"100px"   
  },
  goDown:{
      color:'#5AFF3D',
      fontSize:'2rem'
  }
  ,
  image:{
    flexGrow:"3",
    width:"900px",
    height:"440px", 
    borderRadius:"8px",
    marginTop:"100px"
   
  }
}))

function About() {
  const classes =useStyles();
  //  const checked = useWindowPosition('header');
  return <div className={classes.root} id="place-to-visit">
      <div className={classes.container}>
      <img className={classes.image} src="https://images.pexels.com/photos/4198020/pexels-photo-4198020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
      <div className={classes.container1}>
      <span className={classes.colorText} >About us</span><br/>
     
    <h2 className={classes.title}>  We cook the best<br/>
      tasty food<br/></h2>
     <span style={{  fontSize: "1.5rem",fontFamily: 'Patrick Hand'}}> We cook the best food in the entire city, with excellent customer service, the best meals and at the best price, visit us.</span>
     
      </div>
      </div>
     
  </div>
}

export default About;
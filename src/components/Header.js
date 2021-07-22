import { AppBar, Toolbar, IconButton,Collapse } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState ,useEffect} from "react";
import { Link as Scroll } from 'react-scroll';
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex", 
    alignItems: "center",
    justifyContent:"center",
    height: "100vh",
    fontFamily: "Nunito",
    background: "white",
  },
  appbar: {
    background: "white",
    color:"black",
  
  },
  appname:{
    flexGrow:"3",
    fontFamily: 'Righteous',
    fontSize:"40px"
  },
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
    width: "80%",
    margin: "0 auto",
    display:"flex",
  //  justifyContent:"flex-end",
  
  },
  colorText: {
    color: "#5AFF3D",
    fontSize: "4rem",
    fontFamily: 'Roboto Condensed'
    
  },
  container:{
     width:"1200px",
     display:"flex",
     alignItems: "center",
     justifyContent:"center" 
  }
  ,
  title: {
    flexGrow:"3",
    color: "black",
    fontSize: "2.5rem",
    fontFamily: 'Lato'
   
  },
  
  container1:{
    flexGrow:"3",
    width:"200px"

  },
  goDown:{
      color:'#5AFF3D',
      fontSize:'2rem'
  }
  ,
  image:{
    
    width:"500px",
    height:"540px", 
    marginTop:"100px"
   
  }
}));

function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appname}>HUNGR<span style={{color:"green"}}>AZy</span></h1>
          <Scroll to="home" smooth={true}>
          <h1 className={classes.appbarTitle}>HOME</h1>
          </Scroll>
         
          <Scroll to="place-to-visit" smooth={true}>
           <h1 className={classes.appbarTitle}>ABOUT</h1>
            </Scroll>
         
           <Scroll to="khanaa" smooth={true}>
            <h1 className={classes.appbarTitle}>MENU</h1>
            </Scroll>
         
          <Scroll to="place-to-visit" smooth={true}>
          <h1 className={classes.appbarTitle}>CONTACT</h1>
            </Scroll>
         
         
        </Toolbar>
      </AppBar>
      <Collapse  in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}>

      <div className={classes.container} id="home">
      
     
        <div className={classes.container1} >
        <h1 className={classes.title}>
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
             <img className={classes.image} src="https://images.pexels.com/photos/7492234/pexels-photo-7492234.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
      </div></Collapse>
     
    </div>
  );
}

export default Header;
 
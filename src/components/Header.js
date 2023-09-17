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
    fontFamily: "Nunito",
    background: "white",
    width:"100%"
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
    fontSize:"1rem" ,
    fontFamily: 'Source Sans Pro' ,
    color:"grey",
    flexGrow:"1.5",
    cursor:"pointer",
    
  },

  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
    display:"flex",

  
  },
  colorText: {
    color: "#5AFF3D",
    fontSize: "4rem",
    fontFamily: 'Roboto Condensed'
    
  },
 
  title: {
    flexGrow:"3",
    color: "black",
    fontSize: "2.5rem",
    fontFamily: 'Lato'
   
  },
 
  goDown:{
      color:'#5AFF3D',
      fontSize:'2rem'
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
          <h1 className={classes.appname} id="appname">HUNGR<span style={{color:"green"}}>AZy</span></h1>
          <Scroll to="home" smooth={true}>
          <h1 className={classes.appbarTitle}>HOME</h1>
          </Scroll>
         
          <Scroll to="place-to-visit" smooth={true}>
           <h1 className={classes.appbarTitle}>ABOUT</h1>
            </Scroll>
         
           <Scroll to="khanaa" smooth={true}>
            <h1 className={classes.appbarTitle}>MENU</h1>
            </Scroll>
         
          <Scroll to="contact" smooth={true}>
          <h1 className={classes.appbarTitle}>CONTACT</h1>
            </Scroll>
         
         
        </Toolbar>
      </AppBar>
    
    </div>
  );
}

export default Header;
 
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Collapse } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

  colorText: {
    color: "green",
    fontSize: "2rem",
    fontFamily: "Roboto Condensed",
  },

  title: {
    flexGrow: "3",
    color: "black",
    fontSize: "2.5rem",
    fontFamily: "Roboto Condensed",
  },
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding:"60px"
  },
  container1: {
    padding: "80px",
    paddingLeft:"0"
  },

}));

function Contact() {
  const classes = useStyles();
 
  return (
  
      <div className={classes.container} id="contact">
        <div className={classes.container1} id="container1">
          <span className={classes.colorText}>Let's talk</span>
          <br />

          <h2 className={classes.title}>
            Contact us 
            <br />
          </h2>
          <span style={{ fontSize: "1.5rem", fontFamily: "Patrick Hand" }}>
            {" "}
            If you want to reserve a table in our restaurant, contact us and we
            will attend you quickly, with our 24/7 chat service.
          </span>
        </div>
        <Button variant="contained" style={{margin:"30px 0 30px 0"}} color="secondary">
          Contact us now
        </Button>
      </div>
    
  );
}

export default Contact;

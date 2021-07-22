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
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },

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
    width: "1000px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    padding: "100px",
  },
  goDown: {
    color: "#5AFF3D",
    fontSize: "2rem",
  },
  image: {
    flexGrow: "3",
    width: "900px",
    height: "440px",
    borderRadius: "8px",
    marginTop: "100px",
  },
}));

function Contact() {
  const classes = useStyles();
  //  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="contact">
      <div className={classes.container}>
        <div className={classes.container1}>
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
        <Button variant="contained" color="secondary">
          Contact us now
        </Button>
      </div>
    </div>
  );
}

export default Contact;

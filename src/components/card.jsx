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

const useStyles = makeStyles({
  root: {
    maxWidth:250,
    minWidth:245,
    backgroundColor:'(1,1,1,0.5)rgba',
    margin:'20px',
    height:250
  },
  media:{
    height:200,
  },
  title:{
    fontFamily:'Nunito',
    fontSize:'2rem',
    color:'black',
    fontWeight:'bold'

  },
  desc:{
    fontFamily:'Nunito',
    fontSize:'1.0rem',
    color:'#fff',
  
  }
});

export default function ImageCard({ place,checked }) {
  const classes = useStyles();

  return (
  //   <Collapse  in={checked}
  //   {...(checked ? { timeout: 1000 } : {})}
  //  >
   
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
         
          image={place.url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography style={{fontSize:'1rem'}} gutterBottom variant="h5" component="h3" className={classes.title}>
            {place.location}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
            {place.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
    // </Collapse>
  );
}
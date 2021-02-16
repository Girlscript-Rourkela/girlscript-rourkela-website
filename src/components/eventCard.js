import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({ 
  root: {
    marginTop:'2%',
    height: 150,
    width: 300
    
  },
  cover: {
    width: 65,
    height:60,
    margin: 'auto'
  }
}));

export default function MediaControlCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (


    <Card className={classes.root}>
      <div className={classes.details}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.cover}
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography variant="h6" component="h6" >
            {props.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" component="p">
          {props.stats}
          </Typography>
        </CardContent>
      </CardActionArea>
      </div>
    </Card>




    
  );
}

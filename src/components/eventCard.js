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
    display: 'flex',
    marginTop:'2%',
    flexDirection:'column',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 60,
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
          <Typography variant="h5" component="h5">
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

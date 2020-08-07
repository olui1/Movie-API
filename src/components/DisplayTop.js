import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(8),
    
    color: theme.palette.text.primary,
  },
}));

export default function DisplayTop(props) {
  const classes = useStyles();

  return (
    
    
      <Grid container className={classes.root}>
        <Grid item xs={12}>
        <ol style={{ padding: '0px' }}>
        
          
            <Paper className={classes.paper}>
              {
                props.name.map(({ id, title, release_date, vote_average}) => 
                  <li key={id} style={{fontSize: '20px', fontFamily:'verdana'}}>
                    console: {console.log(title)}
                    Title: {title} <br />
                    Release Date: {release_date} <br />
                    Rating: {vote_average}
                  </li>
                )
              } 
            </Paper>
          
        
        </ol>
        </Grid>
      </Grid>
      
    
   
  )
}

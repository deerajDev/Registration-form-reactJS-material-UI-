import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
    marginTop:100,
    textAlign:'center'
  },
});

export default function Types(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Typography variant="h3" gutterBottom>
        {props.name}
      </Typography>
      
    </div>
  );
}

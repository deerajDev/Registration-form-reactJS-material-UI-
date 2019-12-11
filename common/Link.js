import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft:40,
    marginTop:20,
    '& > * + *': {
      marginLeft: theme.spacing(4),
    },
    link:{
        marginLeft:40,
    }
  },
 
}));

export default function Links(props) {
  const classes = useStyles();
  const preventDefault = event => console.log("presed");

  return (
    <Typography className={classes.root}>
      <Link  href="#" onClick={preventDefault} >
        {props.name}
      </Link>
    </Typography>
  );
}

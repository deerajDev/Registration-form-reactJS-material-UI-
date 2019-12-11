import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
  container:{
    display:"flex",
      justifyContent:"center",
      marginTop:50
      
  }
})(Button);



const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    marginTop:10,
  },
}));



export default function CustomizedButtons(props) {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <BootstrapButton 
      variant="contained" 
      color="primary" disableRipple 
      className={classes.margin}
      fullWidth={props.fullWidth}>
        {props.label}
      </BootstrapButton>
    </Container>
  );
}

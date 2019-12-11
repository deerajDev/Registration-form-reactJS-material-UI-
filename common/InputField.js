import React from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        marginTop:20,
        width: 400,
      },
      container:{
        display:"flex",
          justifyContent:"center"
          
      }
    },
  }));
  



export default function InputField(props) {
    const classes = useStyles();
    return (
      <Container className={classes.container}>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" 
            label={props.label} 
            color="primary"
            size={props.size}
            fullwidth={props.fullwidth}
            type={props.type}
            required={props.required}/>
      </form>
      </Container>
    )
}



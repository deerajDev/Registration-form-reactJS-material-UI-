import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Heading from './common/Heading'
import Paper from '@material-ui/core/Paper';
import InputField from './common/InputField'
import Button from './common/Buttons'
import Link from './common/Link'


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop:10,
    borderRadius:30,

  },
}));

export default function LoginBody() {
  const classes = useStyles();

  return (
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <Heading name={"Sign-Up"}/>
      
      <Paper className={classes.root}>
     <InputField
     label={"email"}
     type={"email"}
     required={true}
     fullWidth={true}
     />

    <InputField
        label={"password"}
        type={"password"}
        required={true}
        fullWidth={true}
        />
        <InputField
        label={"Confirm-password"}
        type={"password"}
        required={true}
        fullWidth={true}
        />
      <Link
      name={"Already have an account ?"}
      />
      <Button
      label={"login"}
      fullWidth={true}
      />
    </Paper>
        
     
      </Container>
    </React.Fragment>
    
  
  );
}

import logo from './logo.svg';
import './App.css';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  textfield: {
    '& label': {
      color: 'grey', 
      left: 10,
      zIndex: 999,
    },
    '& div':{
      color: 'floralWhite',
      paddingBottom: 20,
      paddingLeft: 100,
      paddingRight: 100,
      paddingTop: 15,
    }
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="100" height="100"/>
        <Grid item xs={12}>
        <TextField 
        id="outlined-basic"
        label="Type Anything in Here"
        className={classes.textfield}
        color={'secondary'}
        multiline
        fullWidth
        />
        </Grid>
      </header>
    </div>
  );
}

export default App;

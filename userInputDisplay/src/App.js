import logo from './logo.svg';
import './App.css';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
  },
  textFieldContainer: {
    marginLeft: 150,
    marginRight: 150,
    marginTop: 150,
  }
}));

function App() {
  const classes = useStyles();
  const [text, setText] = React.useState('');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="250" height="250"/>
        <Grid container xs={12}>
        <Grid item xs={12} style={{marginRight: 10, marginLeft: 10}}>
          {/* <Typography variant='h1' noWrap={true}>{text}</Typography> */}
        </Grid>
        <Grid className={classes.textFieldContainer} item xs={12}>
        <TextField 
        id="outlined-basic"
        label="Type Anything in Here"
        className={classes.textfield}
        color={'secondary'}
        multiline
        fullWidth
        onChange={(text) => setText(text.target.value)}
        />
        </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;

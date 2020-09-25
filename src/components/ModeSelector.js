import React from 'react';
import Button from "@material-ui/core/Button";
import './ModeSelector.css'

import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  button: {
    marginLeft: '10px'
  }
}))

export default props => {
  const classes = useStyles();
  return (
    <div className="ModeSelector">
      <Button variant="contained" color="primary" onClick={() => props.onSelect('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')}>32 items</Button>
      <Button className={classes.button} variant="contained" color="secondary" onClick={() => props.onSelect('http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')}>1000 items</Button>
    </div>
  )
}

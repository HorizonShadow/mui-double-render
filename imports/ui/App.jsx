import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  content: {
    color: 'red'
  }
});

export default () => {
  const classes = useStyles();
  return(
    <div>
        <p className={classes.content}>This isn't working</p>
    </div>
  )
}
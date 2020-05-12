import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import { useStyles } from './Main.style';

function Main() {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Router>
        <Sidebar />
      </Router>
    </div>
  );
}

export default Main;

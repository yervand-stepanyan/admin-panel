import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { useStyles } from './Main.style';

function Main() {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Router>
        <Sidebar />
        <Header />
      </Router>
    </div>
  );
}

export default Main;

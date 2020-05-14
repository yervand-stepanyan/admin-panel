import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Toolbar from '@material-ui/core/Toolbar';

import Searchbar from '../Searchbar';
import { useStyles } from './Header.style';

function Header() {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar className={classes.toolbar}>
          <Searchbar />
          <div>
            <Button className={classes.button}>
              <PersonOutlineIcon />
              <ExpandMoreIcon />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;

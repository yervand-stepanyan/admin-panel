import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputBase from '@material-ui/core/InputBase';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';

import { SEARCH_PLACEHOLDER } from '../../globals/constants';
import { useStyles } from './Header.style';

function Header() {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <div className={classes.searchInputWrapper}>
              <InputBase
                placeholder={SEARCH_PLACEHOLDER}
                classes={{
                  root: classes.inputRoot,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </div>
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

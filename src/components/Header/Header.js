import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Toolbar from '@material-ui/core/Toolbar';

import Searchbar from '../Searchbar';
import { useStyles } from './Header.style';

function Header({ handleDrawerToggle }) {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          className={classes.menuButton}
          edge="start"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Searchbar />
        <div>
          <Button className={classes.button}>
            <PersonOutlineIcon />
            <ExpandMoreIcon />
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default Header;

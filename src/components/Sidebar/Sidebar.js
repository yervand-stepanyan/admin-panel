import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import ROUTES from '../../routes';
import logo from '../../assets/images/logoCustom.png';
import { useStyles } from './Sidebar.style';

function Sidebar() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Drawer
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
        className={classes.drawer}
        open={open}
        variant="temporary"
      >
        <div className={classes.logoAndIconWrapper}>
          <div className={classes.logoWrapper}>
            <Link to={ROUTES.home}>
              <img alt="logo" className={classes.logo} src={logo} />
            </Link>
          </div>
          <div>
            <IconButton className={classes.menuIcon}>
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Sidebar;

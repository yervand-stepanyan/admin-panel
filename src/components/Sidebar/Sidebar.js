import React from 'react';
import PropTypes from 'prop-types';

import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import DrawerContent from '../DrawerContent';

import { useStyles } from './Sidebar.style';

function Sidebar({ handleDrawerToggle, mobileOpen }) {
  const classes = useStyles();
  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <div className={classes.drawer}>
      <Hidden implementation="css" smUp>
        <Drawer
          anchor="left"
          classes={{
            paper: classes.drawerPaper,
          }}
          container={container}
          ModalProps={{
            keepMounted: true,
          }}
          onClose={handleDrawerToggle}
          open={mobileOpen}
          variant="temporary"
        >
          <DrawerContent />
        </Drawer>
      </Hidden>
      <Hidden implementation="css" xsDown>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          open
          variant="permanent"
        >
          <DrawerContent />
        </Drawer>
      </Hidden>
    </div>
  );
}

Sidebar.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
};

export default Sidebar;

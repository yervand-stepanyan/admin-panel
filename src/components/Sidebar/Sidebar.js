import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Collapse from '@material-ui/core/Collapse';
import Drawer from '@material-ui/core/Drawer';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';

import logo from '../../assets/images/logoCustom.png';
import { PROJECTS } from '../../globals/constants';
import ROUTES from '../../routes';
import { useStyles } from './Sidebar.style';

function Sidebar() {
  const classes = useStyles();
  const [openList, setOpenList] = useState(false);

  const handleListClick = () => {
    setOpenList(!openList);
  };

  return (
    <div>
      <Drawer
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
        className={classes.drawer}
        variant="permanent"
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
        <div>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                className={classes.listSubHeader}
                component="div"
                id="nested-list-subheader"
              >
                Main
              </ListSubheader>
            }
            className={classes.root}
          >
            <ListItem button>
              <ListItemText onClick={handleListClick} primary="Projects" />
              {openList ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openList} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {PROJECTS.map((project) => (
                  <ListItem
                    button
                    className={classes.nested}
                    key={project.name}
                  >
                    <ListItemText primary={project.name} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default Sidebar;

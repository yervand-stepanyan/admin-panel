import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Collapse from '@material-ui/core/Collapse';
import Drawer from '@material-ui/core/Drawer';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListIcon from '@material-ui/icons/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';

import { IMAGE, PROJECTS, PROJECTS_LABEL } from '../../globals/constants';
import ROUTES from '../../routes';
import { useStyles } from './Sidebar.style';

function Sidebar({
  handleProjectMenuClick,
  handleSelectProject,
  openProjects,
}) {
  const classes = useStyles();

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
              <img
                alt={IMAGE.logo.alt}
                className={classes.logo}
                src={IMAGE.logo.src}
              />
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
            className={classes.list}
          >
            <ListItem button onClick={handleProjectMenuClick}>
              <ListItemIcon className={classes.icon}>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary={PROJECTS_LABEL} />
              {openProjects ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openProjects} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {PROJECTS.map((project) => (
                  <Link
                    className={classes.link}
                    key={project.name}
                    to={ROUTES.dashboard}
                  >
                    <ListItem
                      button
                      className={classes.nested}
                      onClick={() => handleSelectProject(project.name)}
                    >
                      <ListItemText primary={project.name} />
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Collapse>
          </List>
        </div>
      </Drawer>
    </div>
  );
}

Sidebar.propTypes = {
  handleProjectMenuClick: PropTypes.func.isRequired,
  handleSelectProject: PropTypes.func.isRequired,
  openProjects: PropTypes.bool.isRequired,
};

export default Sidebar;

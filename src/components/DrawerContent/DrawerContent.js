import React from 'react';
import { Link } from 'react-router-dom';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListIcon from '@material-ui/icons/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { IMAGE, PROJECTS, PROJECTS_LABEL } from '../../globals/constants';
import ROUTES from '../../routes';
import { useStore } from '../../store/use-store';
import { useStyles } from './DrawerContent.style';

function DrawerContent() {
  const classes = useStyles();
  const {
    handleLogoClick,
    handleProjectMenuClick,
    handleSelectProject,
    openProjects,
  } = useStore();

  return (
    <div>
      <div className={classes.logoAndIconWrapper}>
        <div className={classes.logoWrapper}>
          <Link onClick={handleLogoClick} to={ROUTES.home}>
            <img
              alt={IMAGE.logo.alt}
              className={classes.logo}
              src={IMAGE.logo.src}
            />
          </Link>
        </div>
      </div>
      <div>
        <List
          aria-labelledby="nested-list-subheader"
          className={classes.list}
          component="nav"
          subheader={
            <ListSubheader
              className={classes.listSubHeader}
              component="div"
              id="nested-list-subheader"
            >
              Main
            </ListSubheader>
          }
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
              {PROJECTS.map(({ name }) => (
                <Link
                  className={classes.link}
                  key={name}
                  to={`${ROUTES.dashboard}/${name}`}
                >
                  <ListItem
                    button
                    className={classes.nested}
                    onClick={() => handleSelectProject(name)}
                  >
                    <ListItemText primary={name} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Collapse>
        </List>
      </div>
    </div>
  );
}

export default DrawerContent;

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.color.whiteColor,
    color: theme.color.textColorBlack,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.drawer.drawerWidth,
      width: `calc(100% - ${theme.drawer.drawerWidth}px)`,
    },
  },
  menuButton: {
    color: theme.color.sidebarColor,
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  button: {
    color: `${theme.color.headerButtonColor}`,
  },
}));

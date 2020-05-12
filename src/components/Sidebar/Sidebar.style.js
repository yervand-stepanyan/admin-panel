import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  logoAndIconWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  drawer: {
    width: theme.drawer.drawerWidth,
  },
  drawerPaper: {
    backgroundColor: theme.drawer.drawerColor,
    boxSizing: 'border-box',
    padding: `0 ${theme.customSpacing.base}`,
    width: theme.drawer.drawerWidth,
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    width: '100px',
  },
  logo: {
    width: '100px',
  },
  menuIcon: {
    color: theme.color.whiteColor,
  },
}));

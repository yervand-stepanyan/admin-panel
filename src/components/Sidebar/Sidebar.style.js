import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  drawer: {
    width: theme.drawer.drawerWidth,
  },
  drawerPaper: {
    backgroundColor: theme.drawer.drawerColor,
    boxSizing: 'border-box',
    padding: `0 ${theme.customSpacing.base}`,
    width: theme.drawer.drawerWidth,
  },
  logoAndIconWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
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
  list: {
    color: theme.color.whiteColor,
  },
  listSubHeader: {
    color: theme.color.listSubHeaderColor,
  },
  icon: {
    color: theme.color.whiteColor,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

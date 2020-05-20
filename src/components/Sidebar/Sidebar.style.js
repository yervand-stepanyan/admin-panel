import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      flexShrink: 0,
      width: theme.drawer.drawerWidth,
    },
  },
  drawerPaper: {
    backgroundColor: theme.drawer.drawerColor,
    boxSizing: 'border-box',
    padding: `${theme.customSpacing.base} ${theme.customSpacing.base} 0`,
    width: theme.drawer.drawerWidth,
  },
}));

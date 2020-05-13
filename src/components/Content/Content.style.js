import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  contentContainer: {
    backgroundColor: theme.color.backgroundColor,
    boxSizing: 'border-box',
    marginLeft: theme.drawer.drawerWidth,
    padding: `${theme.customSpacing.xxxLarge} ${theme.customSpacing.base} ${theme.customSpacing.base}`,
    width: `calc(100% - ${theme.drawer.drawerWidth}px)`,
  },
}));

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  contentContainer: {
    flexGrow: 1,
    padding: `${theme.customSpacing.xxxLarge} ${theme.customSpacing.base} ${theme.customSpacing.base}`,
    width: `calc(100% - ${theme.drawer.drawerWidth}px)`,
  },
}));

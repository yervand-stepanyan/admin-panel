import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.color.whiteColor,
    color: theme.color.textColorBlack,
    marginLeft: theme.drawer.drawerWidth,
    width: `calc(100% - ${theme.drawer.drawerWidth}px)`,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    color: `${theme.color.headerButtonColor}`,
  },
}));

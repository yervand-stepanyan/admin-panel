import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: theme.color.backgroundColor,
    minHeight: '100vh',
  },
}));

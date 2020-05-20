import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    backgroundColor: theme.color.backgroundColor,
    minHeight: '100vh',
  },
}));

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  collectionListContainer: {
    display: 'flex',
    'overflow-x': 'auto',
    paddingBottom: theme.customSpacing.base,
    '&::-webkit-scrollbar': {
      height: '8px',
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 5px grey',
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: theme.color.scrollbarColor,
      borderRadius: '10px',
      '&:hover': {
        background: theme.color.scrollbarHoverColor,
      },
    },
  },
}));

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  collectionListContainer: {
    display: 'flex',
    flexDirection: 'column',
    'overflow-x': 'auto',
  },
  collectionsWrapper: {
    display: 'flex',
    'overflow-x': 'auto',
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
  cardsWrapper: {
    display: 'flex',
    paddingBottom: theme.customSpacing.base,
  },
}));

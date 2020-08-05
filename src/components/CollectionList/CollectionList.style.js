import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  collectionListContainer: {
    display: 'flex',
    flexDirection: 'column',
    'overflow-x': 'auto',
    width: '100%',
  },
  collectionsWrapper: {
    display: 'flex',
    'overflow-x': 'auto',
    '&::-webkit-scrollbar': {
      height: theme.scrollbar.scrollbarHeight,
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': `inset 0 0 5px ${theme.color.scrollbarTrackColor}`,
      borderRadius: theme.scrollbar.scrollbarTrackBorderRadius,
    },
    '&::-webkit-scrollbar-thumb': {
      background: theme.color.scrollbarColor,
      borderRadius: theme.scrollbar.scrollbarThumbBorderRadius,
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

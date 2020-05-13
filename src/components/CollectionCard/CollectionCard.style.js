import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  collectionCardContainer: {
    marginRight: theme.customSpacing.base,
  },
  card: {
    color: theme.color.whiteColor,
    cursor: 'pointer',
    height: '100px',
    minWidth: '250px',
  },
  blue: {
    backgroundColor: theme.color.cardColorBlue,
  },
  red: {
    backgroundColor: theme.color.cardColorRed,
  },
  yellow: {
    backgroundColor: theme.color.cardColorYellow,
  },
  green: {
    backgroundColor: theme.color.cardColorGreen,
  },
}));

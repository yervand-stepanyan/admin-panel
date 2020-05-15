import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  search: {
    display: 'flex',
    marginRight: `${theme.customSpacing.base}`,
    position: 'relative',
    width: '100%',
  },
  searchInputWrapper: {
    marginLeft: `${theme.customSpacing.base}`,
    width: '100%',
  },
  searchIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: `${theme.color.headerButtonColor}`,
  },
  inputRoot: {
    width: '100%',
  },
  searchHidden: {
    display: 'none',
  },
  searchShow: {
    display: 'flex',
    backgroundColor: theme.color.whiteColor,
    border: '0',
    borderRadius: '0 0 4px 4px',
    boxShadow: '0 4px 6px 0 rgba(32,33,36,0.28)',
    position: 'absolute',
    width: '90%',
  },
  resultWrapper: {
    maxHeight: '240px',
    'overflow-y': 'auto',
    paddingBottom: theme.customSpacing.base,
    paddingTop: theme.customSpacing.small,
    width: '100%',
    '&::-webkit-scrollbar': {
      width: '8px',
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
  ul: {
    border: '0',
    listStyleType: 'none',
    margin: '0',
    padding: '0',
  },
  link: {
    color: theme.color.textColorBlack,
    textDecoration: 'none',
  },
  li: {
    cursor: 'default',
    paddingLeft: theme.customSpacing.base,
    '&:hover': {
      backgroundColor: theme.color.searchLiHover,
    },
  },
  noResult: {
    cursor: 'default',
    paddingLeft: theme.customSpacing.base,
  },
  clearIconShow: {
    display: 'flex',
    alignItems: 'center',
    visibility: 'visible',
  },
  clearIconHidden: {
    visibility: 'hidden',
  },
  clearIcon: {
    cursor: 'pointer',
  },
}));

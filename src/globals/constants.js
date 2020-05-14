import logo from '../assets/images/logo.png';

export const CARD_COLORS = ['blue', 'red', 'yellow', 'green'];

export const HOME_LABEL = 'Choose a project to display!';

export const IMAGE = {
  logo: {
    alt: 'logo',
    src: logo,
  },
};

export const NO_ITEM_FOUND = 'No item found';

export const PROJECTS = [
  {
    name: 'Create Survey',
    collections: [
      {
        name: 'surveys',
        url: 'surveys',
      },
      {
        name: 'survey-answers',
        url: 'survey-answers',
      },
    ],
    routeAPI: process.env.REACT_APP_SURVEYS_API,
  },
  {
    name: 'Learning English',
    collections: [
      { name: 'users', url: 'auth' },
      { name: 'tests', url: 'test' },
      { name: 'texts', url: 'text' },
      { name: 'audios', url: 'audio' },
    ],
    routeAPI: process.env.REACT_APP_LEARNING_ENGLISH_API,
  },
];

export const PROJECTS_LABEL = 'Projects';

export const SEARCH_PLACEHOLDER = 'Search . . .';

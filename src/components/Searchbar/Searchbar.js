import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import ClearIcon from '@material-ui/icons/Clear';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';

import { NO_ITEM_FOUND, SEARCH_PLACEHOLDER } from '../../globals/constants';
import removeSpaces from '../../helpers/removeSpaces';
import ROUTES from '../../routes';
import useOutsideAlerter from '../../helpers/outsideAlerter';
import { useStore } from '../../store/use-store';
import { useStyles } from './Searchbar.style';

function Searchbar() {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [showFiltered, setShowFiltered] = useState(false);
  const { filteredProjects, handleFilteredClick, handleSearch } = useStore();
  const resultRef = useRef(null);
  const inputRef = useRef(null);
  useOutsideAlerter(resultRef, setShowFiltered);

  const handleSearchItem = (searchValue) => {
    const filteredValue = removeSpaces(searchValue);

    if (filteredValue) {
      handleSearch(filteredValue);

      setShowFiltered(true);
    } else {
      setShowFiltered(false);
    }
  };

  const handleSearchChange = (event) => {
    setValue(event.target.value);

    handleSearchItem(event.target.value);
  };

  const handleSearchEnterKey = (event) => {
    if (event.key === 'Enter') {
      handleSearchItem(value);
    }
  };

  const handleItemClick = (name) => {
    handleFilteredClick(name);

    setShowFiltered(false);
  };

  const handleItemEnterKey = (event, name) => {
    if (event.key === 'Enter') {
      handleItemClick(name);
    }
  };

  const handleClearSearch = () => {
    setValue('');
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <div className={classes.searchInputWrapper}>
        <InputBase
          classes={{
            root: classes.inputRoot,
          }}
          inputProps={{ 'aria-label': 'search' }}
          inputRef={inputRef}
          onChange={(e) => handleSearchChange(e)}
          onKeyDown={(e) => handleSearchEnterKey(e)}
          placeholder={SEARCH_PLACEHOLDER}
          value={value}
        />
        <div
          className={showFiltered ? classes.searchShow : classes.searchHidden}
        >
          <div className={classes.resultWrapper} ref={resultRef}>
            {filteredProjects.length ? (
              <ul className={classes.ul}>
                {filteredProjects.map(({ name }) => (
                  <Link
                    className={classes.link}
                    key={name}
                    onClick={() => handleItemClick(name)}
                    onKeyDown={(e) => handleItemEnterKey(e, name)}
                    to={ROUTES.dashboard}
                  >
                    <li className={classes.li}>
                      <Typography variant="subtitle1">{name}</Typography>
                    </li>
                  </Link>
                ))}
              </ul>
            ) : (
              <div className={classes.noResult}>
                <Typography variant="subtitle1">{NO_ITEM_FOUND}</Typography>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={value ? classes.clearIconShow : classes.clearIconHidden}>
        <ClearIcon
          className={classes.clearIcon}
          fontSize="small"
          onClick={handleClearSearch}
        />
      </div>
    </div>
  );
}

export default Searchbar;

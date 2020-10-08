import React, { useReducer, useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import { addCollections, clearCollections } from '../../store/actions';
import API from '../../fetchAPI';
import { collectionsReducer, initialState } from '../../store/reducer';
import Content from '../../components/Content';
import Header from '../../components/Header';
import { NUMBER_SIGN, PROJECTS } from '../../globals/constants';
import Sidebar from '../../components/Sidebar';
import StoreContext from '../../store/context';
import { useStyles } from './Main.style';

function Main() {
  const classes = useStyles();
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loadingCollections, setLoadingCollections] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState([]);
  const [selectedCollectionColor, setSelectedCollectionColor] = useState('');
  const [selectedCollectionName, setSelectedCollectionName] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const [stateCollections, dispatchCollections] = useReducer(
    collectionsReducer,
    initialState
  );
  const columnNames = selectedCollection.length
    ? [NUMBER_SIGN, ...Object.keys(selectedCollection[0])]
    : [];
  const tableData = selectedCollection.map((item, index) => [
    index + 1,
    ...Object.values(item),
  ]);

  const handleProjectMenuClick = () => {
    setOpenProjects(!openProjects);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogoClick = () => {
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const handleSelectProject = async projectName => {
    setSelectedCollection([]);

    setSelectedProject(projectName);

    if (mobileOpen) {
      setMobileOpen(false);
    }

    if (selectedProject !== projectName) {
      dispatchCollections(clearCollections());
    } else {
      return;
    }

    try {
      setLoadingCollections(true);

      const { collections, routeAPI } = PROJECTS.find(
        project => project.name === projectName
      );
      const responseArray = await Promise.all(
        collections.map(({ url }) => API.get(routeAPI, url))
      );
      const mappedCollections = await responseArray.map((array, index) => ({
        name: collections[index].name,
        collection: array,
      }));

      dispatchCollections(addCollections(mappedCollections));
    } catch (e) {
      setLoadingCollections(false);
    } finally {
      setLoadingCollections(false);
    }
  };

  const handleSearch = searchItem => {
    const foundProjects = PROJECTS.filter(({ name }) =>
      name.toLowerCase().includes(searchItem.toLowerCase())
    );

    setFilteredProjects(foundProjects);
  };

  const handleFilteredClick = async projectName => {
    await handleSelectProject(projectName);
  };

  const handleCollectionClick = (color, name) => {
    const { collection } = stateCollections.find(
      collectionObject => collectionObject.name === name
    );

    setSelectedCollection(collection);

    setSelectedCollectionName(name);

    setSelectedCollectionColor(color);
  };

  return (
    <div className={classes.mainContainer}>
      <CssBaseline />
      <StoreContext.Provider
        value={{
          stateCollections,
          dispatchCollections,
          columnNames,
          filteredProjects,
          handleCollectionClick,
          handleFilteredClick,
          handleLogoClick,
          handleProjectMenuClick,
          handleSearch,
          handleSelectProject,
          loadingCollections,
          openProjects,
          selectedCollection,
          selectedCollectionColor,
          selectedCollectionName,
          selectedProject,
          tableData,
        }}
      >
        <Router>
          <Header handleDrawerToggle={handleDrawerToggle} />
          <Sidebar
            handleDrawerToggle={handleDrawerToggle}
            mobileOpen={mobileOpen}
          />
          <Content />
        </Router>
      </StoreContext.Provider>
    </div>
  );
}

export default Main;

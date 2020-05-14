import React, { useReducer, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { addCollections, clearCollections } from '../../store/actions';
import API from '../../fetchAPI';
import { collectionsReducer, initialState } from '../../store/reducer';
import Content from '../../components/Content';
import Header from '../../components/Header';
import { PROJECTS } from '../../globals/constants';
import Sidebar from '../../components/Sidebar';
import StoreContext from '../../store/context';
import { useStyles } from './Main.style';

function Main() {
  const classes = useStyles();
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loadingCollections, setLoadingCollections] = useState(true);
  const [openProjects, setOpenProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');
  const [stateCollections, dispatchCollections] = useReducer(
    collectionsReducer,
    initialState
  );

  const handleProjectsClick = () => {
    setOpenProjects(!openProjects);
  };

  const handleSelectProject = async (projectName) => {
    setSelectedProject(projectName);

    if (selectedProject !== projectName) {
      dispatchCollections(clearCollections());
    } else {
      return;
    }

    try {
      setLoadingCollections(true);

      const { collections, routeAPI } = PROJECTS.find(
        (project) => project.name === projectName
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

  const handleSearch = (searchItem) => {
    const foundProjects = PROJECTS.filter(({ name }) =>
      name.toLowerCase().includes(searchItem.toLowerCase())
    );

    setFilteredProjects(foundProjects);
  };

  const handleFilteredClick = (projectName) => {
    handleSelectProject(projectName);
  };

  return (
    <div className={classes.mainContainer}>
      <StoreContext.Provider
        value={{
          stateCollections,
          dispatchCollections,
          filteredProjects,
          handleFilteredClick,
          handleSearch,
          loadingCollections,
        }}
      >
        <Router>
          <Sidebar
            handleProjectsClick={handleProjectsClick}
            handleSelectProject={handleSelectProject}
            openProjects={openProjects}
          />
          <Header />
          <Content />
        </Router>
      </StoreContext.Provider>
    </div>
  );
}

export default Main;

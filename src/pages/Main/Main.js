import React, { useReducer, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { addCollection, clearCollections } from '../../store/actions';
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
  const [openProjects, setOpenProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');
  const [stateCollections, dispatchCollections] = useReducer(
    collectionsReducer,
    initialState
  );

  const handleProjectsClick = () => {
    setOpenProjects(!openProjects);
  };

  const handleSelectProject = (projectName) => {
    setSelectedProject(projectName);

    if (selectedProject !== projectName) {
      dispatchCollections(clearCollections());
    } else {
      return;
    }

    const { collections, routeAPI } = PROJECTS.find(
      (project) => project.name === projectName
    );

    collections.forEach(async ({ name, url }) => {
      try {
        const response = await API.get(routeAPI, url);

        dispatchCollections(addCollection({ name, collection: response }));
      } catch (e) {
        // console.log(e);
      }
    });
  };

  return (
    <div className={classes.mainContainer}>
      <StoreContext.Provider value={{ stateCollections, dispatchCollections }}>
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

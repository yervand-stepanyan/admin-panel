import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Content from '../../components/Content';
import Header from '../../components/Header';
import { PROJECTS } from '../../globals/constants';
import Sidebar from '../../components/Sidebar';
import { useStyles } from './Main.style';

function Main() {
  const classes = useStyles();
  const [openProjects, setOpenProjects] = useState(false);
  const [selectedCollections, setSelectedCollections] = useState([]);

  const handleProjectsClick = () => {
    setOpenProjects(!openProjects);
  };

  const handleSelectProject = (projectName) => {
    const { collections } = PROJECTS.find(
      (project) => project.name === projectName
    );

    setSelectedCollections(collections);

    // try {
    //   const surveys = await API.get('surveys');
    //
    //   console.log(surveys);
    // } catch (e) {
    //   console.log(e);
    // }
  };

  return (
    <div className={classes.mainContainer}>
      <Router>
        <Sidebar
          handleProjectsClick={handleProjectsClick}
          handleSelectProject={handleSelectProject}
          openProjects={openProjects}
        />
        <Header />
        <Content selectedCollections={selectedCollections} />
      </Router>
    </div>
  );
}

export default Main;

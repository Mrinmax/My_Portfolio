import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './components/Themes';
import GlobalStyle from './globalStyles';

import Main from './components/Main';
import About from './components/About';
import Blog from './components/Blog';
import Project from './components/Project';
import Skill from './components/Skill';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SoundBar from './subComponents/SoundBar';

function App() {

  const location = useLocation();


  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <SoundBar />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/project" component={Project} />
            <Route exact path="/skill" component={Skill} />
          </Switch>
        </AnimatePresence>
      </ThemeProvider> 
    </>
  )
}

export default App;

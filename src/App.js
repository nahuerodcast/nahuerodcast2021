import React from "react";
import { AboutMeContainer } from "./containers/AboutMeContainer/AboutMeContainer";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { MainContainer } from "./containers/MainContainer/MainContainer";
import { ProjectsContainer } from "./containers/ProjectsContainer/ProjectsContainer";
import { Route, Switch } from "react-router-dom";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <MainContainer />
          <AboutMeContainer />
          <ProjectsContainer />
        </Route>
        <Route path="/about" component={AboutMeContainer} />
        <Route path="/projects" component={ProjectsContainer} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

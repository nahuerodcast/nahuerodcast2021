import React from "react";
import { AboutMeContainer } from "./containers/AboutMeContainer/AboutMeContainer";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { MainContainer } from "./containers/MainContainer/MainContainer";
import { ProjectsContainer } from "./containers/ProjectsContainer/ProjectsContainer";

export default function App() {
  return (
    <>
      <Header />
      <MainContainer />
      <AboutMeContainer />
      <ProjectsContainer />
      <Footer />
    </>
  );
}

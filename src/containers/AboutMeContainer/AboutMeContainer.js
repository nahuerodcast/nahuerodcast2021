import { Container, Divider } from "@chakra-ui/layout";
import React from "react";
import Fade from "react-reveal/Fade";
import { AboutMe } from "../../components/AboutMe";

import { Education } from "../../components/Education";
import { Experience } from "../../components/Experience";

export const AboutMeContainer = () => {
  return (
    <>
      <Fade top>
        <AboutMe />
      </Fade>
      <Fade top>
        <Container mb="30">
          <Divider />
        </Container>
      </Fade>
      <Fade top>
        <Education />
      </Fade>
      <Fade top>
        <Experience />
      </Fade>
    </>
  );
};

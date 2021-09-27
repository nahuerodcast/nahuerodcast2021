import React from "react";
import { Container, Divider } from "@chakra-ui/layout";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import { AboutMe } from "../../components/AboutMe";
import { Education } from "../../components/Education";
import { Experience } from "../../components/Experience";

export const AboutMeContainer = () => {
  return (
    <>
      <Fade top delay="550px">
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
      <Flip left delay={500} duration={1000}>
        <Experience />
      </Flip>
    </>
  );
};

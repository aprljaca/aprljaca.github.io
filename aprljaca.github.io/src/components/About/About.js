import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
         <strong className="purple">Skills</strong>
        </h1>
        <Techstack />
        <Github />
      </Container>
    </Container>
  );
}

export default About;

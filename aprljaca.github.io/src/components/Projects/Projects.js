import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tomcat from "../../Assets/Projects/tomcat.png";
import bot from "../../Assets/Projects/bot.png";
import ednevnik from "../../Assets/Projects/ednevnik.png";
import rss from "../../Assets/Projects/rss.png";
import gridshot from "../../Assets/Projects/gridshot.png";
import vijecnica from "../../Assets/Projects/vijecnica.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tomcat}
              isBlog={false}
              title="Tomcat-Frontend"
              description="Tomcat social network web application is a platform that allows users to connect and share content with
              other Tomcat users. Users can publish text posts, comment and like other users posts, follow favorite
              users and receive notifications. The application uses Spring Boot framework for back-end development,
              React JavaScript framework for the front-end, which enables fast and efficient development and an
              interactive user experience and Postgres database. Tomcat is still under development, made and
              deployed on DigitalOcean for learning purposes."
              ghLink="https://github.com/aprljaca/tomcat-react"
              demoLink="http://164.90.230.226:3000/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tomcat}
              isBlog={false}
              title="Tomcat-Backend"
              description="Tomcat social network web application is a platform that allows users to connect and share content with
              other Tomcat users. Users can publish text posts, comment and like other users posts, follow favorite
              users and receive notifications. The application uses Spring Boot framework for back-end development,
              React JavaScript framework for the front-end, which enables fast and efficient development and an
              interactive user experience and Postgres database. Tomcat is still under development, made and
              deployed on DigitalOcean for learning purposes."
              ghLink="https://github.com/aprljaca/tomcat"
              demoLink="http://164.90.230.226:3000/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bot}
              isBlog={false}
              title="DiscordBot"
              description="DiscordBot application is built using Spring Boot framework and is useful for radio lovers that allows
              them to listen 'Radio Miljacka' radio station directly through the Discord platform. DigitalOcean's virtual
              server ensures that DiscordBot is always online."
              ghLink="https://github.com/aprljaca/DiscordBot"
              demoLink="https://discord.com/oauth2/authorize?client_id=1030151542415823009&permissions=8&scope=bot"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ednevnik}
              isBlog={false}
              title="eDnevnik"
              description="This application allows teachers to plan and organize lesson topics, and to enter notes about each
              lesson. It also allows monitoring of student attendance in classes, and entering and reviewing student
              grades. The app also has a student management option, where the teacher can view each student's data
              and track their progress. Documents and assignments can be easily added through the application,
              which makes the teacher's work easier."
              ghLink="https://github.com/aprljaca/eDnevnik"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rss}
              isBlog={false}
              title="RSS feed | Arm Mbed OS Simulator"
              description="The application shows the latest titles from the Klix.ba portal on the display of the Mbed simulator. The
              project uses RSS technology for reading and parsing data from the Klix.ba portal and the Mbed simulator
              for displaying data on the display."
              ghLink="https://github.com/aprljaca/RSS-feed-Arm-Mbed-OS-Simulator"
              demoLink="" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gridshot}
              isBlog={false}
              title="Gridshot"
              description="Gridshot is a mini-game written in JavaScript programming language that allows players to train and
              improve their accuracy, player mouse movements and eye movement in gun games. This tool is useful
              for anyone who wants to improve in FPS or TPS games."
              ghLink="https://github.com/aprljaca/Gridshot"
              // demoLink=""     
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vijecnica}
              isBlog={false}
              title="Sarajevo City Hall"
              description="3D model of Sarajevo City Hall made in a Blender."
              ghLink=""
              demoLink="https://drive.google.com/drive/folders/1OcISAebI6wKz064CCLLYzyKzuQ6p5rPW"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

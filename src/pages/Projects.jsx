import React from "react";
import styled from "styled-components";
import { Container, Section, Title } from "../components/common/styled";
import ProjectCard from "../components/ProjectCard";

const Grid = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
`;
const Cursive = styled.p`
  font-family: "Nanum Pen Script", cursive;
  color: #b5b4b4cc;
  font-size: 18px;
  text-transform: lowercase;
  margin-top: 0.2rem;
`;

const Projects = () => {
  const projects = [
    {
      title: "3D VIEWER - CLIENT",
      description: "3D viewer for IFC models",
      tech: [
        "Frontend",
        "ReactJS",
        "TailwindCSS",
        "IFC.js",
        "Three.js",
        "WebGL",
      ],
      demo: "https://manuela-cepeda.github.io/3d-visor/#/homepage",
      github: "https://github.com/manuela-cepeda/3d-visor",
      img: "visor-3d.png",
    },
    {
      title: "ECOTIENDA - CLIENT",
      description: "E-commerce project for sustainable cosmetics brands",
      tech: ["Frontend", "ReactJS", "TailwindCSS"],
      demo: "https://manuela-cepeda.github.io/ecommerce-react/#/",
      github: "https://github.com/manuela-cepeda/ecommerce-react",
      img: "ecommerce-react.png",
    },
    {
      title: "ECOTIENDA - SERVER",
      description: 'Server side of E-commerce project "Ecotienda" ',
      tech: [
        "Backend",
        "NodeJs",
        "MongoDB",
        "Passport JWT",
        "Mongoose",
        "Bcrypt",
        "Websocket",
        "Dotenv",
        "Nodemailer",
      ],
      github: "https://github.com/manuela-cepeda/ecommerce-backend",
      img: "ecommerce-node.png",
    },
    {
      title: "LA PARADA POS",
      description: "Point of sale (POS) Web App project for restaurants",
      tech: ["Frontend", "JS Vanilla", "HTML", "TailwindCSS"],
      demo: "https://manuela-cepeda.github.io/carrito-js/",
      github: "https://github.com/manuela-cepeda/carrito-js",
      img: "carrito-js.png",
    },
    {
      title: "BODA L&P",
      description: "Landing page for wedding invitation",
      tech: ["Frontend", "HTML", "CSS", "SASS"],
      demo: "https://manuela-cepeda.github.io/landing-boda-sass",
      github: "https://github.com/manuela-cepeda/landing-boda-sass",
      img: "boda-landing.png",
    },
    {
      title: "PORTFOLIO",
      description: "Landing page for my personal porfolio",
      tech: ["Frontend", "React", "Styled components", "Vite"],
      demo: "https://manuela-cepeda.github.io/landing-boda-sass",
      github: "https://github.com/manuela-cepeda/portfolioReact/tree/react-mini",
      img: "portfolio-landing.png",
    }
  ];

  return (
    <Section id="projects" $flexcolumn $heightauto>
      <Title $center>
        Projects
        <Cursive> hover over any project to learn more! </Cursive>
      </Title>

      <Container $projects>
        <Grid>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Projects;

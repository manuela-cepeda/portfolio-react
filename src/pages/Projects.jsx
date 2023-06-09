import React from "react";
import styled from "styled-components";
import { Container, Section, Title } from "../components/common/styled";
import ProjectCard from "../components/ProjectCard";
import  boda from "../assets/img/boda-landing.png"
import  carrito from "../assets/img/carrito-js.png"
import  visor from "../assets/img/visor-3d.png"
import  portfolio from "../assets/img/portfolio-landing.png"
import  ecommerceNode from "../assets/img/ecommerce-node.png"
import  ecommerceReact from "../assets/img/ecommerce-react.png"



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
  color: var( --slate-color);
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
      img: visor,
    },
    {
      title: "ECOTIENDA - CLIENT",
      description: "E-commerce project for sustainable cosmetics brands",
      tech: ["Frontend", "ReactJS", "TailwindCSS"],
      demo: "https://manuela-cepeda.github.io/ecommerce-react/#/",
      github: "https://github.com/manuela-cepeda/ecommerce-react",
      img: ecommerceReact,
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
      img: ecommerceNode,
    },
    {
      title: "LA PARADA POS",
      description: "Point of sale (POS) Web App project for restaurants",
      tech: ["Frontend", "JS Vanilla", "HTML", "TailwindCSS"],
      demo: "https://manuela-cepeda.github.io/carrito-js/",
      github: "https://github.com/manuela-cepeda/carrito-js",
      img: carrito,
    },
    {
      title: "BODA L&P",
      description: "Landing page for wedding invitation",
      tech: ["Frontend", "HTML", "CSS", "SASS"],
      demo: "https://manuela-cepeda.github.io/landing-boda-sass",
      github: "https://github.com/manuela-cepeda/landing-boda-sass",
      img: boda,
    },
    {
      title: "PORTFOLIO",
      description: "This very same website, take a look under the hood",
      tech: ["Frontend", "React", "Styled components", "Vite"],
      github: "https://github.com/manuela-cepeda/portfolio-react",
      img: portfolio,
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

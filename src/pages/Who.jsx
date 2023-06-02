import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {  Container, Section, Title } from "../components/common/styled";
import  imgMe from "../assets/img/me-img.jpg"
import  cv from "../assets/pdf/CV_ManuelaCepeda.pdf"
import GitHubLogo from "../components/common/Icons/Github";
import LinkedinLogo from "../components/common/Icons/Linkedin";
import ArrowIcon from "../components/common/Icons/ArrowIcon";

const Left = styled.div`
  @media screen and (min-width: 768px) {
    flex: 1;
  }
`;

const Right = styled.div`
  @media screen and (min-width: 768px) {
    flex: 1;
  }
`;

const Text = styled.div`
  font-size: 11px;
  text-align: justify;
  line-height:1rem;
  span {
    font-family: "Nanum Pen Script", cursive;
    color:var(--slate-color);
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    font-size: 13px;
    line-height:auto;
    span{
      font-size:18px;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  gap: 1rem;
  margin: 0 0 1rem 0;
  cursor: pointer;

  & > a {
  
    display:flex;
    align-items:center;
    font-weight:500;
    gap:.4rem;
    transition: all 0.1s;
    &:hover {
      transform: translateY(-3px);
      color: var(--second-color);
    }
  }
  @media screen and (min-width: 768px) {
    margin: 2rem 0;
  }
`;

const Mask = styled.div`
  height: 190px;
  width: 190px;
  border-radius: 96px;
  border: 2px solid var(--second-color);
  display: grid;
  place-content: center;
  margin-bottom: 1rem;
    @media screen and (min-width: 768px) {
      margin-bottom: 2rem;
      height: 250px;
  width: 250px;
  border-radius: 126px;
      transform: translate(48px);

  }
 
  @media screen and (min-width: 1000px) {
    height: 310px;
    width: 310px;
    border-radius: 157.5px;
    transform: translate(93px);
  }

`;
const Img = styled.img`
  height: auto;
  width: 180px;
  border-radius: 90px;
  @media screen and (min-width: 768px) {
    width: 240px;
  border-radius: 120px;
  }
  @media screen and (min-width: 1000px) {
    width: 300px;
    border-radius: 150px;
  }
`;

const List = styled.ul`
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
  list-style: none;
`;

const Who = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <>
      <Section id="who" $flexcolumn $heightauto>
        {!matches && <Title $center>ABOUT ME</Title>}
        <Container  $flex  >
          <Left>
            <Mask>
              <Img src={imgMe} />
            </Mask>
            <Icons>
            <a href="https://github.com/manuela-cepeda" target="_blank">
                <LinkedinLogo width={16} />
              </a>
              <a href="https://github.com/manuela-cepeda" target="_blank">
                <GitHubLogo width={16} />
              </a>
              <a href={cv} target="_blank" >
               Resume <ArrowIcon width={14} />
              </a>
              
            </Icons>
          </Left>
          <Right>
            {matches && <Title $nomargin>ABOUT ME</Title>}
            <Text>
              <p>
                {" "}
                I am a 29 years old Front-End developer based in Rosario,
                Argentina. My interest in software development started back when
                I used to work as an architect{" "}
                <span>(the ones that design houses)</span> and I started making
                my owns plugins with C# to automate and extend the capabilities
                of diferent softwares <span>(just for the fun of it)</span>.{" "}
              </p>
              <br />

              <p>
                {" "}
                Fast-forward to today, I’ve worked in different types of
                organizations <span>
                  {" "}
                  (start-ups and large corporations){" "}
                </span>{" "}
                mostly as a React Developer.{" "}
              </p>

              <br />
              <p>
                {" "}
                I am passionate about coding and solving problems through code,
                and I am excited to work alongside other amazing programmers and
                learn so much more!{" "}
              </p>
              <br />
              <p>
                {" "}
                💻 Here are a few technologies I’ve been working with recently:{" "}
              </p>
              <List>
                <li>✨ JavaScript (ES6+)</li>
                <li>✨ TypeScript</li>
                <li>✨ Sass </li>
                <li>✨ React.js</li>
                <li>✨ Express </li>
                <li>✨ Node.js </li>
                <li>✨ Mongo </li>
                <li>✨ Firebase </li>
              </List>
            </Text>
          </Right>
        </Container>
      </Section>
    </>
  );
};

export default Who;

import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Typed from "typed.js";
import { Container, Section } from "../components/common/styled";
import UseAnimations from "react-useanimations";
import scrollDown from "react-useanimations/lib/scrollDown";
import download from "react-useanimations/lib/download";
import { Blob } from "../components/common/styled/Blob";

const Left = styled.div`
  position: relative;
  width: 80%;
  margin-top: 10rem;
  @media screen and (min-width: 768px) {
    margin-top:0rem;
  }
  @media screen and (min-width: 1000px) {
    flex: 3;

  }
 
`;

const Right = styled.div`
  position: relative;
  @media screen and (max-width: 1000px) {
    display: none;
  }
  @media screen and (min-width: 1000px) {
    flex: 1;
  }
`;
const Name = styled.h1`
  display: flex;
  justify-content: start;
  font-family: "Nanum Pen Script", cursive;
  font-size: 30px;
  margin-bottom: 20px;
  width: 300px;
  height: 30px;
  -webkit-transform: rotate(-4deg);
  -moz-transform: rotate(-4deg);
  transform: rotate(-4deg);
`;

const Hi = styled.div`
  animation: rotate 1s ease;
  margin-left: -30px;
  animation-iteration-count: 1;
  ${Name}:hover & {
    animation: rotate 1s ease infinite;
  }
  @keyframes rotate {
    0% {
      -webkit-transform: none;
      transform: none;
    }
    15% {
      -webkit-transform: translate3d(-20%, 0, 0) rotate3d(0, 0, 1, -10deg);
      transform: translate3d(-20%, 0, 0) rotate3d(0, 0, 1, -10deg);
    }
    30% {
      -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 7deg);
      transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 7deg);
    }
    45% {
      -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -10deg);
      transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -10deg);
    }
    60% {
      -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 5deg);
      transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 5deg);
    }
    75% {
      -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -2deg);
      transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -2deg);
    }
    100% {
      -webkit-transform: none;
      transform: none;
    }
  }
`;

const Intro = styled.h2`
  font-size: 30px;
  line-height: 50px;
  height: 13rem;
  span {
    font-weight: 500;
    color: var(--second-color);
  }
  @media screen and (min-width: 768px) {
    height: 5rem;
  }
`;

const Img = styled.img`
  height: 300px;
  width: 300px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: -5;
  right: 0;
  margin: auto;

  animation: float 6s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-7px);
    }
    100% {
      transform: translatey(0px);
    }
  }
`;
const Scroll = styled.div`
  display: flex;
  align-items: end;
  gap: 0.5rem;
`;

const Hero = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["smart", "challenging", "fun", "interactive"],
      typeSpeed: 100,
      backSpeed: 100,
      startDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Section $flexcolumn id="home">
      <Navbar />

      <Container $flex>
        <Left>
          <Name>
            <Hi>👋🏻 </Hi>
            Hi! I'm Manuela
          </Name>
          <Intro>
            I am a Front-End Developer. <br />
            I love making <span ref={el} />
            things with code.
          </Intro>
          <Scroll>
            <UseAnimations
              animation={scrollDown}
              size={20}
              strokeColor="currentColor"
              wrapperStyle={{ marginTop: 100 }}
            />{" "}
            Scroll down ✨
          </Scroll>
        </Left>

        <Right>
          <Blob />
          <Img src="/img/me.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;

import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  height:2rem;
  text-align:center;
  scroll-snap-align: end;
  cursor:pointer;
  & >a{
    text-decoration: none;
    color: var(--slate-color);
    &:hover{
      color: white;
    }
  }
`;

const FooterComponent = () => {
  return <Footer>
    <a href=""> Desing & Built by Manuela Cepeda</a>
   </Footer>;
};

export default FooterComponent;

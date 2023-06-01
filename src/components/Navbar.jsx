import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button, Container } from './common/styled'
import  cv from "../assets/pdf/CV_ManuelaCepeda.pdf"


 
const  Logo = styled.div`
    font-size:16px;
    text-align:center;

`

const  Links = styled.div`

    display:flex;
    gap:50px;
    align-items:center;
    justify-content: center;
`

const List  = styled.ul`
    display:flex;
    gap:20px;
    list-style: none;
    & :hover{
        
        cursor: pointer;
        color: var(--main-color);
    }

    @media screen and (max-width:400px) {
        gap:0;
        white-space: nowrap;

    }
    
`
const ListItem  = styled.li`
   

`
const Link  = styled.a`
 font-weight:500;
background-image: linear-gradient(var(--main-color), var(--main-color));
background-position: 50% 80%;
background-repeat: no-repeat;
background-size: 0% 0.1rem;
color: white;
display: inline !important;
padding: 0.5rem;
text-decoration:none;
transition: background-size .3s;
&:hover{
    background-size: 75% 0.1rem;
    transition: all 0.5s ease-in-out; 
}
`


const Navbar = () => { 
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 1000px)").matches
      );
    
      useEffect(() => {
        window
          .matchMedia("(min-width:1000px)")
          .addEventListener("change", (e) => setMatches(e.matches));
      }, []);

  return (
   
        <Container  $navbar>           
            <Logo >
                <span style={{"fontWeight":"500"}}>MANUELA</span>CEPEDA
          </Logo>
            <Links>
                <List>
                    <ListItem> 
                        <Link href="#home">Home</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="#who">About me</Link>
                    </ListItem>
                    <ListItem>
                    <Link href="#projects">Projects</Link>
                        </ListItem>
                    <ListItem>
                    <Link href="mailto:manulcepeda@gmail.com">Contact</Link>
                        </ListItem>
                </List>
               { matches && <Button>   <a href={cv} target="_blank" >
               Resume
              </a></Button>}
            </Links>
            
        </Container>
 
  )
}

export default Navbar
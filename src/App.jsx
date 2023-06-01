import styled from "styled-components"
import Hero from "./pages/Hero"
import Who from "./pages/Who"
import Projects from "./pages/Projects"
import FooterComponent from "./pages/Footer"


const Container = styled.div`

  --main-color:  #FA6759; 
  --second-color:  #6fdcbf;
  --slate-color: #a8b2d1;
   --bg-color:  linear-gradient(180deg, hsla(208, 51%, 16%, 1) 0%, hsla(208, 48%, 26%, 1) 100%);
  color: white;
  background-image:  var(--bg-color);
  @media screen and (min-width:1000px) {
    height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  overflow-x:hidden;
  scrollbar-width:none;
  scroll-behavior: smooth;
   &::-webkit-scrollbar{
    display: none;
  } 
}
a {
        color: inherit;
      text-decoration: none;
      }
`

function App() {

  return (
    <>
    <Container>
      <Hero />
      <Who/>
      <Projects />
      <FooterComponent />
    </Container>
    </>
  )
}

export default App

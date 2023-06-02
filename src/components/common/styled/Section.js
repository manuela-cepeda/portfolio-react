import styled, { css } from 'styled-components'


export const Section = styled.div` 
    height: 100vh ;
    scroll-snap-align: center;
    display:flex;
    align-items: center;
    justify-content: center;
    ${props => props.$flexcolumn && css`
    flex-direction:column;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    
  }`
}


  ${props => props.$heightauto && css`
  @media only screen and (max-width: 1000px) {
    height: auto;
  }
  @media only screen  and (orientation: landscape) {
    height: auto;

}
  `
  }


`
import styled, { css } from 'styled-components'


export const Title = styled.h2`
  color: white;
  text-transform: uppercase;
  font-size:2rem;
  font-weight: 300;
  margin:5rem 0 1rem 0;
  border-radius:0.2rem;
  width:100%;
  ${props => props.$center && css`
  text-align: center;
  ` }

  ${props => props.$nomargin && css`
  margin:0rem 0 1rem 0;
  ` }


`
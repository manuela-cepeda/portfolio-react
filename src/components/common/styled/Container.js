import styled , { css } from 'styled-components'




export const Container = styled.div`
    width: 90%;
    padding: 1rem; 
    ${props => props.$flex && css`
    display:flex;
    flex-direction:column;
    align-items:center;
    height: 100vh;
  `
  }

 

  ${props => props.$navbar && css`
  backdrop-filter: blur(7px);

  padding-top:20px;
    position: fixed;
    top:0;
    z-index:10;
  `
  }
    @media screen and (min-width: 768px) {
    width:700px;

    ${props => props.$flex && css`
    display:flex;
    align-items:center;
    flex-direction: row;
    justify-content:center;
  `
  }

  }

  @media screen and (min-width:1000px) {
    width:1000px;
 

   ${props => props.$navbar && css`
   
   display:flex;
    align-items:center;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 0;
    z-index: 1;
    position: fixed;
    top:0;
  `
  }


  
  }


 
`
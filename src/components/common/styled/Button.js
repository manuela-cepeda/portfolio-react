import styled from 'styled-components'



export const Button  = styled.button`
    line-height: 1;
    padding:7px 10px;
    font-weight:700 !important;
    background-color:transparent;
    background-image: linear-gradient(to left, transparent 50%,  var(--second-color) 50%);
    background-size: 200%;
    background-repeat: no-repeat;
    background-position:right;
    font-weight:400;
    color: var(--second-color);
    border: 2px solid var(--second-color);
    border-radius:4px;
    cursor: pointer;
    transition: all .5s ease; 
    &:hover{
        background-position: left;
        color: white;
    }

`
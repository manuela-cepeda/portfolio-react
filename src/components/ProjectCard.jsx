import React, { useState } from 'react'
import styled from 'styled-components'

import LinkIcon from './common/Icons/LinkIcon'
import GitHubLogo from './common/Icons/Github'
import TagIcon from './common/Icons/TagIcon'

const ProjectBox = styled.div`
box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    position:relative;
    border-radius:0.7em;
    margin-bottom:1rem;
    overflow:hidden;
    display: inline-block;
    &::before{
      content:"";
      background-image:  linear-gradient(180deg, hsla(208, 51%, 16%, 1) 0%, hsla(208, 48%, 26%, 1) 100%);
      opacity:0.85;
      position:absolute;
      width:100%;
      height:0;
      transition:0.4s ease-in-out;
    }
    &:hover::before{
      height:100%;
    }
`

const ProjectImg = styled.img`
  image-rendering: crisp-edges;
  /* object-fit:cover; */
  width:100%;
  height:100%;
  
`
const ProjectText = styled.div`
    padding:10px;
    position: absolute;
    text-align:center;
    opacity:0;
    top:65%;
    left:50%;
    width:100%;
    transform:translate(-50%, -50%) ;
    transition:0.4s ease-in-out;
    ${ProjectBox}:hover &{
       top:50%;
       opacity:1;
    } 

`
const ProjectLinks =styled.a`
  color: white;
  margin-top:1rem;
  margin:0.5rem;
  display:flex;
  align-items:center;
  justify-content: center;
  gap:0.2rem;
`

const ProjectTags =styled.div`
  color: white;
  margin-top:1rem;
  display:flex;
  align-items:center;
  justify-content: center;
  gap:0.4rem;
  flex-wrap:wrap;
`
const ProjectTag =styled.div`
  display:flex;
  align-items:center;
  gap:0.1rem;
  padding: 0 10px;
  background-color:   var(--main-color);
  border-radius: 6px;
 font-size:10px;
`
const ProjectCard = ({title, img, description, demo, github, tech }) => {
  return (
    
    <ProjectBox  >
        <ProjectImg src={img} alt="" />
        <ProjectText>
            <h3 style={{"fontWeight":"500"}}>{title}</h3>
            <p>{description}</p>
            {demo && <ProjectLinks href={demo} target='_blank'>
              <LinkIcon  width={14} /> Demo
            </ProjectLinks>}
            <ProjectLinks href={github} target='_blank'> 
                <GitHubLogo width={14}/> Code                
            </ProjectLinks>
            <ProjectTags>
                  {tech.map((tech, index) =>   
                    <ProjectTag key={index}> 
                    <TagIcon  width={10} />
                     {tech}</ProjectTag>
              )}
            </ProjectTags>
       
        </ProjectText>
    </ProjectBox>
  
  )
}

export default ProjectCard
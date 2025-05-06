import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectName, projectPhoto, projectDesc, github, demo}) => {
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {projectDesc}
            <br />

            {github && (
              <a href={github} target='_blank' rel="noopener noreferrer">
                <button className='projectbtn'><FaGithub /> Github</button>
              </a>
            )}

            <a href={demo} target='_blank' rel="noopener noreferrer">
              <button className='projectbtn'><CgFileDocument /> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox
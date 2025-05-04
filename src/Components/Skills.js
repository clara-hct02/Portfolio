import React from 'react';
import {FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaJava, FaHtml5} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiVercel, SiAdobephotoshop, SiCplusplus, SiTypescript} from "react-icons/si";
import {TbSql} from "react-icons/tb";

const Skills = ({skill}) => {
    const icon = {
        'C++': <SiCplusplus/>,
        Java: <FaJava/>,
        Python: <FaPython/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        Vercel : <SiVercel/>,
        Photoshop: <SiAdobephotoshop/>,
        SQL: <TbSql/>,
        HTML5: <FaHtml5/>,
        TypeScript: <SiTypescript/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills

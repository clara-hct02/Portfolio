import React from 'react';
import ProjectBox from './ProjectBox';

const projects = [
    {
      name: "Section Insights",
      photo: "",
      desc : "A web app for visualizing insights on UBC course sections.",
      github : "",
      demo : "https://youtu.be/I1Gn4iWECvY"
    },
    {
      name: "Town of Salem 2 Simulator",
      photo: "",
      desc : "A simulator for the social deduction game Town of Salem 2. Features 10+ roles modeled using OOP principles.",
      github : "https://github.com/clara-hct02/tos-simulator",
      demo : ""
    },
    {
      name: "Canada Votes",
      photo: "",
      desc:"A mock election web app where users can register, vote and view results. Based on Canada's electoral system.",
      github:"https://github.com/clara-hct02/elections-app",
      demo:""
    },
    {
      name: "Playlist Creator",
      photo: "",
      desc:"A Java Swing app that mimics music players, allowing users to create playlists and add songs.",
      github:"https://github.com/clara-hct02/Music-Player-Simulator",
      demo:""
    }
  ]


const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        {projects.map((proj) => (
          <ProjectBox
          key={proj.name}
          projectName={proj.name}
          projectPhoto={proj.photo}
          projectDesc={proj.desc}
          github={proj.github}
          demo={proj.demo}
          />
        ))}
      </div>

    </div>
  )
}

export default Projects
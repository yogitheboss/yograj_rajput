import React from 'react'
import project from './project_name'

function Projects() {
  console.log(project.types);
  return (
    <div id='work' className='flex flex-col align-middle justify-center'>

      <div className="heading">
        <h1 className='projectHeading'>Some things I've built</h1>
      </div>

      <div className=" projectContainer  m-10 ">

        {project.types.map((project,index) => (
          <div className="projectCard project flex gap-3 p-10" key={index}>
            <div className="projectImage center ">
              <img src="./project_portfolio.jpg" alt="" />
            </div>
            <div className="projectInfo">
              <h1 className="projectTitle">{project.name}</h1>
              <p className="projectDescription">{project.desc}</p>
              <div className="projectLinks">
                <a href="
             " className="projectLink">{project.link}</a>
                <a href="
             " className="projectLink">{project.demo}</a>
              </div>
            </div>
          </div>

        ))}
      </div>

    </div>
  )
}

export default Projects
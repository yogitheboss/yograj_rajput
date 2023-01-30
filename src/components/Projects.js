import React from 'react'

function Projects() {
  return (
    <div id='work' className='flex flex-col align-middle justify-center'>

      <div className="heading">
        <h1 className='projectHeading'>Some things I've built</h1>
      </div>
     
      <div className=" projectContainer  m-10 ">
        <div className="projectCard project flex gap-3 p-10">
          <div className="projectImage center ">
          <img src="./project_portfolio.jpg" alt="" />
          </div>
          <div className="projectInfo">
            <h1 className="projectTitle">Project Title</h1>
            <p className="projectDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec lacinia nisl nisl non nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec lacinia nisl nisl non nisl.</p>
            <div className="projectLinks">
              <a href="
              " className="projectLink">View Project</a>
              <a href="
              " className="projectLink">View Code</a>
              </div>
              </div>
        </div>
        <div className="projectCard project flex gap-3 p-10">
          <div className="projectImage center">
          <img src="./project_portfolio.jpg" alt="" />
          </div>
          <div className="projectInfo">
            <h1 className="projectTitle">Project Title</h1>
            <p className="projectDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec lacinia nisl nisl non nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec lacinia nisl nisl non nisl.</p>
            <div className="projectLinks">
              <a href="
              " className="projectLink">View Project</a>
              <a href="
              " className="projectLink">View Code</a>
              </div>
              </div>
        </div>
        <div className=" projectCard project flex md:flex-row flex-col gap-3 p-10">
          <div className="projectImage center  center "> 
            <img src="./project_portfolio.jpg" alt="" />
          </div>
          <div className="projectInfo">
            <h1 className="projectTitle">Project Title</h1>
            <p className="projectDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec lacinia nisl nisl non nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec lacinia nisl nisl non nisl.</p>
            <div className="projectLinks">
              <a href="
              " className="projectLink">View Project</a>
              <a href="
              " className="projectLink">View Code</a>
              </div>
              </div>
        </div>
      </div>
          
    </div>
  )
}

export default Projects
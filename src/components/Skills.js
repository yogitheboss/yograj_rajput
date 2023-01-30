import React from 'react'
import './skills.css'
function Skills() {
  const roundstyle={
   borderRadius:'10px',
   textAlign:'center'

    
  }
  return (
    <div  className="skillContainer">
      <h1> My Skills</h1>
    
    <p>HTML</p>
    <div class="container">
      <div style={roundstyle}class="skills html">90%</div>
    </div>

    <p>CSS</p>
    <div class="container">
      <div style={roundstyle}class="skills css">80%</div>
    </div>

    <p>JavaScript</p>
    <div class="container">
      <div style={roundstyle}class="skills js">65%</div>
    </div>

    <p>PHP</p>
    <div class="container">
      <div style={roundstyle}class="skills php">60%</div>
    </div>
    </div>
  )
}

export default Skills
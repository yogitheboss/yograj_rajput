import React from 'react'

function Wrapper({setMenuOpen,menuOpen}) {
  return (
    <div className='wrapper' onClick={()=>setMenuOpen(!menuOpen)}></div>
  )
}

export default Wrapper

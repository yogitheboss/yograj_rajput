import React from 'react'
import { Link } from 'react-scroll'
function SideMenu({ menuOpen ,setMenuOpen}) {
    console.log('I am in SideMenu', menuOpen);
    return (

        <>
            <div className={menuOpen ? 'side-menu open' : 'side-menu'}>
                <div className='flex justify-around my-4 pb-4  align-middle h-10 border-b border-blue-900'>
                    <a href="/" className="font-bold text-xl hover:text-sky-400">YR</a>
                    <button onClick={()=>{setMenuOpen(!menuOpen)}} className='rounded-full px-4  text-center bg-cyan-900'><svg className="h-3.5  w-3.5 overflow-visible stroke-slate-100" fill="none" strokeWidth="1.5" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg"><path d="M0 0L14 14M14 0L0 14"></path>
                    </svg>
                    </button>

                </div>
                <div style={{fontWeight:600}}className='flex flex-col h-80 px-3 justify-center'>
                    <Link to='about' offset={-40}spy={true} smooth={true  } duration={800} className="my-4 cursor-pointer hover:text-sky-400 " onClick={()=>{setMenuOpen(!menuOpen)}}>Home</Link>
                    <Link to='work'  offset={-40}spy={true} smooth={true  } duration={800}className="my-4 hover:text-sky-400 cursor-pointer" onClick={()=>{setMenuOpen(!menuOpen)}}>Projects</Link>
                    <Link to="contacts" offset={-40}spy={true} smooth={true  } duration={800}className="my-4 hover:text-sky-400 cursor-pointer" onClick={()=>{setMenuOpen(!menuOpen)}}>About</Link>
                </div>
            </div>
        </>


    )
}

export default SideMenu
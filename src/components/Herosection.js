import React from 'react'

function HeroSection() {
  return (
    <section className='hero hero-section text-blue-600  align-middle justify-center flex flex-col md:flex-row'>
    
       <div className='basis-1/4 md:basis-1/4 center'>
          <img src="./yogi.jpg" alt="pofilepic" className=' rounded-full w-40 mx-auto  md:rounded-2xl    lg:h-96 lg:w-72 md:w-fit md:h-fit    ' />
       </div>

        <div className=" px-20 name flex basis-1/2 flex-col justify-center text-center">
          <h1 className='md:text-5xl text-left font-bold text-blue-400 '>Hi, I'm </h1>
          <p className='text-blue-200 text-5xl md:text-5xl text-left mt-2 mb-3'>Yograj</p>
          <p className='my-2 text-lg text-blue-400 md:text-xl font-medium text-left'>I'm a software engineer specializing in building web applications,  </p>
          <p className='text-lg text-blue-400 md:text-xl font-medium text-left'>currently I am actively looking to get internships  </p>
        </div>
        
   
    </section>
  )
}

export default HeroSection
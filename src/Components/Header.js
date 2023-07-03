import React from 'react'
import banner from "../assets/images/banner.png"
function Header() {
  return (
        <section name="Header">  
                <img src={banner} className='w-full bg-cover bg-center h-[20vh] md:h-[30vh] lg:h-[50vh]'/>
        </section>
  )
}

export default Header
import React from 'react'
import Navbarcompr from '../Componentpage/Navbacompr';
// import Imagefile from '../Componentpage/Imagefile'
import Footer from "../Componentpage/Footer"
import Imagefileproject  from "../Componentpage/Imagefileproject"
import Projectfile1 from '../Componentpage/Projectfile1';

const Projects = () => {
  return (
    <div className='bg-dark text-light'>
    <Navbarcompr />   
    <Imagefileproject/>
    <Projectfile1 />
     <Footer />
 
     </div>
  )
}

export default Projects

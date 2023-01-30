import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
 <nav>
{/* <NavLink to='/'> Home </NavLink>
<NavLink to='/About'> About </NavLink> */}
<NavLink to='/R1Carousel'> CarouselRoute</NavLink>
<NavLink to='/R3text'> TextRoute </NavLink>
<NavLink to='/R2List'> ListRoute </NavLink>
 </nav>
  )
}

export default Navbar
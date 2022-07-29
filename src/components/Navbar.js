import Hamburger from 'hamburger-react';
import './pages.css'
import React, {useState} from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"



export default function Navbar() {

  const [isOpen, setOpen] = useState(false)


  return (
    <nav className="nav">
      <Link to="/" className="ecommerce">
        Cozy Game Corner
      </Link>
      <ul>
        <CustomLink to="/Products">Products</CustomLink>
        <CustomLink to="/Contact">Contact</CustomLink>
      </ul>

      {/* <Hamburger  direction="right" duration={0.8} toggled={isOpen} toggle={setOpen}>
      <ul>
        <CustomLink to="/Products">Products</CustomLink>
        <CustomLink to="/Contact">Contact</CustomLink>
      </ul>
      </Hamburger> */}

      <Hamburger id="sidebar" class="sidebar" direction="right" duration={0.8} onToggle={toggled => {
  if (toggled) {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";

  } else {
     document.getElementById("sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  }
}} />
    </nav>





  );

//   /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
// function openNav() {
//   document.getElementById("sidebar").style.width = "250px";
//   document.getElementById("main").style.marginLeft = "250px";
// }



// /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
// function closeNav() {
//   document.getElementById("sidebar").style.width = "0";
//   document.getElementById("main").style.marginLeft = "0";
// }


}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>

    
  )
}
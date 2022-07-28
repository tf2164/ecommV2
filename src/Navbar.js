import './navbar.css'

import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="ecommerce">
        Cozy Game Corner
      </Link>
      <ul>
        <CustomLink to="/Products">Products</CustomLink>
        <CustomLink to="/About">About</CustomLink>
        <CustomLink to="/Contact">Contact</CustomLink>
      </ul>

      
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
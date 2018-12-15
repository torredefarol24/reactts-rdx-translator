import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: React.SFC = () => {
  return(
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink className="navbar-item" to="/">
          {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /> */}
          ReactTsWeather
        </NavLink>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar-menus">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar-menus" className="navbar-menu">
        <div className="navbar-start">
          <NavLink className="navbar-item" to="/">
            Home
          </NavLink>

          <NavLink className="navbar-item" to="/something">
            Something
          </NavLink>

        </div>
      </div>
    </nav>
  )
}
export default Navbar
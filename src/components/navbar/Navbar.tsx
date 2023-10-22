import React from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends React.Component{
  state = {
    classActive : ""
  }

  toggleNav(){
    if (this.state.classActive == ""){
      this.setState({
        classActive : "is-active"
      })
    } else {
      this.setState({
        classActive : ""
      })
    }
  }

  render(){

    const NavBrand = (
      <div className="navbar-brand">
        <NavLink className="navbar-item" to="/">
          {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /> */}
          ReactTsTranslator
        </NavLink>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMenus" onClick={this.toggleNav.bind(this)}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    )

    const NavMenuItems = (
      <div id="navbarMenus" className={"navbar-menu " + this.state.classActive} >
        <div className="navbar-start">
          <NavLink className="navbar-item" to="/" onClick={this.toggleNav.bind(this)}>
            Home
          </NavLink>
          <NavLink className="navbar-item" to="/translator" onClick={this.toggleNav.bind(this)}>
            Translator
          </NavLink>
          <NavLink className="navbar-item" to="/bookmarks" onClick={this.toggleNav.bind(this)}>
            Bookmarks
          </NavLink>
          {/* <NavLink className="navbar-item" to="/posts/thunk" onClick={this.toggleNav.bind(this)}>
            Posts (Thunk)
          </NavLink>
          <NavLink className="navbar-item" to="/posts" onClick={this.toggleNav.bind(this)}>
            Posts
          </NavLink> */}
        </div>
      </div>
    )

    const Navbar = (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        {NavBrand}
        {NavMenuItems}
      </nav>
    )

    return Navbar
  }

}

export default Navbar







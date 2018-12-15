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
    return(
      <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink className="navbar-item" to="/">
          {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /> */}
          ReactTsWeather
        </NavLink>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMenus" onClick={this.toggleNav.bind(this)}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarMenus" className={"navbar-menu " + this.state.classActive} >
        <div className="navbar-start">
          <NavLink className="navbar-item" to="/">
            Home
          </NavLink>

          <NavLink className="navbar-item" to="/posts">
            Posts
          </NavLink>

          <NavLink className="navbar-item" to="/posts/thunk">
            Posts (Thunk)
          </NavLink>

        </div>
        <div className='navbar-end'></div>
      </div>
      
    </nav>
    )
  }

}

export default Navbar







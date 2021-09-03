import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

const NavBar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{color:"rgb(39 124 230)",fontSize:"20px"}}>MyNewsMonk.com</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page"  style={{color:"rgb(39 124 230)"}} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business"  style={{color:"rgb(39 124 230)"}}>Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment"  style={{color:"rgb(39 124 230)"}}>Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general" style={{color:"rgb(39 124 230)"}} >General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health" style={{color:"rgb(39 124 230)"}}>Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science" style={{color:"rgb(39 124 230)"}}>Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports" style={{color:"rgb(39 124 230)"}}>Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology" style={{color:"rgb(39 124 230)"}}>Technology</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )

}

export default NavBar

import React from 'react'
import { Link } from 'gatsby'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar navbar-expand navbar-light flex-column flex-md-row ccco-header">
        <div className="container">
          <Link className="text-center" to="/">
            <img height="50" src="https://hiester.imgix.net/CCOsquare.png" />
            <h1 className="navbar-brand mb-0">Center City Chamber Orchestra</h1>
          </Link>

          <div className="navbar-nav flex-row ml-md-auto d-md-d-flex">
            <ul className="navbar-nav bd-navbar-nav d-flex mr-auto">
              <li
                className={
                  location.pathname === '/about/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/about/" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navi

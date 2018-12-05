import { Link } from 'gatsby'
import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

class Navi extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    const { location, title } = this.props
    return (
      <div className="container">
        <Navbar className="ccco-header" color="light" light expand="md">
          <NavbarBrand href="/">
            <img
              className="ccco-logo"
              src="https://hiester.imgix.net/CCOsquare.png"
            />
            <p className="navbar-brand mb-0" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/About/">About Us</Link>
              </NavItem>
              <NavItem>
                <Link to="/Performances/">Performances</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navi

/**
 * Dependencies
 */
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { signIn, signOut } from 'next-auth/client'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { NavDropdown } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

/**
 * Header Component
 */
export default function Header({ userInfo }) {
  return (
    <div id="header">
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Navbar.Brand href="/" className="d-md-block">
          <Image priority height={38} width={112} src="/Me2B_Logo-RGB-web.jpg" />
        </Navbar.Brand>
        <Nav className="mr-auto ml-auto d-none d-md-block">
          <Navbar.Text id="header-title">
            Good Tech Wiki
          </Navbar.Text>
        </Nav>
        <Navbar.Toggle aria-controls="navbar-nav-collapse" />
        <Nav style={{ width: '220px' }}>
          <Navbar.Collapse id="navbar-nav-collapse" style={{ justifyContent: 'flex-end' }}>
            <Nav>
              <div className="d-none d-md-block">
                {userInfo.name
                  && (
                    <Nav.Item id="header-logged-in-text">Logged in as {userInfo.name}
                      (
                      <Button variant="link" onClick={() => signOut()}>logout</Button>
                      )
                    </Nav.Item>
                  )
                  || (
                    <NavDropdown.Item onClick={() => signIn('github')} variant="secondary">
                      Sign in with github
                      {' '}<FontAwesomeIcon size="lg" width={20} icon={faGithub} />
                    </NavDropdown.Item>
                  )}
              </div>
              <div className="d-block d-md-none" title="Navigate" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/">Home</NavDropdown.Item>
                <NavDropdown.Item href="/organizations">Organizations</NavDropdown.Item>
                <NavDropdown.Item href="/events">Events</NavDropdown.Item>
                <NavDropdown.Item href="/publications">Publications</NavDropdown.Item>
                <NavDropdown.Item href="/products">Products</NavDropdown.Item>
                <NavDropdown.Item href="/workinggroups">Working Groups</NavDropdown.Item>
                {userInfo.name
                  && (
                    <NavDropdown.Item id="header-logged-in-text">Logged in as {userInfo.name}
                      (
                      <Button variant="link" onClick={() => signOut()}>logout</Button>
                      )
                    </NavDropdown.Item>
                  )
                  || (
                    <NavDropdown.Item onClick={() => signIn('github')} variant="secondary">
                      Sign in with github
                      {' '}<FontAwesomeIcon size="lg" width={20} icon={faGithub} />
                    </NavDropdown.Item>
                  )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Nav>
      </Navbar>
    </div>
  )
}

Header.propTypes = {
  userInfo: PropTypes.object
}

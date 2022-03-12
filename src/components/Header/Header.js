import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'

const authenticatedOptions = ({ user }) => {
  if (user) {
    return (
      <Fragment>
        <NavLink
          to='/change-password'
          className='nav-link'
          style={{ color: 'black' }}
        >
          Change Password
        </NavLink>
        <NavLink to='/sign-out' className='nav-link' style={{ color: 'black' }}>
          Sign Out
        </NavLink>
        <NavLink
          to={'/characters'}
          className='nav-link'
          style={{ color: 'black' }}
        >
          My characters
        </NavLink>
        <NavLink
          to='/characters/create'
          className='nav-link'
          style={{ color: 'black' }}
        >
          Create Character
        </NavLink>
      </Fragment>
    )
  }
}

const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-up' className='nav-link' style={{ color: 'black' }}>
      Sign Up
    </NavLink>
    <NavLink to='/sign-in' className='nav-link' style={{ color: 'black' }}>
      Sign In
    </NavLink>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <NavLink to='/' className='nav-link' style={{ color: 'black' }}>
      Home
    </NavLink>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar variant='dark' expand='md' className='nav'>
    <Navbar.Brand>
      <Link to='/' style={{ color: 'black' }}>
        Critical Characters
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle
      aria-controls='basic-navbar-nav'
      style={{ color: 'black' }}
    />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto'>
        {user && (
          <span className='navbar-text mr-2' style={{ color: 'black' }}>
            Welcome, {user.email}
          </span>
        )}
        {alwaysOptions}
        {user ? authenticatedOptions({ user }) : unauthenticatedOptions}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header

import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import MoviesPage from './pages/moviesPage'
import RegistrationPage from './pages/registrationPage'
import LogInPage from './pages/logInPage'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ProfilePage from './pages/profilePage'

export default function NavbarComp () {
  return (
      <BrowserRouter>
          <Navbar
            collapseOnSelect
            expand='lg'
            bg='dark'
            variant='dark'
            className='px-4'
          >
            <Navbar.Brand href='/'>Movies Catalog</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link as={Link} to='/movies'>Фильмы</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to='/login'>
                  Вход
                </Nav.Link>
                <Nav.Link as={Link} to='/registration'>
                  Регистрация
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Routes>
            <Route exact path='/' element={<MoviesPage />} />
            <Route path='/movies' element={<MoviesPage />} />
            <Route path='/registration' element={<RegistrationPage />} />
            <Route path='/login' element={<LogInPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Routes>
      </BrowserRouter>
  )
}

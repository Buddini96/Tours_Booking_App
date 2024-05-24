import React, {useRef, useEffect} from 'react'
import {Container, Row, Button} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
// import logo from '../../assets/images/logo.png';
import logo from '../../assets/images/srilanka/logo2.png';
import './header.css';

const nav_links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  } 
]

const Header = () => {
  const headerRef = useRef(null);

  const stickyHeaderFunction = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || 
        document.documentElement.scrollTop > 80
      ){
        headerRef.current.classList.add('sticky_header');
      }else {
        headerRef.current.classList.remove('sticky_header');
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunction();
    return window.removeEventListener('scroll', stickyHeaderFunction);
  });

  return (
  <header className="header" ref={headerRef}>
    <Container>
      <Row>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
            {/* Logo */}
            <div className="logo">
              <img src={logo} alt='logo'/>
            </div>

            {/* navigation */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {
                  nav_links.map((item,index) => (
                    <li className="nav_item">
                      <NavLink to={item.path} className={navClass => navClass.isActive ? 'active_link' : ''}>{item.display}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>

            {/* menu end */}
            <div className="nav_right d-flex align-items-center gap-4">
              <div className="nav_btns d-flex align-items-center gap-4">
                <Button className="btn secondary_btn">
                  <Link to='/login'>Login</Link>
                </Button>
                <Button className="btn primary_btn">
                  <Link to='/register'>Register</Link>
                </Button>
              </div>

              <span className="mobile_menu">
                <i class="ri-menu-line"></i>
              </span>
            </div>
        </div>
      </Row>
    </Container>
  </header>
  )
}

export default Header




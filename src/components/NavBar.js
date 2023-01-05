import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import NavCss from '../styles/NavBar.module.css';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import Toggle from './Toggle';
import '../index.css'

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {

  const [navOpen, setNavOpen] = useState(false)

  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut(auth).then(
      () => {
        alert("sign out successful")
        setIsLoggedIn(false)
        localStorage.setItem("isLoggedIn", false)
        navigate("/signin")
      }
    ).catch((err) => {
      alert("Error in sign out..try again")
    })
  }
  return (
    <>
      <header className={NavCss.header}>
        <div className={NavCss.logoDiv}>
          DevReport
        </div>
        <nav>
          <ul className='!hidden md:!flex'>
            <li>
              {isLoggedIn ? <NavLink to={'/feed'}>Home</NavLink> : <NavLink to={'/'}>Home</NavLink>}
            </li>
            <li>
              {isLoggedIn ? <NavLink to={'/createpost'}>Create Post</NavLink> : <NavLink to={'/signin'}>Log In</NavLink>}
            </li>
            <li>
              {isLoggedIn ? <NavLink to={'/'} onClick={handleSignOut}>Sign Out</NavLink> : <NavLink to={'/signup'}>Sign Up</NavLink>}
            </li>
          </ul>

          <ul className={`fixed transition duration-1000 ease-in-out top-0 left-0  z-10 h-full flex flex-col bg-blue-400 justify-evenly items-center md:!hidden  ${navOpen ? 'w-2/3' : 'w-0 invisible'} ${NavCss.mobile_nav}`}>
            <li className={`${navOpen ? 'visible' : 'invisible'}`}>
              {isLoggedIn ? <NavLink to={'/feed'}>Home</NavLink> : <NavLink to={'/'}>Home</NavLink>}
            </li>
            <li className={`${navOpen ? 'visible' : 'invisible'}`}>
              {isLoggedIn ? <NavLink to={'/createpost'}>Create Post</NavLink> : <NavLink to={'/signin'}>Log In</NavLink>}
            </li>
            <li className={`${navOpen ? 'visible' : 'invisible'}`}>
              {isLoggedIn ? <NavLink to={'/'} onClick={handleSignOut}>Sign Out</NavLink> : <NavLink to={'/signup'}>Sign Up</NavLink>}
            </li>
          </ul>
        </nav>

        <div onClick={() => setNavOpen(!navOpen)} className='md:!hidden'>
          <Toggle isOpen={navOpen}></Toggle>
        </div>


      </header>

      <Outlet />


    </>
  );
};

export default NavBar;

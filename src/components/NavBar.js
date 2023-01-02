import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import NavCss from '../styles/NavBar.module.css';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import '../index.css'

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {

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
          <ul>
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
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default NavBar;

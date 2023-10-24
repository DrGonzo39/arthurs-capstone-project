import React, { useContext } from 'react'
import { UserContext } from '../contexts/user'
import { NavLink } from 'react-router-dom'

const linkStyles = {
    display: "inline-block",
    width: "75px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "crimson",
    textDecoration: "none",
    color: "white",
  };
  

function NavBar() {
    const {user, isLoggedIn, onLogout} = useContext(UserContext)
    
    function logout() {
        fetch("/logout", {
            method: 'DELETE'
        })
        .then(() => {
            onLogout()
        })
    }

    if (isLoggedIn) {
        return (
            <>
            <h1 id="user_name_text">{`Hello ${user.username}`}</h1>
            <br/>
            <button style={linkStyles} onClick={logout}>Logout</button>
           
            </>
        )
    }else{
        return (
            <>
            <NavLink to="/login"
                style={linkStyles}
            >
                Login
            </NavLink>
            <NavLink to="/signup"
                style={linkStyles}
            >
                Sign up 
            </NavLink>
            </>
        )
    }
}

export default NavBar;
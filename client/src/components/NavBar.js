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
            <div id="nav_bar">
            <h1 id="user_name_text">{`Hello ${user.username}`}</h1>
            <h2 id='user_type_text'>{user.type}</h2>
            <br/>
            <button style={linkStyles} onClick={logout}>Logout</button>
            <NavLink to="/home" 
                style={linkStyles}
            >
                Home/Info 
            </NavLink>
            <NavLink to="/venues"
                style={linkStyles}
            >
                Venues List 
            </NavLink>
            <NavLink to="/artists"
                style={linkStyles}
            >
                Artist Profiles 
            </NavLink>
            <NavLink to="/users"
                style={linkStyles}
            >
                User Community
            </NavLink>
            </div>
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
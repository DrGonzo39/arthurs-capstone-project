import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch("/me")
        .then((r) => r.json())
        .then((data) => { 
            if (data.errors) {
                console.log(data.errors)
            }else{
                setUser(data)
                setIsLoggedIn(true)
            }
        })
    }, [])
    
    function onLogin(user) {
        setIsLoggedIn(true)
        setUser(user)
        navigate("/home");
    }

    function onSignUp(user) {
        setIsLoggedIn(true)
        setUser(user)
        navigate("/home");
    }

    function onLogout() {
        setIsLoggedIn(false)
        setUser({})
        navigate("/login");
    }

    return(
        <UserContext.Provider value={{ user, setUser, onLogin, onSignUp, onLogout, isLoggedIn  }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider }; 
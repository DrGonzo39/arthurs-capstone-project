import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../contexts/user';

function UsersPage() {
    const [userList, setUserList] = useState([])
    const [errors, setErrors] = useState([])
    const { isLoggedIn } = useContext(UserContext);

    useEffect(() => {
        fetch("/users")
        .then((r) => {
            if (r.ok) {
                r.json().then((data) => setUserList(data))
            }else{
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }, [])
    
    if (isLoggedIn) {
        return (
            <>
            <div>
                {userList.map((user) => (
                    <div id='user_info'>
                    <h1>UserName - {user.username}</h1>
                    <p>Show {user.type}</p>
                    <h3>{user.bio}</h3>
                    <br />
                    </div>
                ))}
            </div>
            <ul>
                {errors.map((err) => (
                    <li key={err}>{err}</li>
                ))}
            </ul>
            </>
        )
    }else{
        return (
            <h1 id='login_prompt_text'>Please Login or Sign Up</h1>
        )
    }
}

export default UsersPage;

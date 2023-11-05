import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/user';


function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [bio, setBio] = useState("");
  const [type, setType] = useState("");
  const [errors, setErrors] = useState([])
  const { onSignUp } = useContext(UserContext);
  
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: passwordConfirmation,
        bio: bio,
        type: type 
      }),
    }).then((r) => {
      setUsername("")
      setPassword("")
      setPasswordConfirmation("")
      setBio("")
      setType("")
        if (r.ok) {
          r.json().then((user) => onSignUp(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username" id="username_label">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password" id="password_label">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="password_confirmation" id="confirm_label">Confirm Password:</label>
      <input
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      <label htmlFor='bio' id="bio_label">What's your deal?</label>
      <input 
      type='text'
      id='bio'
      value={bio}
      onChange={(e) => setBio(e.target.value)}
      />
      <label htmlFor='type' id="type_label">Are you a show Goer or a show Promoter?</label>
      <input
      type='text'
      id='type'
      value={type}
      onChange={(e) => setType(e.target.value)} 
      />
      <button type="submit">Submit</button>
      <ul>{errors.map((err) => (
        <li key={err}>{err}</li>
      ))}</ul>
    </form>
    );
}


export default SignUpForm;
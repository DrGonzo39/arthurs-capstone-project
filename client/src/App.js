import React from "react";
import { Route, Routes } from 'react-router-dom';
import { UserProvider } from "./contexts/user";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import NavBar from "./components/NavBar";


function App() {
  
  return (
    <div className="App">
    <UserProvider>
      <NavBar/>
      <Routes>
        <Route exact path="/signup" element={<SignUpForm/>}/>
        <Route exact path="/login" element={<LoginForm/>}/>
      </Routes>
    </UserProvider>
    </div>
  );
}

export default App;

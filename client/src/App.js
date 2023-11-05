import React from "react";
import { Route, Routes } from 'react-router-dom';
import { UserProvider } from "./contexts/user";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import NavBar from "./components/NavBar";
import { VenuesProvider } from "./contexts/venues";
import { ArtistsProvider } from "./contexts/artists";
import VenuesPage from "./components/VenuesPage";
import ArtistsPage from "./components/ArtistsPage";
import UsersPage from "./components/UsersPage";
import HomePage from "./components/HomePage";


function App() {
  
  return (
    <div className="App">
    <UserProvider>  
    <ArtistsProvider>  
    <VenuesProvider>
      <NavBar/>
      <Routes>
        <Route exact path="/signup" element={<SignUpForm/>}/>
        <Route exact path="/login" element={<LoginForm/>}/>
        <Route exact path="/home" element={<HomePage/>}/>
        <Route exact path="/venues" element={<VenuesPage/>}/>
        <Route exact path="/artists" element={<ArtistsPage/>}/>
        <Route exact path="/users" element={<UsersPage/>}/>
      </Routes>
    </VenuesProvider>
    </ArtistsProvider>
    </UserProvider>  
    </div>
  );
}

export default App;

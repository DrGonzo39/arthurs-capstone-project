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


function App() {
  
  return (
    <div className="App">
    <ArtistsProvider>  
    <VenuesProvider>
    <UserProvider>
      <NavBar/>
      <Routes>
        <Route exact path="/signup" element={<SignUpForm/>}/>
        <Route exact path="/login" element={<LoginForm/>}/>
        <Route exact path="/venues" element={<VenuesPage/>}/>
        <Route exact path="/artists" element={<ArtistsPage/>}/>
        <Route exact path="/users" element={<UsersPage/>}/>
      </Routes>
    </UserProvider>
    </VenuesProvider>
    </ArtistsProvider>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { SignUp } from "./components/Signup";
import { Logout } from "./components/Logout";
import { Profile } from "./components/Profile";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element= {<SignUp/>}/>
        <Route path="/logout" element={<Logout/>} />
        <Route path="/profile" element={<Profile />} />
       
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Logout } from "./components/Logout";
import { Test } from "./components/Test";
import { OtpVerification } from "./components/OtpVerification"; 
import { Profile } from "./components/Profile";
import { EventInfo } from "./components/EventInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/test" element={<Test />} />
        <Route path="/verify-otp" element={<OtpVerification />} /> 
        <Route  path="/profile" element={<Profile/>}/>
        <Route path="/eventinfo" element={<EventInfo/>}/>
      </Routes>
    </Router>
  );
}

export default App;

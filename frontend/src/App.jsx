import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Logout } from "./components/Logout";
import { Test } from "./components/Test";
import { EmailVerification } from "./components/EmailVerification ";
import { EmailVerificationPrompt } from "./components/EmailVerificationPrompt";
import { Profile } from "./components/Profile";
import { EventInfo } from "./components/EventInfo";
import { ExplorePage } from "./components/ExplorePage";
import { OrganizerForm  } from "./components/OrganizerForm";
import { EventForm } from "./components/EevntForm";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/test" element={<Test />} />
        <Route path="/verify-email" element={<EmailVerificationPrompt />} /> 
        <Route path= "/email/verify" element={<EmailVerification/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/events/:id" element={<EventInfo />} />          
        <Route path="/explore" element={<ExplorePage/>}/>
        <Route path="/Organizer" element={<OrganizerForm />} />
        <Route path="/create-event" element={<EventForm/>}/>
        <Route path= "/dashboard" element= {<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;

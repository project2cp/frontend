import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Login } from "./components/auth/Login";
import { Signup } from "./components/auth/Signup";
import { Logout } from "./components/auth/Logout";
import { Test } from "./components/Test";
import { EmailVerification } from "./components/auth/EmailVerification ";
import { EmailVerificationPrompt } from "./components/auth/EmailVerificationPrompt";
import { Profile } from "./components/pages/Profile";
import { EventInfo } from "./components/pages/EventInfo";
import { ExplorePage } from "./components/pages/ExplorePage";
import { OrganizerForm  } from "./components/pages/OrganizerForm";
import { EventForm } from "./components/pages/EevntForm";
import { Dashboard } from "./components/pages/Dashboard";
import { MyTickets } from "./components/pages/MyTickets";

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
        <Route path= "/my-tickets" element= {<MyTickets/>} />
      </Routes>
    </Router>
  );
}

export default App;

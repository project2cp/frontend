import React from 'react';
import ai from '../assets/ai.jpeg';
import hackthon from '../assets/hackthon.jpg';
import { useNavigate } from 'react-router-dom';
import { EventCard } from "./EventCard"; 
import { Navbar } from "./Navbar";

const similarEvents = [
  { 
    title: "Sahara Beats Festival", 
    date: "July 20-21, 2025", 
    location: "Algiers, Algeria", 
    category: "Entertainment", 
    img: hackthon,
    organizer: "SAFEX" 
  },
  { 
    title: "Algorithmic Competition Summer Camp", 
    date: "July 20-21, 2025", 
    location: "Online", 
    category: "Education", 
    img: hackthon,
    organizer: "AlgoVibes" 
  },
  { 
    title: "Algiers Collective Arts Fair", 
    date: "July 20-21, 2025", 
    location: "Algiers, Algeria", 
    category: "Arts", 
    img: hackthon,
    organizer: "ArtHub" 
  },
];


export const EventInfo = () => {
  const navigate = useNavigate();

  const handleEventClick = (eventData) => {
    navigate(`/events/${encodeURIComponent(eventData.title)}`);
  };

  const navItems = [
    { text: 'Home', href: '/', className: "underline-effect" },
    { text: "Favorite", href: "/favorite-events", className: "underline-effect" },
    { text: "My tickets", href: "/my-tickets", className: "underline-effect" },
    { text: "Username", href: "#", className: "underline-effect" },
  ];
  

  return (
    <div className="min-h-screen bg-[var(--bg-purple)]">
      <Navbar navItems={navItems} />
      
      <div className="max-w-5xl mx-auto mt-8 p-6 rounded-xl shadow-lg ">
        <h1 className="text-3xl font-extrabold text-white mb-6">AI Robotic</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <img
            src={ai}
            alt="AI Robotic Event"
            className="w-full h-52 object-cover rounded-lg shadow"
          />
          
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <div className="text-sm text-white mb-1">1765 Registered</div>
              <div className="mb-2">
                <span className="font-semibold text-white">Starts on:</span>
                <span className="text-white"> Mar 07, 2025, 5:00 pm</span>
              </div>
              <div className="mb-2">
                <span className="font-semibold text-white">State:</span>
                <span className="text-white"> Online</span>
              </div>
              <div className="mb-2">
                <span className="font-semibold text-white">Price:</span>
                <span className="text-white"> 25$</span>
              </div>
              <div className="mb-4">
                <span className="font-semibold text-white">Ends on:</span>
                <span className="text-white"> Mar 07, 2025, 5:00 pm</span>
              </div>
            </div>
            <button
              className="mt-2 w-max bg-purple-900 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-purple-800 transition"
              onClick={() => navigate('/register')}
            >
              REGISTER NOW
            </button>
          </div>
        </div>

        <div className="border-t border-gray-200 my-8"></div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Organizers</h3>
              <a href="#" className="text-white text-lg font-medium hover:underline">
            SAFEX
            </a>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Sponsored by</h3>
              <a href="#" className="text-white text-lg font-medium hover:underline">
            SAFEX
            </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Prizes</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">1</span>
                </div>
                <span className="text-lg font-medium text-white">£900 - First place winner</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">2</span>
                </div>
                <span className="text-lg font-medium text-white">£500 - Second place winner</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-amber-600 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">3</span>
                </div>
                <span className="text-lg font-medium text-white">£500 - Third place winner</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8  rounded-lg border border-gray-200 p-4">
          <h2 className="text-xl font-semibold text-white mb-4">Description</h2>
          <p className="text-white leading-relaxed">
            This hackathon challenges innovators to fuse artificial intelligence with robotic
            systems, creating autonomous solutions for real-world problems. From neural
            networks guiding mechanical limbs to computer vision-driven navigation
            systems, participants will breathe life into metal and code.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-white mb-4">Similar events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {similarEvents.map((eventData, index) => (
              <EventCard
                key={index}
                event={eventData}
                onClick={() => handleEventClick(eventData)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 border-t text-white pt-6">
          <span className="font-semibold text-white">Comments :</span>
          <div className="mt-2">
            <a href="../Signup" className="text-white underline">
              Sign in
            </a>{" "}
            to comment
          </div>
        </div>
      </div>

      <footer className="mt-10 text-xs text-gray-400 text-center pb-8">
        © 2012 — 2024 EventSphere team.<br />
        All tasks and writeups are copyrighted by their respective authors.{" "}
        <a href="#" className="underline">
          Privacy
        </a>
      </footer>
    </div>
  );
};
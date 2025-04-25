import React from 'react'
import ai from '../assets/ai.jpeg'
import hackthon from '../assets/hackthon.jpg' ;
import { useNavigate } from 'react-router-dom';
import { event } from "./event"; 


const similarEvents = [
    { title: "Sahara Beats Festival", date: "July 20-21, 2025", location: "Algiers, Algeria", category: "Entertainment", img: hackthon, },
    { title: "Algorithmic Competition Summer Camp", date: "July 20-21, 2025", location: "Organized: AlgoVibes", category: "Education", img: hackthon },
    { title: "Algiers Collective Arts Fair", date: "July 20-21, 2025", location: "Algiers, Algeria", category: "Arts", img: hackthon, },
];


export const EventInfo = () => {
    const navigate = useNavigate();

    const handleEventClick = () => {
      
        navigate(`#`);
    };

    
    return (

        <div className="min-h-screen bg-v">
        {/* Navbar */}
       
  
        {/* Main Container */}
        <div className="max-w-5xl mx-auto mt-8 p-6  rounded-xl shadow-lg">
          {/* Title */}
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">AI Robotic</h1>
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event Image */}
            <img
              src={ai}
              alt="AI Robotic Event"
              className="w-full h-52 object-cover rounded-lg shadow"
            />
            {/* Event Info */}
            <div className="md:col-span-2 flex flex-col justify-between">
              <div>
                <div className="text-sm text-gray-500 mb-1">1765 Registered</div>
                <div className="mb-2">
                  <span className="font-semibold">Starts on:</span>{" "}
                  <span className="text-gray-800">Mar 07, 2025, 5:00 pm</span>
                </div>
                <div className="mb-2">
                  <span className="font-semibold">State:</span>{" "}
                  <span className="text-gray-800">Online</span>
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Price:</span>{" "}
                  <span className="text-gray-800">25$</span>
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Ends on:</span>{" "}
                  <span className="text-gray-800">Mar 07, 2025, 5:00 pm</span>
                </div>
              </div>
              <a
                href="#register"
                className="mt-2 w-max bg-purple-900 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-purple-800 transition"
              >
                REGISTER NOW
              </a>
            </div>
          </div>
  
     {/* Details Section */}
{/* Details Section */}
<div className="border-t border-gray-200 my-4"></div>

  {/* Details Grid */}
  <div className="grid md:grid-cols-2 gap-8">
    <div className="space-y-4 space-x-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Organizers</h3>
        <p className="text-lg font-medium text-gray-900">SAFEX</p>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Sponsored by</h3>
        <p className="text-lg font-medium text-gray-900">SAFEX</p>
      </div>
    </div>

    <div>
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Prizes</h3>
      <ul className="space-y-3">
        <li className="flex items-center gap-3">
          <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-white">1</span>
          </div>
          <span className="text-lg font-medium">£900 - First place winner</span>
        </li>
        <li className="flex items-center gap-3">
          <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-gray-700">2</span>
          </div>
          <span className="text-lg font-medium">£500 - Second place winner</span>
        </li>
        <li className="flex items-center gap-3">
          <div className="w-5 h-5 bg-amber-600 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-white">3</span>
          </div>
          <span className="text-lg font-medium">£500 - Third place winner</span>
        </li>
      </ul>
    </div>
  </div>

  {/* Description */}
  <div className="mt-8 bg-gray-50 rounded-lg border border-gray-200 p-4">
    <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
    <p className="text-gray-700 leading-relaxed">
      This hackathon challenges innovators to fuse artificial intelligence with robotic
      systems, creating autonomous solutions for real-world problems. From neural
      networks guiding mechanical limbs to computer vision-driven navigation
      systems, participants will breathe life into metal and code.
    </p>
  </div>

  
        
        {/* Similar Events */}
        <div className="mt-10">
          <span className="font-semibold text-lg">Similar events :</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {similarEvents.map((eventData, index) => (
              // eslint-disable-next-line react/jsx-no-undef
              <Event
                key={index}
                img={eventData.img}
                title={eventData.title}
                date={eventData.date}
                location={eventData.location}
                category={eventData.category}
                onClick={() => handleEventClick(eventData)}
              />
            ))}
          </div>
        </div>
  
          {/* Comments */}
          <div className="mt-10 border-t pt-6">
            <span className="font-semibold">Comments :</span>
            <div className="mt-2">
              <a href="../Signup" className="text-purple-700 underline">
                Sign in
              </a>{" "}
              to comment
            </div>
          </div>
        </div>
  
        {/* Footer */}
        <footer className="mt-10 text-xs text-gray-400 text-center">
          © 2012 — 2024 EventSphere team.<br />
          All tasks and writeups are copyrighted by their respective authors.{" "}
          <a href="#" className="underline">
            Privacy
          </a>
          .
        </footer>
      </div>
    );



}
import React, { useRef, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { gsap } from 'gsap';
import { FaPlus, FaTicketAlt, FaUsers, FaChartLine, FaCalendarCheck, FaMapMarker, FaHistory } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', registrations: 4000 },
  { name: 'Feb', registrations: 3000 },
  { name: 'Mar', registrations: 5000 },
  { name: 'Apr', registrations: 2780 },
  { name: 'May', registrations: 1890 },
  { name: 'Jun', registrations: 2390 },
];

const topEvents = [
  { name: 'Tech Conference', registrations: 2345 },
  { name: 'Music Festival', registrations: 1890 },
  { name: 'Workshop Series', registrations: 1567 },
];

export const Dashboard = () => {
  const statsRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    gsap.from(statsRef.current.children, {
      duration: 0.8,
      y: 50,
      opacity: 1,
      stagger: 0.2,
      ease: "power2.out"
    });

    gsap.from(cardsRef.current.children, {
      duration: 0.8,
      x: -50,
      opacity: 1,
      stagger: 0.2,
      ease: "power2.out",
      delay: 0.3
    });
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-purple)] font-sans">
      <Navbar navItems={[
        { text: 'Home', href: '/', className: "underline-effect" },
        { text: "Favorite", href: "/favorite-events", className: "underline-effect" },
        { text: "My tickets", href: "/my-tickets", className: "underline-effect" },
        { text: "Username", href: "#", className: "underline-effect" },
      ]} />
      
      <div className="flex">
        <div className="w-60">
          <Sidebar sidebarItems={{
            'Dashboard': [
              { text: 'Overview', link: '/dashboard', className: "" },
              { text: 'Event Analytics', link: '/analytics', className: "" },
              { text: 'Revenue Reports', link: '/revenue', className: "" }
            ],
            'Events': [
              { text: 'Create Event', link: '/create-event', className: "" },
              { text: 'Upcoming Events', link: '/upcoming', className: "" },
              { text: 'Past Events', link: '/past-events', className: "" }
            ],
            'Settings': [
              { text: 'Profile Settings', link: '/settings', className: "" },
              { text: 'Notifications', link: '/notifications', className: "" }
            ]
          }} />
        </div>

        {/* Main Content */}
        <div className="w-[calc(100%-240px)] p-8 pt-20 bg-[#f5f7fb]">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-12 mt-6">
            <h1 className="text-3xl font-bold text-[#4a2c8a]">Organizer Dashboard</h1>
            <div className="flex gap-4">
              <button className="bg-[#4a2c8a] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#6b4ba5] transition-colors">
                <FaPlus /> Create Event
              </button>
              <button className="bg-[#c4adf4] text-[#4a2c8a] px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#a790d8] transition-colors">
                <FaHistory /> Past Events
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-[#2c2c3e]/10 hover:transform hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500">Total Events</p>
                  <p className="text-3xl font-bold text-[#4a2c8a]">24</p>
                </div>
                <div className="p-3 bg-[#4a2c8a]/10 rounded-full">
                  <FaCalendarCheck className="text-[#4a2c8a] text-xl" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-[#2c2c3e]/10 hover:transform hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500">Upcoming Events</p>
                  <p className="text-3xl font-bold text-[#4a2c8a]">5</p>
                </div>
                <div className="p-3 bg-[#4a2c8a]/10 rounded-full">
                  <FaTicketAlt className="text-[#4a2c8a] text-xl" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-[#2c2c3e]/10 hover:transform hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500">Total Tickets Sold</p>
                  <p className="text-3xl font-bold text-[#4a2c8a]">1,234</p>
                </div>
                <div className="p-3 bg-[#4a2c8a]/10 rounded-full">
                  <FaUsers className="text-[#4a2c8a] text-xl" />
                </div>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-[#2c2c3e]/10">
              <h2 className="text-xl font-semibold text-[#4a2c8a] mb-4">Registrations Trend</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="name" stroke="#4a2c8a" />
                    <YAxis stroke="#4a2c8a" />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="registrations" 
                      stroke="#4a2c8a" 
                      strokeWidth={2}
                      dot={{ fill: '#c4adf4', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-[#2c2c3e]/10">
              <h2 className="text-xl font-semibold text-[#4a2c8a] mb-4">Top Performing Events</h2>
              <div className="space-y-4">
                {topEvents.map((event, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-[#f5f7fb] rounded-lg hover:bg-[#eeeef7] transition-colors">
                    <span className="font-medium text-gray-700">{event.name}</span>
                    <span className="text-[#4a2c8a] font-semibold">{event.registrations.toLocaleString()} registrations</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Event Cards Section */}
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
            {[1, 2, 3, 4, 5].map((event) => (
              <div key={event} className="bg-white p-8 rounded-xl shadow-lg border border-[#2c2c3e]/10 hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="mb-6">
                  <div className="h-48 bg-[#4a2c8a]/10 rounded-xl mb-6 overflow-hidden">
                    <img 
                      src="https://via.placeholder.com/400x200" 
                      alt="Event preview" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#4a2c8a] mb-3">Event Name {event}</h3>
                  <p className="text-gray-500 text-sm mb-6">March 15, 2024</p>
                  
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <FaMapMarker className="text-[#4a2c8a]" />
                      <span>New York</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <FaTicketAlt className="text-[#4a2c8a]" />
                      <span>234 sold</span>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-6 flex gap-4">
                  <button className="flex-1 bg-[#4a2c8a]/10 text-[#4a2c8a] px-4 py-3 rounded-lg hover:bg-[#4a2c8a]/20 transition-colors">
                    Edit
                  </button>
                  <button className="flex-1 bg-[#4a2c8a] text-white px-4 py-3 rounded-lg hover:bg-[#6b4ba5] transition-colors">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
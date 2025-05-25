import React, { useRef, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { gsap } from 'gsap';
import { FaCalendar, FaUser, FaChartLine, FaClock, FaPlus, FaHistory } from 'react-icons/fa';

// Sample event data based on the image
const eventsData = [
  { title: 'Conférence mise à jour', date: '01/04/2025', location: 'Alger', ticketLimit: 50, registrations: 0, participationRate: '0%' },
  { title: 'Conférence HTML', date: '01/04/2025', location: 'Alger', ticketLimit: 50, registrations: 0, participationRate: '0%' },
  { title: 'Conférence Laravel', date: '01/04/2025', location: 'Alger', ticketLimit: 50, registrations: 0, participationRate: '0%' },
  { title: 'Hack', date: '01/04/2025', location: 'Alger', ticketLimit: 50, registrations: 6, participationRate: '12%' },
];

export const Dashboard = () => {
  const statsRef = useRef(null);
  const tableRef = useRef(null);

  useEffect(() => {
    gsap.from(statsRef.current.children, {
      duration: 1, // Increased for smoother animation
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out"
    });

    gsap.from(tableRef.current, {
      duration: 1, // Increased for smoother animation
      y: 50,
      opacity: 0,
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
        <div className="w-[calc(100%-240px)] p-8 pt-20 bg-[var(--bg-purple)]">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-12 mt-6">
            <h1 className="text-3xl font-bold text-white">Tableau de bord</h1>
            <div className="flex gap-4">
              <button className="bg-white text-[#4a2c8a] px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#d6b9f0] transition-colors">
                <FaPlus /> Create Event
              </button>
              <button className="bg-white text-[#4a2c8a] px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#d6b9f0] transition-colors">
                <FaHistory /> Past Events
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg flex items-center justify-between hover:shadow-xl transition-shadow">
              <div>
                <p className="text-gray-500">Total d'événements</p>
                <p className="text-3xl font-bold text-[#4a2c8a]">7</p>
              </div>
              <FaCalendar className="text-[#4a2c8a] text-3xl" />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg flex items-center justify-between hover:shadow-xl transition-shadow">
              <div>
                <p className="text-gray-500">Inscriptions totales</p>
                <p className="text-3xl font-bold text-[#4a2c8a]">6</p>
              </div>
              <FaUser className="text-[#4a2c8a] text-3xl" />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg flex items-center justify-between hover:shadow-xl transition-shadow">
              <div>
                <p className="text-gray-500">Taux moyen de participation</p>
                <p className="text-3xl font-bold text-[#4a2c8a]">3%</p>
              </div>
              <FaChartLine className="text-[#4a2c8a] text-3xl" />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg flex items-center justify-between hover:shadow-xl transition-shadow">
              <div>
                <p className="text-gray-500">Prochain événement à venir</p>
                <p className="text-lg font-bold text-[#4a2c8a]">01/04/2025</p>
              </div>
              <FaClock className="text-[#4a2c8a] text-3xl" />
            </div>
          </div>

          {/* Events Table */}
          <div ref={tableRef} className="bg-white p-6 rounded-xl shadow-lg border border-[#2c2c3e]/10">
            <h2 className="text-xl font-semibold text-[#4a2c8a] mb-4">Événements</h2>
            <table className="w-full text-left text-[#2c2c3e]">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4">Titre</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Lieu</th>
                  <th className="p-4">Limite de tickets</th>
                  <th className="p-4">Inscriptions</th>
                  <th className="p-4">Taux de participation</th>
                </tr>
              </thead>
              <tbody>
                {eventsData.map((event, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4">{event.title}</td>
                    <td className="p-4">{event.date}</td>
                    <td className="p-4">{event.location}</td>
                    <td className="p-4">{event.ticketLimit}</td>
                    <td className="p-4">{event.registrations}</td>
                    <td className="p-4">{event.participationRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
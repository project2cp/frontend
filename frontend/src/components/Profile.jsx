import React from "react";
import logo from '../assets/logo.png';
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const Profile = () => {
  const navItems = [
    { text: 'Home', href: '/' ,className: "underline-effect"},

    { text: "Favorite", href: "/favorite-events" , className: "underline-effect" },
  
    { text: "My tickets", href: "/my-tickets",className: "underline-effect" },
    { text: "Username", href: "#" ,className: "underline-effect"},
  ];

  const SidebarItems = [
    { text: 'Contact info', link: '/contact-info', className: "" },
    { text: 'Change email', link: '/change-email', className: "" },
    { text: 'Password', link: '/password', className: "" },
    { text: 'Credit/Debit cards', link: '/credit-cards', className: "" },
    { text: 'Location', link: '/location', className: "" },
    { text: 'Email preferences', link: '/email-preferences', className: "" },
    { text: 'Linked accounts', link: '/linked-accounts', className: "" },
    { text: 'Personal data', link: '/personal-data', className: "" },
    { text: 'Close accounts', link: '/close-account', className: "" },
  
    // Events Section
    { text: 'History', link: '/event-history', className: "" },
    { text: 'Favorite', link: '/favorite-events', className: "" },
    { text: 'Booked events', link: '/booked-events', className: "" },
    { text: 'Settings', link: '/settings', className: "" },
]

  return (
    <div className="min-h-screen bg-[var(--bg-purple)] text-white font-sans">
    {/* Navbar */}
    <Navbar navItems={navItems}  />

    {/* Main Content */}
    <div className="flex pt-19">
      {/* Sidebar */}
      <Sidebar SidebarItems={SidebarItems}/>

      {/* Profile Section */}
      <main className="flex-grow p-6 space-y-6">
        {/* Personal Info */}
        <section className="bg-[#0f0f1f] p-6 rounded-lg border border-[#2c2c3e] space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Personal info</h2>
            <button className="border-white border-1  px-4 py-2 rounded ">Edit </button>
          </div>
          <div className="space-y-2 text-gray-300">
            <p><strong>Full name:</strong> Alex Park</p>
            <p><strong>Email:</strong> AlexPark@Kr.com</p>
            <p><strong>Phone:</strong> 0560 25 ***</p>
          </div>
        </section>

        {/* Bio Section */}
        <section className="bg-[#0f0f1f] p-6 rounded-lg border border-[#2c2c3e] space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Bio</h2>
            <button className="border-white border-1  px-4 py-2 rounded ">Edit </button>
          </div>
          <p className="text-gray-300">
            Hi, I'm Alex! I'm using this platform for the long term as it facilitates event management and helps me stay connected with exciting opportunities. Looking forward to discovering and joining amazing events!
            I wish they would add more advanced features and improvements to make the experience even better!
          </p>
        </section>

        {/* Profile Picture Section */}
        <section className="bg-[#0f0f1f] p-6 rounded-lg border border-[#2c2c3e] space-y-4 text-center">
          <h2 className="text-xl font-semibold">Profile Picture</h2>
          {/* Placeholder for Profile Picture */}
          <div className="w-[200px] h-[200px] mx-auto bg-gray-700 rounded-full"></div>
          {/* Upload Button */}
          <button className="bg-blue-500 px-4 py-2 mt-4 rounded hover:bg-blue-600">Upload new photo</button>
          {/* Recommendation Text */}
          <p className="text-sm text-gray-400 mt-2">At least 800 x 800 px recommended. JPG or PNG is allowed.</p>
        </section>

      </main>

      {/* Profile Completion Section */}
      <aside className="w-150 bg-[#0f0f1f] p-6 mb-6.5 pl-10 mr-6 mt-5.5 rounded-lg border border-[#2c2c3e] space-y-4">
        {/* Progress Circle */}
        <div className="flex flex-col items-center space-y-4">
          {/* Circular Progress Bar */}
          <svg width={120} height={120}>
            {/* Background Circle */}
            <circle cx={60} cy={60} r={50} stroke="#333" strokeWidth={10} fill="none" />
            {/* Foreground Circle (Progress) */}
            <circle
              cx={60}
              cy={60}
              r={50}
              stroke="#00bcd4"
              strokeWidth={10}
              fill="none"
              strokeDasharray={314}
              strokeDashoffset={314 - (314 * 40) / 100} // 40% progress
              transform="rotate(-90 60 60)"
            />
            {/* Percentage Text */}
            <text x={60} y={65} textAnchor="middle" fill="#fff" fontSize={20}>
              40%
            </text>
          </svg>

          {/* Title */}
          <h3 className="text-lg font-semibold">Complete your profile</h3>

          {/* Checklist */}
          <ul className="space-y-2 text-gray-400 text-sm">
            {[
              { label: "Setup account", completed: true, percentage: 10 },
              { label: "Upload your photo", completed: true, percentage: 5 },
              { label: "Personal info", completed: true, percentage: 10 },
              { label: "Location", completed: false, percentage: 10 },
              { label: "Biography", completed: false, percentage: 15 },
              { label: "Notifications", completed: false, percentage: 10 },
              { label: "Payment details", completed: false, percentage: 30 },
            ].map((item, index) => (
              <li key={index}>
                {item.completed ? "✔️" : "❌"} {item.label} ({item.percentage}%)
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  </div>

  );
};

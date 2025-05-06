import React from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { useState } from "react";
import { FaCheck, FaTimes, FaEdit } from "react-icons/fa";

export const Profile = () => {
  const [userData, setUserData] = useState({
    fullName: "safia lounassi",
    email: "s.lounassi@esi-sba@dz",
    phone: "",
    location: "",
    bio: "",
    profileImg: null,
    notificationEnabled: true,
    payementMethode: []
  });

  const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false);
  const [isEditingBio, setIsEditingBio] = useState(false);

  const completionSteps = [
    { label: "Setup account", completed: true, percentage: 10 },
    { label: "Upload your photo", completed: !!userData.profileImg, percentage: 5 },
    { 
      label: "Personal info", 
      completed: userData.fullName.trim() !== "" && 
                 userData.email.trim() !== "" && 
                 userData.phone.trim() !== "" && 
                 userData.location.trim() !== "",
      percentage: 35
    },
    { label: "Biography", completed: userData.bio.trim() !== "", percentage: 20 },
    { label: "Notifications", completed: userData.notificationEnabled, percentage: 10 },
    { label: "Payment details", completed: userData.payementMethode.length > 0, percentage: 20 }
  ];

  const totalPercentage = completionSteps.reduce(
    (sum, step) => sum + (step.completed ? step.percentage : 0),
    0
  );

  const circumference = 2 * Math.PI * 50; // r = 50

  // Calculate the strokeDashoffset based on totalPercentage
  const strokeDashoffset = circumference - (circumference * totalPercentage) / 100;

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData({ ...userData, profileImg: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const navItems = [
    { text: 'Home', href: '/', className: "underline-effect" },
    { text: "Favorite", href: "/favorite-events", className: "underline-effect" },
    { text: "My tickets", href: "/my-tickets", className: "underline-effect" },
    { text: "Username", href: "#", className: "underline-effect" },
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
    { text: 'History', link: '/event-history', className: "" },
    { text: 'Favorite', link: '/favorite-events', className: "" },
    { text: 'Booked events', link: '/booked-events', className: "" },
    { text: 'Settings', link: '/settings', className: "" },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-purple)] text-white font-sans">
      <Navbar navItems={navItems} />
      <div className="flex pt-19">
        <Sidebar SidebarItems={SidebarItems} />
        <main className="flex-grow p-6 space-y-6 w-8/5">
          <section className=" p-6 rounded-lg border border-gray-300 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Personal info</h2>
              <button
                className="border-white border-1 px-2 py-1 rounded inline-flex items-center gap-2"
                onClick={() => setIsEditingPersonalInfo(!isEditingPersonalInfo)}
              >
                <FaEdit /> Edit
              </button>
            </div>
            {isEditingPersonalInfo ? (
              <div className="space-y-4">
                <input
                  type="text"
                  value={userData.fullName}
                  onChange={(e) => setUserData({ ...userData, fullName: e.target.value })}
                  className="bg-[#2c2c3e] p-2 rounded w-full"
                />
                <input
                  type="email"
                  value={userData.email}
                  className="bg-[#2c2c3e] p-2 rounded w-full"
                  readOnly
                />
                <input
                  type="tel"
                  value={userData.phone}
                  onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                  className="bg-[#2c2c3e] p-2 rounded w-full"
                  placeholder="Phone number"
                />
                <input
                  type="text"
                  value={userData.location}
                  onChange={(e) => setUserData({ ...userData, location: e.target.value })}
                  className="bg-[#2c2c3e] p-2 rounded w-full"
                  placeholder="Location"
                />
                <div className="flex justify-end gap-2">
                  <button
                    className="px-4 py-2 rounded bg-gray-500 hover:bg-gray-600"
                    onClick={() => setIsEditingPersonalInfo(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600"
                    onClick={() => setIsEditingPersonalInfo(false)}
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-2 text-gray-300">
                <p><strong>Full name:</strong> {userData.fullName}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Phone:</strong> {userData.phone.slice(0, 4)} {userData.phone.slice(4, 6)} ***</p>
                {userData.location && <p><strong>Location:</strong> {userData.location}</p>}
              </div>
            )}
          </section>
          <section className=" p-6 rounded-lg border border-[#2c2c3e] space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Bio</h2>
              <button
                className="border-white border-1 px-2 py-1 rounded inline-flex items-center gap-2"
                onClick={() => setIsEditingBio(!isEditingBio)}
              >
                <FaEdit /> Edit
              </button>
            </div>
            {isEditingBio ? (
              <div className="space-y-4">
                <textarea
                  value={userData.bio}
                  onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
                  className="bg-[#2c2c3e] p-2 rounded w-full h-32"
                />
                <div className="flex justify-end gap-2">
                  <button
                    className="px-4 py-2 rounded bg-gray-500 hover:bg-gray-600"
                    onClick={() => setIsEditingBio(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600"
                    onClick={() => setIsEditingBio(false)}
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-gray-300 whitespace-pre-line">{userData.bio}</p>
            )}
          </section>
          <section className=" p-6  rounded-lg border border-[#2c2c3e] space-y-4 text-center">
            <h2 className="text-xl font-semibold">Profile Picture</h2>
            <div className="w-[200px] h-[200px] mx-auto bg-gray-700 rounded-full">
              {userData.profileImg && (
                <img
                  src={userData.profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              )}
            </div>
            <label className="bg-blue-500 px-4 py-2 mt-4 rounded hover:bg-blue-600 cursor-pointer">
              Upload new photo
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
            <p className="text-sm text-gray-400 mt-2">
              At least 800 x 800 px recommended. JPG or PNG is allowed.
            </p>
          </section>
        </main>
        <aside className="w-150  p-6 mb-6.5 pl-10 mr-6 mt-5.5 rounded-lg border border-[#2c2c3e] space-y-4">
          <div className="flex flex-col items-center space-y-4">
          <svg width={120} height={120}>
            {/* Background Circle */}
            <circle cx={60} cy={60} r={50} stroke="#333" strokeWidth={10} fill="none" />
            {/* Foreground Circle (Progress) */}
            <circle
              cx={60}
              cy={60}
              r={50}
              stroke="#6b5b95"
              strokeWidth={10}
              fill="none"
              strokeDasharray={314}
              strokeDashoffset= { strokeDashoffset}
              transform="rotate(-90 60 60)"
            />
            {/* Percentage Text */}
            <text x={60} y={65} textAnchor="middle" fill="#fff" fontSize={20}>
               {totalPercentage} %
            </text>
          </svg>
            <h3 className="text-lg font-semibold">Complete your profile</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {completionSteps.map((step, index) => (
                <li key={index} className="flex items-center gap-2">
                  {step.completed ? (
                    <FaCheck className="text-green-400" />
                  ) : (
                    <FaTimes className="text-red-400" />
                  )}
                  <span>
                    {step.label} ({step.percentage}%)
                  </span>
                  
                </li>
              ))}
            </ul>
            <a href="/signup" className="block mt-[50px]">
  <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 cursor-pointer w-full">
    Be an organizer
  </button>
</a>
          </div>
        </aside>
      </div>
    </div>
  );
};
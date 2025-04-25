import React from 'react';
import hackthon from '../assets/hackthon.jpg';

export const event = () => {
  const eventInfo = {
    title: "Sahara Beats Festival",
    date: "July 20-21, 2025",
    location: "Algiers, Algeria",
    category: "Entertainment",
    img: hackthon,
  };

  return (
    <div className="rounded-lg shadow-md hover:shadow-xl transition p-3 flex flex-col cursor-pointer">
      <img
        src={eventInfo.img}
        alt={eventInfo.title}
        className="w-full h-28 object-cover rounded mb-2"
      />
      <div className="font-semibold">{eventInfo.title}</div>
      <div className="text-xs text-gray-500">{eventInfo.date}</div>
      <div className="text-xs text-gray-500">{eventInfo.location}</div>
      <div className="text-xs text-purple-800 mt-1">{eventInfo.category}</div>
    </div>
  );
};

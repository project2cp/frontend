import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export const EventCard = ({ event }) => {
  const { title, date, location, category, organizer, image } = event;

  return (
    <div className="rounded-lg shadow-md bg-[#251425] hover:shadow-xl hover:scale-102 transition p-3 flex flex-col cursor-pointer h-[400px]">
      <img
        src={`/storage/${image}`}
        alt={title}
        className="w-full h-36 object-cover rounded mb-2"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300x150';
        }}
      />
      
      <div className="flex-1 flex flex-col">
        <h3 className="font-semibold text-lg mb-2 text-white">{title}</h3>
        
        <div className="flex items-center gap-2 text-white mb-1">
          <FaCalendarAlt className="text-white" />
          <span className="text-sm">{new Date(date).toLocaleDateString()}</span>
        </div>
        
        <div className="flex items-center gap-2 text-white mb-2">
          <FaMapMarkerAlt className="text-white" />
          <span className="text-sm">{location}</span>
        </div>

        {organizer && (
          <div className="mt-2 text-sm text-white">
            Organized by: {" "}
            <span className="text-white">{organizer}</span>
          </div>
        )}

        <div className="mt-2 text-sm">
          <span className="font-semibold text-white">Category:</span>{" "}
          <span className="text-white">{category}</span>
        </div>
        
        <button className="mt-auto w-full bg-[#B39DDB] text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
          Reserve Now
        </button>
      </div>
    </div>
  );
};
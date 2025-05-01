import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export const EventCard = ({ event, onClick }) => {
  const { title, date, location, category, organizer, img } = event;

  return (
    <div className="rounded-lg shadow-md hover:shadow-xl transition p-3 flex flex-col cursor-pointer h-[400px]">
      <img
        src={img}
        alt={title}
        className="w-full h-36 object-cover rounded mb-2"
      />
      
      <div className="flex-1 flex flex-col">
        <h3 className="font-semibold text-lg mb-2 text-white ">{title}</h3>
        
        <div className="flex items-center gap-2 text-white mb-1">
          <FaCalendarAlt className="text-white" />
          <span className="text-sm">{date}</span>
        </div>
        
        <div className="flex items-center gap-2 text-white mb-2">
          <FaMapMarkerAlt className="text-white" />
          <span className="text-sm">{location}</span>
        </div>

        {organizer && (
          <div className="mt-2 text-sm text-white">
            Organized by: {" "}
            <a href="#" className="text-white hover:underline">
              {organizer}
            </a>
          </div>
        )}

        <div className="mt-2 text-sm">
          <span className="font-semibold text-white">Category:</span>{" "}
          <span className="text-white">{category}</span>
        </div>
        
        <button className="mt-auto w-full bg-purple-900 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
          Reserve Now
        </button>
      </div>
    </div>
  );
};
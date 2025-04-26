import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart, FaComment, FaBookmark, FaSearch, FaChevronDown } from 'react-icons/fa';
import { 
  FaTheaterMasks, 
  FaCampground, 
  FaCode, 
  FaUtensils, 
  FaBriefcase, 
  FaGraduationCap, 
  FaRunning 
} from 'react-icons/fa';

export const EventCard = ({ event, isFavorite = false, onToggleFavorite }) => {
  const { id, title, date, location, organizer, price, image } = event;

  return (
    <div className="rounded-lg overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-32 object-cover" />
        <div className="absolute top-2 right-2 flex gap-2">
          <button 
            onClick={() => onToggleFavorite(id)} 
            className="bg-white/80 p-1.5 rounded-full hover:bg-white"
          >
            {isFavorite ? 
              <FaHeart className="text-red-500 text-lg" /> : 
              <FaRegHeart className="text-gray-600 text-lg" />
            }
          </button>
          <button className="bg-white/80 p-1.5 rounded-full hover:bg-white">
            <FaComment className="text-gray-600 text-lg" />
          </button>
          <button className="bg-white/80 p-1.5 rounded-full hover:bg-white">
            <FaBookmark className="text-gray-600 text-lg" />
          </button>
        </div>
        {price && (
          <div className="absolute top-2 left-2 bg-white py-1 px-2 rounded-md font-bold text-sm">
            {price}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        
        <div className="flex items-center gap-1 text-sm text-gray-600 mt-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{date}</span>
        </div>
        
        <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{location}</span>
        </div>
        
        <div className="flex items-center justify-between mt-3">
          <div className="text-sm text-gray-500">
            Organized by: <span className="text-purple-600">{organizer}</span>
          </div>
          <button className="px-4 py-1.5 bg-purple-100 text-purple-600 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
};
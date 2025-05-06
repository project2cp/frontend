import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Navbar } from './Navbar';
import { EventCard } from './EventCard';
import { Footer } from './Home_section/Footer';
import { FaSearch, FaFilter, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ExplorePage = () => {
  const [sloganIndex, setSloganIndex] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  
  const sloganRef = useRef(null);
  const filterRef = useRef(null);

  const slogans = [
    "Discover Amazing Events Near You!",
    "Live Experiences, Lasting Memories!",
    "Your Next Adventure Awaits!",
    "Never Miss Out Again!"
  ];

  const categories = ['All', 'Music', 'Sports', 'Art', 'Food', 'Technology'];

  // Static events data
  const [events] = useState([
    {
      id: 1,
      title: 'Rock Festival 2024',
      date: 'March 15, 2024',
      location: 'Central Park',
      category: 'Music',
      organizer: 'Live Nation',
      img: 'https://assets.website-files.com/5b3dd54182ecae4d1602962f/609e33e18c5000af6211f094_HR%20Hackathon%20-%20Section%202.jpg',
      price: 79.99
    },
    {
      id: 2,
      title: 'Tech Conference',
      date: 'April 2, 2024',
      location: 'Convention Center',
      category: 'Technology',
      organizer: 'Tech Corp',
      img: 'https://assets.website-files.com/5b3dd54182ecae4d1602962f/609e33e18c5000af6211f094_HR%20Hackathon%20-%20Section%202.jpg',
      price: 299.99
    },
    {
      id: 3,
      title: 'Food & Wine Expo',
      date: 'March 28, 2024',
      location: 'Downtown Expo Hall',
      category: 'Food',
      organizer: 'Culinary Arts Group',
      img: 'https://assets.website-files.com/5b3dd54182ecae4d1602962f/609e33e18c5000af6211f094_HR%20Hackathon%20-%20Section%202.jpg',
      price: 45.00
    },
    {
      id: 4,
      title: 'Modern Art Showcase',
      date: 'April 15, 2024',
      location: 'City Art Museum',
      category: 'Art',
      organizer: 'Art Collective',
      img: 'https://assets.website-files.com/5b3dd54182ecae4d1602962f/609e33e18c5000af6211f094_HR%20Hackathon%20-%20Section%202.jpg',
      price: 25.00
    },
    {
      id: 5,
      title: 'Marathon 2024',
      date: 'April 22, 2024',
      location: 'Main City Streets',
      category: 'Sports',
      organizer: 'Sports United',
      img: 'https://assets.website-files.com/5b3dd54182ecae4d1602962f/609e33e18c5000af6211f094_HR%20Hackathon%20-%20Section%202.jpg',
      price: 120.00
    },
  ]);


  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [events, selectedCategory, searchQuery]);

  // Pagination calculations
  const totalItems = filteredEvents.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedEvents = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredEvents.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredEvents, currentPage, itemsPerPage]);

  // Slogan animation 
  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(sloganRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          setSloganIndex(prev => (prev + 1) % slogans.length);
          gsap.fromTo(sloganRef.current,
            { opacity: 0, y: 20 },
            { 
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "elastic.out(1, 0.5)"
            }
          );
        }
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Card animations
  useEffect(() => {
    gsap.from(".event-card", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      immediateRender: false, // Add this
      scrollTrigger: {
        trigger: ".events-grid",
        start: "top center+=100px", // Adjusted trigger point
        toggleActions: "play none none none" // Add this
      }
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [paginatedEvents]);

  // Pagination controls
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate page numbers
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 mx-1 rounded ${
            currentPage === i
              ? 'bg-[var(--bg-purple)] text-white'
              : 'bg-white text-[var(--bg-purple)] hover:bg-gray-100'
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className='min-h-screen bg-[var(--bg-purple)] text-white font-sans'>
      <Navbar navItems={[
        { text: 'Home', href: '/', className: "underline-effect" },
        { text: "Favorite", href: "/favorite-events", className: "underline-effect" },
        { text: "My tickets", href: "/my-tickets", className: "underline-effect" },
        { text: "Username", href: "#", className: "underline-effect" },
      ]} />

      <div className='pt-16'>
        <div className="w-4/5 mx-auto mt-8 p-12 bg-[#dbcef5] rounded-lg shadow-lg relative">
          <h2 
            ref={sloganRef}
            className="text-3xl font-bold text-[var(--bg-purple)] text-center"
          >
            {slogans[sloganIndex]}
          </h2>
        </div>
      </div>

      <div className="w-4/5 mx-auto mt-8 relative">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search events..." 
              className="w-full pl-10 pr-4 py-3 rounded-full bg-white text-[var(--bg-purple)]"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-6 py-3 bg-white text-[var(--bg-purple)] rounded-full hover:bg-gray-100 transition-colors"
          >
            <FaFilter /> Filter
          </button>
        </div>

        {showFilters && (
          <div ref={filterRef} className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-4 z-10">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setShowFilters(false);
                  setCurrentPage(1);
                }}
                className={`block w-full text-left px-2 py-1 rounded transition-colors ${
                  selectedCategory === category 
                    ? 'bg-[var(--bg-purple)] text-white' 
                    : 'text-[var(--bg-purple)] hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="w-4/5 mx-auto mt-12 events-container">
        <h3 className="text-2xl font-bold mb-6">Featured Events</h3>
        
        {filteredEvents.length === 0 ? (
          <div className="text-center py-12 text-xl">
            No events found matching your criteria
          </div>
        ) : (
          <>
            <div className="events-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedEvents.map(event => (
                <div 
                  key={event.id}
                  className="event-card"
                >
                  <EventCard event={event} />
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center mt-8 pb-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 mx-2 rounded ${
                  currentPage === 1 
                    ? 'bg-gray-300 cursor-not-allowed' 
                    : 'bg-white text-[var(--bg-purple)] hover:bg-gray-100'
                }`}
              >
                <FaArrowLeft />
              </button>
              
              {getPageNumbers()}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 mx-2 rounded ${
                  currentPage === totalPages
                    ? 'bg-gray-300 cursor-not-allowed' 
                    : 'bg-white text-[var(--bg-purple)] hover:bg-gray-100'
                }`}
              >
                <FaArrowRight />
              </button>
            </div>
          </>
        )}
      </div>
      <Footer/>
    </div>
  );
};
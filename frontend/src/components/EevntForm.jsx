import React, { useState } from 'react';
import { FaCheck, FaCalendarAlt, FaTicketAlt, FaMapMarker, FaImage, FaInfoCircle, FaClock, FaAlignLeft } from 'react-icons/fa';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { Navbar } from './Navbar';

const initialEventData = {
  eventName: '',
  eventType: '',
  date: '',
  time: '',
  description: '',
  location: '',
  tickets: [],
  eventImage: null,
  termsAccepted: false,
};

const eventTypes = ['Conference', 'Concert', 'Workshop', 'Exhibition', 'Networking'];
const ticketTypes = ['General Admission', 'VIP', 'Early Bird', 'Student'];

export const EventForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(initialEventData);
  const [errors, setErrors] = useState({});

  const steps = [
    { title: 'Event Basics', icon: <FaInfoCircle /> },
    { title: 'Event Details', icon: <FaMapMarker /> },
    { title: 'Finalize', icon: <FaCheck /> },
  ];

  const validateStep = (step) => {
    const newErrors = {};
    
    if(step === 1) {
      if(!formData.eventName) newErrors.eventName = 'Event name is required';
      if(!formData.eventType) newErrors.eventType = 'Event type is required';
      if(!formData.date) newErrors.date = 'Date is required';
    }
    
    if(step === 2) {
      if(!formData.description) newErrors.description = 'Description is required';
      if(!formData.location) newErrors.location = 'Location is required';
      if(!formData.tickets.length) newErrors.tickets = 'At least one ticket type is required';
      if(!formData.eventImage) newErrors.eventImage = 'Event image is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if(validateStep(currentStep)) setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const handlePrevious = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if(file) setFormData(prev => ({ ...prev, eventImage: URL.createObjectURL(file) }));
  };

  const handleTicketChange = (index, field, value) => {
    const newTickets = [...formData.tickets];
    newTickets[index] = { ...newTickets[index], [field]: value };
    setFormData(prev => ({ ...prev, tickets: newTickets }));
  };

  const addTicketType = () => {
    setFormData(prev => ({
      ...prev,
      tickets: [...prev.tickets, { type: '', price: '', quantity: '' }]
    }));
  };

  const handleSubmit = () => {
    console.log('Event submitted:', formData);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setFormData(initialEventData);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-purple)] font-sans py-8">
      <Navbar navItems={[
        { text: 'Home', href: '/', className: "underline-effect" },
        { text: "Favorite", href: "/favorite-events", className: "underline-effect" },
        { text: "My tickets", href: "/my-tickets", className: "underline-effect" },
        { text: "Username", href: "#", className: "underline-effect" },
      ]} />
      <div className="max-w-3xl mx-auto px-4 relative pt-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Create Your Event</h1>
          <p className="text-white/80">Bring your vision to life with our seamless event setup</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center 
                ${currentStep > index + 1 ? 'bg-green-500' : currentStep === index + 1 ? 'bg-[#c4adf4]' : 'bg-gray-300'}
                transition-colors duration-300`}>
                {currentStep > index + 1 ? <FaCheck className="text-white" /> : 
                 React.cloneElement(step.icon, { className: 'text-white' })}
              </div>
              <span className={`mt-2 text-sm ${currentStep >= index + 1 ? 'text-white' : 'text-gray-400'}`}>
                {step.title}
              </span>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-1 mt-6 ${currentStep > index + 1 ? 'bg-green-500' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div className="relative">
          <div className={`bg-white rounded-xl shadow-lg p-8 transition-opacity ${isSubmitted ? 'opacity-50 pointer-events-none' : ''}`}>
            
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-[#4a2c8a]">
                  <FaInfoCircle className="text-[#c4adf4]" /> Event Basics
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Event Name <span className="text-red-500">*</span></label>
                    <input
                      name="eventName"
                      value={formData.eventName}
                      onChange={handleInputChange}
                      placeholder="Enter event name"
                      className="w-full p-3 border rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-[#c4adf4]"
                    />
                    {errors.eventName && <p className="text-red-500 text-sm mt-1">{errors.eventName}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Event Type <span className="text-red-500">*</span></label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-lg text-gray-700"
                    >
                      <option value="" disabled>Select event type</option>
                      {eventTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.eventType && <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Date <span className="text-red-500">*</span></label>
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-gray-400" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full p-3 border rounded-lg"
                      />
                    </div>
                    {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Time <span className="text-red-500">*</span></label>
                    <div className="flex items-center gap-2">
                      <FaClock className="text-gray-400" />
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full p-3 border rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-[#4a2c8a]">
                  <FaMapMarker className="text-[#c4adf4]" /> Event Details
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Description <span className="text-red-500">*</span></label>
                    <div className="flex items-start gap-2">
                      <FaAlignLeft className="text-gray-400 mt-3" />
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Describe your event in detail..."
                        rows="4"
                        className="w-full p-3 border rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-[#c4adf4] resize-none"
                      />
                    </div>
                    {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Location <span className="text-red-500">*</span></label>
                    <div className="flex items-center gap-2">
                      <FaMapMarker className="text-gray-400" />
                      <input
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Enter event location"
                        className="w-full p-3 border rounded-lg placeholder-gray-400"
                      />
                    </div>
                    {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Event Image <span className="text-red-500">*</span></label>
                    <div className="flex items-center gap-2">
                      <FaImage className="text-gray-400" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full p-3 border rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#c4adf4] file:text-white hover:file:bg-[#a790d8]"
                      />
                    </div>
                    {formData.eventImage && (
                      <img src={formData.eventImage} alt="Event preview" className="mt-4 w-48 h-32 object-cover rounded-lg" />
                    )}
                    {errors.eventImage && <p className="text-red-500 text-sm mt-1">{errors.eventImage}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Ticket Types <span className="text-red-500">*</span></label>
                    {formData.tickets.map((ticket, index) => (
                      <div key={index} className="grid grid-cols-3 gap-4 mb-4">
                        <select
                          value={ticket.type}
                          onChange={(e) => handleTicketChange(index, 'type', e.target.value)}
                          className="p-2 border rounded-lg"
                        >
                          <option value="" disabled>Select ticket type</option>
                          {ticketTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                        <input
                          type="number"
                          placeholder="Price"
                          value={ticket.price}
                          onChange={(e) => handleTicketChange(index, 'price', e.target.value)}
                          className="p-2 border rounded-lg placeholder-gray-400"
                        />
                        <input
                          type="number"
                          placeholder="Quantity"
                          value={ticket.quantity}
                          onChange={(e) => handleTicketChange(index, 'quantity', e.target.value)}
                          className="p-2 border rounded-lg placeholder-gray-400"
                        />
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addTicketType}
                      className="text-[#4a2c8a] text-sm flex items-center gap-1 hover:text-[#6b4ba5]"
                    >
                      <FaTicketAlt /> Add Ticket Type
                    </button>
                    {errors.tickets && <p className="text-red-500 text-sm mt-1">{errors.tickets}</p>}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-[#4a2c8a]">
                  <FaCheck className="text-[#c4adf4]" /> Final Details
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={formData.termsAccepted}
                      onChange={(e) => setFormData(prev => ({ ...prev, termsAccepted: e.target.checked }))}
                      className="w-5 h-5 accent-[#4a2c8a]"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-700">
                      I agree to the terms and conditions and confirm all event details are accurate
                    </label>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg flex items-center gap-2 disabled:opacity-50 hover:bg-gray-300 transition-colors"
              >
                <MdNavigateBefore /> Previous
              </button>
              
              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-[#4a2c8a] text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-[#6b4ba5] transition-colors"
                >
                  Next <MdNavigateNext />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  disabled={!formData.termsAccepted}
                >
                  Publish Event
                </button>
              )}
            </div>
          </div>

          {isSubmitted && (
            <div className="absolute inset-0 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl shadow-2xl p-8 text-center space-y-6 w-full max-w-md animate-fade-in">
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                    <FaCheck className="text-white text-4xl" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Event Live! 🎉</h2>
                <p className="text-gray-600 px-6">
                  Your event has been successfully published and is now visible to the community!
                </p>
                <button
                  className="bg-[#4a2c8a] text-white px-8 py-3 rounded-lg hover:bg-[#6b4ba5] transition-colors w-full"
                  onClick={handleReset}
                >
                  View Event Dashboard
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
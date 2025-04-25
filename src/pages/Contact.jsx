import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-24 sm:pt-16 md:pt-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-6 text-gray-600">We'd love to hear from you. Please fill out the form or use our contact information.</p>
          <div className="space-y-5">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-black bg-opacity-10 flex items-center justify-center mr-4">
                <FaEnvelope className="text-lg text-gray-700" />
              </div>
              <span className="text-sm sm:text-base">kogonmaximemawunygan@gmail.com</span>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-black bg-opacity-10 flex items-center justify-center mr-4">
                <FaPhone className="text-lg text-gray-700" />
              </div>
              <span className="text-sm sm:text-base">+228 70426625</span>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-black bg-opacity-10 flex items-center justify-center mr-4">
                <FaMapMarkerAlt className="text-lg text-gray-700" />
              </div>
              <span className="text-sm sm:text-base">Lomé, TOGO</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-all"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-all resize-y"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-black text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-800 transition-colors duration-300 mt-2 shadow-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
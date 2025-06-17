"use client"

import React, { useState } from "react"
import { Heading, Text } from "@medusajs/ui"
import { Loader2, CheckCircle, MessageSquare, Home, Mail, Phone, MapPin, Search } from 'lucide-react'; // Import additional icons

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formspreeEndpoint = "https://formspree.io/f/xeokobwz"; // Your Formspree endpoint

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setError(null);

    const formData = new FormData(event.currentTarget);

    // Collect checkbox values
    const interestedIn = Array.from(event.currentTarget.elements)
      .filter((input: any) => input.type === 'checkbox' && input.name === 'interested_in' && input.checked)
      .map((input: any) => input.value)
      .join(', ');
    formData.append('interested_in_products', interestedIn); // Append collected checkbox values

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json', // Essential for Formspree to return JSON
        },
      });

      if (response.ok) {
        setIsSuccess(true);
        event.currentTarget.reset(); // Clear the form fields
      } else {
        const data = await response.json();
        setError(data.errors ? data.errors.map((err: any) => err.message).join(', ') : 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] p-4 sm:p-6 lg:p-8  font-inter"
     style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
      
      <div className="max-w-6xl mx-auto rounded-2xl shadow-xl border border-gray-200 bg-white">
        {/* Top Heading Section */}
        <div className="text-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-3 leading-tight">
            Connect & Support
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Have questions about our pets, products, or services? Fill out the form below, and our friendly team will get back to you within 24 hours.
          </p>
        </div>

        {/* Main Content: Form & Support Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8 lg:p-10">
          {/* Left Column: Contact Form */}
          <div className="bg-[#f8f1ea] p-6 sm:p-8 rounded-xl shadow-md border border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
              Contact our Services & Sales Team
            </h2>
            <form onSubmit={handleSubmit} method="POST" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first_name" className="block text-sm font-semibold text-gray-800 mb-2">
                    First name*
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-gray-400 transition-colors duration-200 focus:ring-2 focus:ring-offset-1"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label htmlFor="last_name" className="block text-sm font-semibold text-gray-800 mb-2">
                    Last name*
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-gray-400 transition-colors duration-200 focus:ring-2 focus:ring-offset-1"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="_replyto" // Formspree's special field for reply-to email
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-gray-400 transition-colors duration-200 focus:ring-2 focus:ring-offset-1"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-gray-400 transition-colors duration-200 focus:ring-2 focus:ring-offset-1"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="inquiry_type" className="block text-sm font-semibold text-gray-800 mb-2">
                  Type of Inquiry
                </label>
                <select
                  id="inquiry_type"
                  name="inquiry_type"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors duration-200 focus:ring-2 focus:ring-offset-1"
                >
                  <option value="">Select an option</option>
                  <option value="adoption">Purchase Process</option>
                  <option value="product">Product Information</option>
                  <option value="order_status">Order Status</option>
                  <option value="health_info">Pet Health Information</option>
                  <option value="general">General Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="communication_method" className="block text-sm font-semibold text-gray-800 mb-2">
                  Preferred Communication Method
                </label>
                <select
                  id="communication_method"
                  name="communication_method"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors duration-200 focus:ring-2 focus:ring-offset-1"
                >
                  <option value="">Select an option</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="chat">Chat (if available)</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4} // Reduced rows slightly to fit more fields
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-gray-400 transition-colors duration-200 focus:ring-2 focus:ring-offset-1"
                  placeholder="Leave us a message..."
                ></textarea>
              </div>

              <div className="mt-4">
                <span className="block text-sm font-semibold text-gray-800 mb-3">
                  What kind of pet/service are you interested in?
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-700">
                  <div className="flex items-center">
                    <input type="checkbox" id="dogs" name="interested_in" value="Dogs" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                    <label htmlFor="dogs" className="ml-2 block">Dogs</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="cats" name="interested_in" value="Cats" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                    <label htmlFor="cats" className="ml-2 block">Cats</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="small_animals" name="interested_in" value="Small Animals" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                    <label htmlFor="small_animals" className="ml-2 block">Small Animals</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="supplies" name="interested_in" value="Supplies" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                    <label htmlFor="supplies" className="ml-2 block">Pet Supplies</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="adoption_process" name="interested_in" value="Adoption Process" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                    <label htmlFor="adoption_process" className="ml-2 block">Purchase Process</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="other_interest" name="interested_in" value="Other" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                    <label htmlFor="other_interest" className="ml-2 block">Other</label>
                  </div>
                </div>
              </div>


              {isSuccess && (
                <div className="flex items-center p-3 rounded-md bg-green-50 text-green-700 border border-green-200 shadow-sm transition-opacity duration-300">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <p className="text-sm sm:text-base font-medium">Thank you! Your message has been sent successfully. We'll get back to you shortly.</p>
                </div>
              )}

              {error && (
                <div className="flex items-center p-3 rounded-md bg-red-50 text-red-700 border border-red-200 shadow-sm transition-opacity duration-300">
                  <span className="font-semibold mr-2">Error:</span>
                  <p className="text-sm sm:text-base">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-full shadow-lg text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-[1.01]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Chat/Support Info */}
          <div className="p-6 sm:p-8 lg:p-10 bg-white rounded-xl shadow-md border border-gray-100 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-x-2">
                  <Mail className="h-5 w-5 text-blue-600" /> General Inquiries
                </h3>
                <p className="text-gray-700 text-sm">
                  Email us with any questions or concerns, and we'll get back to you within 24 hours.
                </p>
                <a href="mailto:support@exoticpetHeven.com" className="text-blue-600 hover:underline font-medium text-sm">
                  info@exoticpetheven.com
                </a>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-x-2">
                  <MessageSquare className="h-5 w-5 text-blue-600" /> Chat Support
                </h3>
                <p className="text-gray-700 text-sm">
                  For instant assistance, our chat support team is available during business hours.
                </p>
                <button
                  onClick={() => alert("Chat functionality is not yet implemented in this demo.")} // Replace with actual chat integration
                  className="text-blue-600 hover:underline font-medium text-sm flex items-center gap-x-1"
                >
                  Start live chat <span className="relative flex h-2 w-2 ml-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span> Online
                </button>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-x-2">
                  <Phone className="h-5 w-5 text-blue-600" /> Call Us
                </h3>
                <p className="text-gray-700 text-sm">
                  Speak directly with our team for immediate assistance.
                </p>
                <p className="text-gray-700 font-semibold text-lg">
                  <a href="tel:+13146494713" className="text-blue-600 hover:underline">1-314-649-4713</a>
                </p>
                <p className="text-gray-600 text-xs mt-1">
                  Mon - Fri, 9:00 AM - 5:00 PM (GMT -5)
                </p>
              </div>
            </div>

            {/* Branches/Locations */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-x-2">
                <MapPin className="h-5 w-5 text-blue-600" /> Visit Our Location
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Main Office (USA)</h4>
                  <p className="text-gray-700 text-sm">2441 W 70th Cir</p>
                  <p className="text-gray-700 text-sm">Anchorage, Alaska</p>
                  <a href="https://maps.app.goo.gl/3HuqfhHontGmQ9m5A" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm flex items-center gap-x-1 mt-1">
                    <Search className="h-4 w-4" /> View on map
                  </a>
                  <p className="text-gray-600 text-xs mt-1">Mon - Fri, 9:00 AM - 5:00 PM</p>
                 From our US base, we lovingly prepare and safely ship our exotic companions to homes across united state. 🐾🐾
                </div>
                 <div>
                  <h4 className="font-semibold text-gray-800">USA 2nd Branch</h4>
                  <p className="text-gray-700 text-sm">327 Livingston St</p>
                  <p className="text-gray-700 text-sm"> St, Elizabeth, NJ 07206, USA</p>
                  <a href="https://maps.app.goo.gl/2noqX3JS9ph65rks6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm flex items-center gap-x-1 mt-1">
                    <Search className="h-4 w-4" /> View on map
                  </a>
                  <p className="text-gray-600 text-xs mt-1">Mon - Fri, 9:00 AM - 5:00 PM</p>
                  From our CA base, we lovingly prepare and safely ship our exotic companions to homes across Canada
                </div> 
                {/* You can add more locations here if needed */}
                 <div>
                  <h4 className="font-semibold text-gray-800">CA Branch</h4>
                  <p className="text-gray-700 text-sm">130 Ash St W</p>
                  <p className="text-gray-700 text-sm">Fort St James, British Columbia</p>
                  <a href="https://maps.app.goo.gl/35wGJ95gzNLSAM9W8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm flex items-center gap-x-1 mt-1">
                    <Search className="h-4 w-4" /> View on map
                  </a>
                  <p className="text-gray-600 text-xs mt-1">Mon - Fri, 9:00 AM - 5:00 PM</p>
                  From our CA base, we lovingly prepare and safely ship our exotic companions to homes across Canada
                </div> 
                 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

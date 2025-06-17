"use client"

import React from "react"
import { Heading, Text } from "@medusajs/ui"
import { PawPrint, Heart, Bone, Scissors, CalendarCheck, Home, Package, GraduationCap, Microscope } from 'lucide-react'; // Icons from lucide-react

export default function ServicesPage() {
  return (
    // Outer container needs 'relative' for the absolute background to position correctly within it.
    // Ensure this container has enough height to show the background.
    <div className="min-h-[calc(100vh-64px)] relative font-inter">

      {/* Background Image Layer */}
      {/* This div is absolute, covering the entire parent, and has the background image */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center z-0" // z-0 ensures it's behind content
        style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-30" />
      </div>

      {/* Main Content Container - ensure it has a background color and z-index higher than the background */}
      <div className="max-w-6xl mx-auto rounded-2xl shadow-xl border border-gray-200 bg-white bg-opacity-95 relative z-10 overflow-hidden py-12 sm:py-16 lg:py-20"> {/* Added relative z-10 and bg-opacity */}
        {/* Page Title Section */}
        <div className="text-center mb-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
            Services We Provide
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            At Pet Heven, we offer a comprehensive range of services to support you and your beloved pets throughout their journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Service Card 1: Premium Exotic Pets */}
          <ServiceCard
            icon={Heart}
            title="Premium Exotic Pets"
            description="Our specialized store and helps you find the perfect pet companion that matches your lifestyle, personality, and home environment."
          />

          {/* Service Card 2: Health & Wellness Consultations */}
          <ServiceCard
            icon={Microscope}
            title="Health & Wellness Consultations"
            description="Get expert advice on pet nutrition, preventative care, and general well-being from our experienced animal care professionals and veterinary doctors after purchasing."
          />

          {/* Service Card 4: Training & Behavior Support */}
          <ServiceCard
            icon={GraduationCap}
            title="Training & Behavior Support"
            description="Access resources and guidance for basic obedience, behavioral challenges, and positive reinforcement techniques for happy pets."
          />

          {/* Service Card 5: Premium Pet Supplies */}
          <ServiceCard
            icon={Bone}
            title="Care Package"
            description="We send each new family member home with a care package of nutritious food, because the journey to your heart should begin with full bellies and wagging tails."
          />

          {/* Service Card 6: Safe & Humane Delivery */}
          <ServiceCard
            icon={Package}
            title="Safe & Humane Delivery"
            description="We ensure your new pet arrives safely and comfortably at your home, with specialized transportation services designed for animal welfare. Every first delivery fee is on us"
          />

        </div>
      </div>
    </div>
  )
}

// Helper component for individual Service Cards
const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-[#f8f1ea] p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
    <div className="flex items-center justify-center p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
      <Icon className="h-8 w-8" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-700 text-sm">{description}</p>
  </div>
);

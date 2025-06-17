"use client"

import React from "react"
import { Heading, Text } from "@medusajs/ui"
import { PawPrint, Heart, Handshake, Users, Award, MessageCircle, Star, Search, CheckCircle } from 'lucide-react'; // Icons from lucide-react

export default function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] p-4 sm:p-6 lg:p-8 bg-white font-inter">
      <div className="max-w-6xl mx-auto rounded-2xl shadow-xl border border-gray-200 bg-white overflow-hidden">
        {/* Hero Section */}
        <div className="text-center py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
            We are Stewards of Happy Beginnings
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            At Pet Heven, we believe every pet deserves a loving home. We're dedicated to ethical breeding, quality products, and lifelong support for pets and their families.
          </p>
          {/* Video Placeholder */}
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-300">
            <img
              src="/images/about/about1.jpg" // Sourced from public folder
              alt="Happy pets playing"
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.src = `https://placehold.co/1200x675/ADD8E6/000000?text=Pet+Heven+Story` }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              {/* Optional: Add a play button icon here if it were a video */}
            </div>
          </div>
        </div>

        {/* Why Choose Pet Heven Section */}
        <div className="py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8 text-center bg-gray-50">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10">
            Why Choose Pet Heven?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1: Healthy & Happy Pets */}
            <div className="bg-[#f8f1ea] p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center">
              <PawPrint className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Healthy & Happy Pets</h3>
              <p className="text-gray-700 text-sm">
                We partner with reputable breeders and veterinary doctors, ensuring every pet receives thorough health checks, vaccinations, and loving care before finding their forever home. 🐾🐾
              </p>
            </div>
            {/* Card 2: Expert Guidance */}
            <div className="bg-[#f8f1ea] p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Guidance & Support</h3>
              <p className="text-gray-700 text-sm">
                Our team of pet specialists is here to provide personalized advice on nutrition, training, health, and adjustment, guiding you every step of the way.🐾🐾
              </p>
            </div>
            {/* Card 3: Community & Lifelong Bond */}
            <div className="bg-[#f8f1ea] p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center">
              <Heart className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Building Lifelong Bonds</h3>
              <p className="text-gray-700 text-sm">
                We foster a community of pet lovers and offer resources for ongoing education, ensuring a fulfilling and healthy relationship between you and your new family member.🐾🐾
              </p>
            </div>
          </div>
        </div>

        {/* Our Impact / Stats Section */}
        <div className="py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white">
          {/* Left: Image with text overlay */}
          <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <img
              src="/images/about/happy-owner-pet.jpg" // Sourced from public folder
              alt="Happy owner interacting with pet"
              className="w-full h-auto object-cover"
              onError={(e) => { e.currentTarget.src = `https://placehold.co/800x600/D4EEF9/000000?text=Happy+Owner+and+Pet` }}
            />
            <div className="absolute inset-0 bg-blue-600 bg-opacity-30 flex items-end p-6">
              <p className="text-white text-xl sm:text-2xl font-bold leading-tight drop-shadow-md">
                Every paw print leaves an imprint on our hearts.�🐾
              </p>
            </div>
          </div>
          {/* Right: Stats */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Our Commitment in Numbers
            </h2>
            <p className="text-gray-700 text-base mb-6">
              Since our inception, Pet Heven has been dedicated to making a positive impact on the lives of animals and their human companions.
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-6">
              <StatItem value="1.8K+" label="Happy new pet owners" icon={Heart} />
              <StatItem value="99+" label="Breeds Available" icon={PawPrint} />
              <StatItem value="1.2K" label="Success Stories" icon={Star} />
              <StatItem value="4+" label="Years of Experience" icon={Award} />
            </div>
          </div>
        </div>

        {/* Meet the Team Section */}
        <div className="py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8 bg-gray-50">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-10">
            Meet Our Dedicated Team
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-md border-2 border-gray-200">
                <img
                  src="/images/about/about.jpg" // Using the uploaded image for Aisha Khan
                  alt="Dolores Becerra"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = `https://placehold.co/300/CCCCCC/000000?Text=Aisha+Khan` }}
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">Dolores Becerra</h3>
              <p className="text-sm text-gray-600">Founder</p>
            </div>
            {/* Team Member 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-md border-2 border-gray-200">
                <img
                  src="/images/about/about2.jpg" // Assumed path in public folder
                  alt="Theodore Owens"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = `https://placehold.co/300/EEEEEE/000000?Text=` }}
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">Theodore Owens</h3>
              <p className="text-sm text-gray-600">Breeding Specialist</p>
            </div>
            {/* Team Member 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-md border-2 border-gray-200">
                <img
                  src="/images/about/about3.jpg" // Assumed path in public folder
                  alt="Emma Rodriguez"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = `https://placehold.co/300/AAAAAA/FFFFFF?Text=Fatima+Bello` }}
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">Emma Rodriguez</h3>
              <p className="text-sm text-gray-600">Customer Support Lead</p>
            </div>
            {/* Team Member 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-md border-2 border-gray-200">
                <img
                  src="/images/about/abaout4.jpg" // Assumed path in public folder
                  alt="Dr. Robyn Geers"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = `https://placehold.co/300/DDDDDD/000000?Text=Adekunle+Adebayo` }}
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">Dr. Robyn Geers</h3>
              <p className="text-sm text-gray-600">Veterinary Consultant</p>
            </div>
          </div>
        </div>

        {/* How Our Adoption Process Works Section */}
        <div className="py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8 bg-gray-50 rounded-b-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-10">
            🐕How  Pet Heven Works🐕
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <ProcessStep number="1" title="Browse Our Loving Pets" description="Explore our diverse selection of pets, our hand-raised pets are waiting to bring joy into your home. Start your adventure today🐾" />
            <ProcessStep number="2" title="Select Your Pet of Choice" description="Unlock a world of unique companionship, extraordinary pets with their own charm and personality, perfect for extraordinary people like you. Your perfect match is waiting!🐾" />
            <ProcessStep number="3" title="Purchase your desired pet " description="Your dream pet is just a click away. Hand-selected, healthy, and ready to join your home. Make it yours today🐾" />
            <ProcessStep number="4" title="Prepare for Their Arrival" description="We’ve handled the essentials like their health checks, vaccines, and grooming so your pet arrives happy and thriving. Now, let’s get you ready for their big homecoming and joyful transition 🐾" />
            <ProcessStep number="5" title="Welcome Your New Companion Home" description="The moment you've been waiting for is here! Your new companion comes with a complete pet packet, health records, care guides, and travel preparations all set. Now, let's make their homecoming as warm and worry-free as possible. That's everything you need to welcome them with love and  confidence 🐾" />
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8 bg-blue-600 text-white text-center rounded-b-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
            Ready to Welcome a New Family Member?
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
            Start your journey to finding your perfect companion today. We're here to help you every step of the way.
          </p>
          <button
            onClick={() => window.location.href = '/store'} // Redirect to products page
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg
            transform hover:scale-105 transition-all duration-300 ease-in-out text-lg flex items-center justify-center mx-auto gap-x-2"
          >
            Browse Pets Now <PawPrint className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

// Helper component for statistics
const StatItem = ({ value, label, icon: Icon }) => (
  <div className="flex items-center gap-x-3 bg-[#f8f1ea] p-4 rounded-lg shadow-sm border border-gray-100">
    <Icon className="h-8 w-8 text-blue-600 flex-shrink-0" />
    <div>
      <p className="text-2xl sm:text-3xl font-bold text-gray-800">{value}</p>
      <p className="text-sm text-gray-700">{label}</p>
    </div>
  </div>
);

// Helper component for process steps
const ProcessStep = ({ number, title, description }) => (
  <div className="flex items-start gap-x-4">
    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-700 font-bold text-lg shadow-inner">
      {number}
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  </div>
);

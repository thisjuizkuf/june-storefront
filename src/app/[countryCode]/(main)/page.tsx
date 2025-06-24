"use client"; // REQUIRED for client-side hooks like useState, useEffect

import React, { Fragment, Suspense, useState, useEffect, useMemo, useRef } from 'react';
// Dialog and Transition imports are now removed as the modal is being removed.


// IMPORTANT: These are MOCK/PLACEHOLDER implementations for components and utilities.
// In your actual Medusa Next.js storefront, you should REPLACE these with your project's
// REAL imports from your existing @medusajs/ui, @lib/hooks, @modules/common/icons,
// and data fetching modules.
// For example, if you have these in your project, REMOVE the mocks below and use these imports:
// import { clx } from "@medusajs/ui";
// import type { HttpTypes } from "@medusajs/types"; // Assuming this path
// import { getProductPrice } from "@lib/util/get-product-price"; // Your actual utility path
// import { listProducts } from "@lib/data/products"; // Your actual API call for products
// import X from "@modules/common/icons/x"; // Your actual X icon component
// import { Dialog, Transition } from '@headlessui/react'; // Your actual Headless UI imports

// --- Mocks/Placeholders for self-contained Canvas demo (REMOVE these if you have real imports) ---
const clx = (...args: any[]) => {
  return args.filter(Boolean).map(arg => {
    if (typeof arg === 'string') return arg;
    if (typeof arg === 'object') {
      return Object.entries(arg).filter(([, value]) => value).map(([key]) => key).join(' ');
    }
    return '';
  }).join(' ');
};

// Kept HttpTypes for consistency, though ProductsSection is removed.
type HttpTypes = {
  StoreProduct: {
    id: string;
    title: string;
    description: string | null;
    thumbnail?: string | null;
    variants?: HttpTypes['StoreProductVariant'][];
    options?: { id: string; title: string; values: { value: string }[] }[];
  };
  StoreProductVariant: {
    id: string;
    inventory_quantity: number;
    prices?: { amount: number }[];
    options?: { option_id: string; value: string }[];
  };
};


// General X icon (kept for potential other uses)
const X = (props: React.SVGProps<SVGSVGElement>) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>);

// --- NEW: SVG Icons for the Feature Section ---

const HeartCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M19.5 12.57L12 20.35L4.5 12.57C3.12 11.08 2 9.07 2 6.5C2 3.16 4.66 1 8 1C9.65 1 11.23 1.94 12 3.23C12.77 1.94 14.35 1 16 1C19.34 1 22 3.16 22 6.5C22 9.07 20.88 11.08 19.5 12.57Z" />
        <path d="M12 20v-8" /> {/* Simple V shape for check, adjust if you have a real checkmark icon */}
    </svg>
);

const FamilyIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8c-1.11 0-2 .9-2 2s.89 2 2 2s2-.9 2-2s-.89-2-2-2zM8 8c-1.11 0-2 .9-2 2s.89 2 2 2s2-.9 2-2s-.89-2-2-2zM12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
);

const SupportIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm-1-10v4h2v-4h-2zm0-4h2v2h-2z" />
    </svg>
);

const SecurePaymentsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M2 10h20"></path>
        <circle cx="9" cy="15" r="2"></circle>
        <path d="M16 15h2"></path>
        <path d="M17 12V8a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v4"></path>
        <rect x="7" y="8" width="10" height="8" rx="1" ry="1"></rect>
        <path d="M12 11V8"></path>
    </svg>
);

// New icon for Refund Policy
const RefreshCcwIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 12a9 9 0 1 1-9-9c2.6 0 4.9 1 6.7 2.8l-1.6 1.6" />
        <path d="M22 6L16 6 16 12" />
    </svg>
);


// --- Hero Section Component ---
const Hero = () => (
    <div className="relative h-[50vh] md:h-[calc(100vh-64px)] w-full bg-cover bg-center flex items-center justify-center text-white"
         style={{
            backgroundImage: `url('/images/hero-bg.jpg')`
         }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center p-4">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg">
                Your Exotic Pet Journey Starts Here
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
                Discover rare and magnificent creatures from around the globe, hand-picked for quality and care.
            </p>
            {/* Link to collections section, since products section is removed */}
            <a href="#collections" className="mt-8 inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                Explore Our Collections
            </a>
        </div>
    </div>
);

// --- Featured Collections Section Component ---
const FeaturedCollectionsSection = () => (
    <section id="collections" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Explore Our Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Mock Collection Cards - using paths from public/images/categories/ */}
                {[
                    {
                        name: "Cat",
                        image: "/images/categories/cat.jpg",
                        fallbackImage: "https://placehold.co/400x250/d1d5db/374151?text=Cat",
                        link: "/categories/cat"
                    },
                    {
                        name: "Dog",
                        image: "/images/categories/dog.jpg",
                        fallbackImage: "https://placehold.co/400x250/a78bfa/e9d5ff?text=Dog",
                        link: "/categories/dog"
                    },
                    {
                        name: "Lizards",
                        image: "/images/categories/lizard.jpg",
                        fallbackImage: "https://placehold.co/400x250/d1d5db/374151?text=Lizards",
                        link: "/categories/lizard"
                    },
                    {
                        name: "Birds",
                        image: "/images/categories/bird.jpg",
                        fallbackImage: "https://placehold.co/400x250/a78bfa/e9d5ff?text=Birds",
                        link: "/categories/bird"
                    },
                    {
                        name: "Fish",
                        image: "/images/categories/fish.jpg",
                        fallbackImage: "https://placehold.co/400x250/fca5a5/7f1d1d?text=Fish",
                        link: "/categories/fish"
                    },
                    {
                        name: "Turtles&Tortoises",
                        image: "/images/categories/amphibians.jpg",
                        fallbackImage: "https://placehold.co/400x250/bfdbfe/1e3a8a?text=Turtles",
                        link: "/categories/turtle"
                    },
                    {
                        name: "Gecko",
                        image: "/images/categories/gecko.jpg",
                        fallbackImage: "https://placehold.co/400x250/bfdbfe/1e3a8a?text=Gecko",
                        link: "/categories/geckos"
                    },
                    {
                        name: "Snakes",
                        image: "/images/categories/snake.jpg",
                        fallbackImage: "https://placehold.co/400x250/bfdbfe/1e3a8a?text=Snakes",
                        link: "/categories/snakes"
                    },
                ].map((collection, index) => (
                    <a key={index} href={collection.link}
                       className="group block bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden text-center transform hover:scale-105">
                        <img
                            src={collection.image}
                            alt={collection.name}
                            className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = collection.fallbackImage;
                            }}
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">{collection.name}</h3>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </section>
);

// --- About Us Section Component ---
const AboutUsSection = () => (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Passion for Exotic Pets</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Pet Heven, we believe in connecting passionate pet lovers with extraordinary creatures.
                Our commitment extends beyond just sales; we ensure every animal is ethically sourced,
                comes with a detailed health guarantee, and is ready to thrive in its new home.
                Experience the difference of dedicated care and expert guidance.
            </p>
            {/* In your real project, you would use your Link or LocalizedClientLink component here */}
            <a href="/about" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                Learn More About Us
            </a>
        </div>
    </section>
);

// --- ENHANCED: Feature Section Component (added immediately before footer) ---
const FeatureSection = () => (
    <section className="bg-gradient-to-br from-gray-50 to-gray-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Pet Heven?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Feature Card 1 */}
                <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl border border-blue-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="flex items-center justify-center p-4 bg-blue-100 rounded-full mb-4 shadow-inner">
                        <HeartCheckIcon className="w-10 h-10 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Live On Arrival Guarantee</h3>
                    <p className="text-gray-600 text-center text-sm leading-relaxed">
                        We guarantee the safe and healthy arrival of every pet. Your peace of mind is our priority.
                    </p>
                </div>

                {/* Feature Card 2 */}
                <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl border border-blue-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="flex items-center justify-center p-4 bg-blue-100 rounded-full mb-4 shadow-inner">
                        <FamilyIcon className="w-10 h-10 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Family Owned and Operated</h3>
                    <p className="text-gray-600 text-center text-sm leading-relaxed">
                        As a family business, we treat every customer and pet with personal care and dedication.
                    </p>
                </div>

                {/* Feature Card 3 */}
                <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl border border-blue-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="flex items-center justify-center p-4 bg-blue-100 rounded-full mb-4 shadow-inner">
                        <SupportIcon className="w-10 h-10 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Top-Notch Support</h3>
                    <p className="text-gray-600 text-center text-sm leading-relaxed">
                        Our expert team is always ready to provide comprehensive guidance and assistance for your pet's needs.
                    </p>
                </div>

                {/* Feature Card 4 */}
                <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl border border-blue-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="flex items-center justify-center p-4 bg-blue-100 rounded-full mb-4 shadow-inner">
                        <SecurePaymentsIcon className="w-10 h-10 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Secure Payments</h3>
                    <p className="text-gray-600 text-center text-sm leading-relaxed">
                        Shop with confidence knowing all your transactions are protected with the latest security protocols.
                    </p>
                </div>
                {/* Feature Card 5 (Refund Policy) */}
                <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl border border-blue-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="flex items-center justify-center p-4 bg-blue-100 rounded-full mb-4 shadow-inner">
                        <RefreshCcwIcon className="w-10 h-10 text-blue-600" /> {/* Updated Icon */}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Hassle-Free Returns</h3> {/* Updated Heading */}
                    <p className="text-gray-600 text-center text-sm leading-relaxed">
                        Our straightforward return policy ensures a smooth process if you're not completely satisfied with your purchase. {/* Updated Description */}
                    </p>
                </div>
            </div>
        </div>
    </section>
);


// Main homepage component - this is what is exported from src/app/[countryCode]/(main)/page.tsx
// This component aggregates all the sections that form your homepage.
export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCollectionsSection />
      <AboutUsSection />
      {/* ***** NEW: FeatureSection added here, immediately before the (conceptual) footer ***** */}
      <FeatureSection />
    </>
  );
}

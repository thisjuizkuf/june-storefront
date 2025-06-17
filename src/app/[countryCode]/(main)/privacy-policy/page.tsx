"use client"; // This directive is necessary for client-side functionality if you add interactive elements later

import React from "react";

export default function PrivacyPolicyPage() {
  // Define placeholders for your company's actual details
  const companyEmail = "info@exoticpetheven.com"; // Replace with your actual email
  const companyPhone = "+1 (314) 649 4713"; // Replace with your actual phone number
  const companyAddress = "2441 W 70th Cir"; // Replace with your actual street address
  const companyCityStateZip = "Anchorage, Alaska"; // Replace with your actual city, state/province, and ZIP/postal code
  const companyCountry = "USA"; // Replace with your actual country
  const dsarFormUrl = "/data-request"; // Replace with the actual URL to your Data Subject Access Request form

  return (
    <div className="min-h-[calc(100vh-64px)] p-4 sm:p-6 lg:p-8 bg-white font-inter">
      <div className="max-w-4xl mx-auto rounded-2xl shadow-xl border border-gray-200 bg-white overflow-hidden p-6 sm:p-8 lg:p-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6 text-center leading-tight">
          Pet Heven Privacy Notice
        </h1>
        <p className="text-sm text-gray-600 text-center mb-10">
          Last updated: June 13, 2025
        </p>

        <section className="mb-10">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
            This Privacy Notice for Pet heven  explains how and why we
            collect, store, use, and share your information when you use our services ,
            such as visiting our website, using our applications, or engaging with us through sales,
            marketing, or events.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            If you have any questions or concerns, please contact us at{" "}
            <a href={`mailto:${companyEmail}`} className="text-blue-600 hover:underline">
              {companyEmail}
            </a>.
          </p>
        </section>

        <hr className="my-8 border-gray-200" />

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            SUMMARY OF KEY POINTS
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We collect personal information you provide directly to us (like your name and contact details
            ) and information automatically collected when you use our Services. We may also gather limited data from public
            databases and marketing partners.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We process your information to:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 pl-4">
            <li>Provide, improve, and administer our Services.</li>
            <li>Facilitate account creation, authentication, and order fulfillment.</li>
            <li>Respond to inquiries and offer support.</li>
            <li>Send administrative, marketing, and promotional communications (you can opt out).</li>
            <li>Protect our Services from fraud and ensure security.</li>
            <li>Understand usage trends and effectiveness of campaigns.</li>
          </ul>
          
          <p className="text-gray-700 leading-relaxed">
            We use organizational and technical measures to protect your personal information. 
            Our transmission or storage is entirely secured. We strive to protect your data effectively.
          </p>
        </section>

        <hr className="my-8 border-gray-200" />

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            WHAT INFORMATION DO WE COLLECT?
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Information You Disclose to Us:</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We collect personal information you voluntarily provide, such as when you register for our
            Services, express interest in our products, or contact us. This includes:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 pl-4">
            <li>Personal contact information (name, address, email, phone number) for logging in and shipping.</li>
            
            
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Information Automatically Collected:</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We automatically collect certain information when you visit or use our Services. This generally
            does not reveal your specific identity but may include:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 pl-4">
            <li>
              Log and Usage Data: IP address, device information, browser type, usage details,
              pages viewed, and error reports.
            </li>
           
            <li>
              Location Data: General location data, which can be opted out of via device settings.
            </li>
            <li>
              Cookies and Tracking Technologies: We use cookies and similar technologies to gather
              information about security, preferences, analytics, and advertising.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Information Collected from Other Sources:</h3>
          <p className="text-gray-700 leading-relaxed">
            We may receive limited data from public databases, marketing partners, and social media
            platforms to enhance our marketing efforts and records.
          </p>
        </section>

        <hr className="my-8 border-gray-200" />

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            HOW DO WE PROCESS YOUR INFORMATION?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We process your personal information for various reasons, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 pl-4">
            <li>Managing user accounts.</li>
            <li>Delivering services and fulfilling orders.</li>
            <li>Providing customer support.</li>
            <li>Sending important administrative information.</li>
            <li>Personalizing content and advertising.</li>
            <li>Protecting our Services from abuse.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            We only process your personal information when we have a valid legal reason to do so, such
            as with your consent, to fulfill contractual obligations, comply with laws, or pursue our
            legitimate business interests.
          </p>
        </section>

        <hr className="my-8 border-gray-200" />

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may share your data with:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 pl-4">
            <li>
            Consultants, and Third-Party Service Providers:These include payment
              processors (like Stripe), cloud computing services, data analytics providers, and marketing
              partners who perform services on our behalf.
            </li>
            
            <li>
              Legal Obligations: When required by law, court order, or government requests.
            </li>
           
          </ul>
        </section>

        <hr className="my-8 border-gray-200" />

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            HOW DO WE KEEP YOUR INFORMATION SAFE?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We implement reasonable technical and organizational security measures to protect your personal
            information. Our electronic transmission or storage is 100% secure. While we strive for
            protection.
          </p>
        </section>

        <hr className="my-8 border-gray-200" />

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            DO WE COLLECT INFORMATION FROM MINORS?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We do not knowingly collect data from or market to children under 18 years of age. If we
            learn that such data has been collected, we will promptly delete it.
          </p>
        </section>

        <hr className="my-8 border-gray-200" />

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            WHAT ARE YOUR PRIVACY RIGHTS?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Depending on your country or state of residence (e.g., US states, EEA, UK, Switzerland, Canada),
            you may have rights allowing you greater access to and control over your personal information.
            These may include the right to:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 pl-4">
            <li>Request access to your personal information.</li>
            <li>Correct inaccuracies.</li>
            <li>Delete your personal information.</li>
            <li>Object to or restrict the processing of your data.</li>
            <li>Request data portability.</li>
            <li>Withdraw your consent at any time.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            To exercise these rights, please contact us at{" "}
            <a href={`mailto:${companyEmail}`} className="text-blue-600 hover:underline">
              {companyEmail}
            </a>.
          </p>
        </section>

        <hr className="my-8 border-gray-200" />

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have questions or comments about this privacy notice, you may contact our Data
            Protection Officer (DPO) by:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 pl-4">
            <li>
              Email:{" "}
              <a href={`mailto:${companyEmail}`} className="text-blue-600 hover:underline">
                {companyEmail}
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href={`tel:${companyPhone.replace(/\s/g, '')}`} className="text-blue-600 hover:underline">
                {companyPhone}
              </a>
            </li>
            <li>
              Post: 
              <address className="not-italic inline-block ml-2">
                Pet heven
                <br />
                {companyAddress}
                <br />
                {companyCityStateZip}
                <br />
                {companyCountry}
              </address>
            </li>
          </ul>
        </section>

        <hr className="my-8 border-gray-200" />

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Based on applicable laws, you may request to review, update, or delete your personal
            information. To do so, please email <a href={`:${companyEmail}`} className="text-blue-600 hover:underline"></a>
            or contact us using the contact page.
          </p>
        </section>
      </div>
    </div>
  );
}

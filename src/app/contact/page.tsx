"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from Next.js
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter(); // Initialize the useRouter hook for navigation

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject && formData.message) {
      alert('Form submitted successfully!');
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Redirect to home page after form submission
      setTimeout(() => {
        router.push('/'); // Navigate to the home page using useRouter
      }, 1000); // Delay to show the alert before redirecting
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-32 py-12 mt-6">
        <div className="grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
          <div>
            <h1 className="text-[#2A254B] text-3xl font-extrabold">Contact Us</h1>
            <p className="text-sm text-gray-500 mt-4">
              Have some big idea or brand to develop and need help? Then reach out we would love to hear about your project and provide help.
            </p>
            {/* Contact email and socials here */}
          </div>

          <div>
            <h2 className="text-[#2A254B] text-3xl font-extrabold">Send a Message</h2>
            <form onSubmit={handleSubmit} className="mt-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md"
                />
              </div>

              <button
                type="submit"
                className="mt-6 px-6 py-2 bg-[#2A254B] text-white font-semibold rounded-md hover:bg-[#1a1a2a]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
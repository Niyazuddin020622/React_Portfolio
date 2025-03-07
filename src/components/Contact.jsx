import React, { useState } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import contact from "../assets/Contact.json";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [statusColor, setStatusColor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_BASE_URL}/api/contact`, { name, email, message });
      setStatus(response.data.message);
      setStatusColor("text-green-500");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus(error.response?.data?.message || "❌ Failed to send message. Please try again.");
      setStatusColor("text-red-500");
    }
  };

  return (
    <section className="relative py-16 px-5 md:px-0 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-red-500">Get in Touch</h2>
          <p className="mb-6 text-white/85">Open for collaboration and opportunities!</p>
          <div className="flex justify-center md:justify-start space-x-4">
            {[facebook, instagram, linkedin].map((icon, index) => (
              <a key={index} href="#" className="hover:scale-110 transition duration-300">
                <img src={icon} alt="Social Icon" className="h-8 w-8" />
              </a>
            ))}
          </div>
          <Lottie animationData={contact} className="w-[350px] mx-auto lg:w-[500px]" />
        </div>

        <form 
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 bg-gray-100 text-gray-900 rounded-xl border border-red-400 shadow-lg p-8"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 p-3 block w-full rounded-lg border focus:ring-2 focus:ring-red-500 shadow-sm"
              placeholder="Your Full Name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-3 block w-full rounded-lg border focus:ring-2 focus:ring-red-500 shadow-sm"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-1 p-3 block w-full rounded-lg border focus:ring-2 focus:ring-red-500 shadow-sm h-32 resize-none"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg shadow-md text-lg font-semibold transition duration-300">
            Send Message
          </button>

          {status && <p className={`mt-4 text-center ${statusColor}`}>{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;

// src/pages/Home.jsx
import React from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
    const categories = ["All", "Builders", "Plumber", "Company", "Party tome"];
const providers = [
"vite-project\src\images\Rectangle 304.png",
"vite-project\src\images\Rectangle 305.png",
"vite-project\src\images\Rectangle 308.png",
"/vite-project\src\images\Rectangle 338.png",
];
return (
  <div className="w-full min-h-screen bg-gray-50">
    {/* Navbar */}
    <Navbar />
    <div>
      <section className="relative">
        <button className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 ring-1 ring-white/30">
          ▶
        </button>
      </section>

      {/* Right: Search card */}
      <div className="lg:w-1/2">
        <div className="bg-white rounded-2xl p-4 shadow-lg -mt-10 lg:mt-0">
          {/* Search inputs */}
          <div className="flex flex-col md:flex-row gap-3">
            <input
              aria-label="Search"
              className="flex-1 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Search"
            />

            <select className="w-40 border border-gray-200 rounded-lg px-3 py-3 focus:outline-none">
              <option>Builders</option>
              <option>Plumbers</option>
              <option>Electricians</option>
            </select>

            <input
              aria-label="Location"
              className="w-40 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none"
              placeholder="Location"
            />

            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
              Search
            </button>
          </div>

          {/* Category pills */}
          <div className="mt-4 flex flex-wrap gap-3">
            {categories.map((c) => (
              <button
                key={c}
                className={`px-4 py-2 rounded-full border ${
                  c === "All" ? "bg-blue-50 border-blue-400 text-blue-600" : "bg-white"
                } shadow-sm`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Providers label */}
      <div className="mt-6">
        <span className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">Featured Providers</span>
        <h3 className="mt-3 text-lg font-semibold">Where <span className="text-blue-600">Our Links</span></h3>

        {/* provider cards */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {providers.map((src, i) => (
            <div key={i} className="p-3 bg-white rounded-lg shadow-md flex items-center justify-center">
              {/* If your real logos exist, replace with their paths. */}
              <img src={src} alt={`provider-${i}`} className="max-h-16 object-contain" onError={(e)=>{e.currentTarget.style.opacity='0.3'}} />
            </div>
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">We’re Trusted By</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 shadow rounded">Company 1</div>
          <div className="bg-white p-6 shadow rounded">Company 2</div>
          <div className="bg-white p-6 shadow rounded">Company 3</div>
          <div className="bg-white p-6 shadow rounded">Company 4</div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-700">
            We connect customers with trusted professionals across Zimbabwe. 
            Whether it’s electricians, plumbers, or contractors, 
            we make finding experts easy and reliable.
          </p>
        </div>
      </section>

      {/* Professionals */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Top-Rated Professionals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white shadow rounded p-6 text-center">
            <img src="/profile1.jpg" alt="Pro" className="w-20 h-20 mx-auto rounded-full mb-4" />
            <h3 className="font-bold">John Doe</h3>
            <p className="text-gray-600">Electrician</p>
          </div>
          <div className="bg-white shadow rounded p-6 text-center">
            <img src="/profile2.jpg" alt="Pro" className="w-20 h-20 mx-auto rounded-full mb-4" />
            <h3 className="font-bold">Sarah Lee</h3>
            <p className="text-gray-600">Plumber</p>
          </div>
          <div className="bg-white shadow rounded p-6 text-center">
            <img src="/profile3.jpg" alt="Pro" className="w-20 h-20 mx-auto rounded-full mb-4" />
            <h3 className="font-bold">Michael Chen</h3>
            <p className="text-gray-600">Technician</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-white shadow p-6 rounded">
            <p>“Excellent service! I found an electrician within 10 minutes.”</p>
            <h4 className="mt-4 font-bold">– Happy Customer</h4>
          </div>
          <div className="bg-white shadow p-6 rounded">
            <p>“Great platform for finding trusted professionals.”</p>
            <h4 className="mt-4 font-bold">– Another Client</h4>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6">
        <p>© 2025 BuildLink. All Rights Reserved.</p>
      </footer>
    </div>
  </div>
);
};

export default Home;


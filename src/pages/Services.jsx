// src/pages/ServicePage.jsx
import React, { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


export default function ServicePage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Builders");
  const [location, setLocation] = useState("All");

  const categories = [
    "All",
    "Builders",
    "Plumber",
    "Electrician",
    "Company",
    "Party time",
    "Job",
  ];

  const providers = new Array(12).fill(0).map((_, i) => ({
    id: i + 1,
    name: ["Grace Ncube", "Allan Shosse", "Tawana Makaza", "Tanaka Bope"][i % 4],
    title: i % 3 === 0 ? "Builder & Electrician" : "Certified Electrician",
    location: ["Borrowdale, Harare", "Avondale, Harare", "Southerton, Harare"][i % 3],
    avatar: `https://i.pravatar.cc/140?img=${i + 10}`,
    short:
      "Specializes in residential and commercial construction, including roofing, tiling, and renovations.",
  }));

  const projects = new Array(3).fill(0).map((_, i) => ({
    id: i + 1,
    title: "Modern Cottage Build - Borrowdale, Harare",
    provider: "Samuel Moyo & Team",
    image: `https://picsum.photos/seed/project${i}/800/520`,
    rating: 5,
  }));

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col bg-white text-slate-900">
     
        <section className="relative pt-8">
          <div
            className="mx-6 md:mx-12 lg:mx-20 h-[420px] rounded-b-3xl bg-cover bg-center shadow-lg overflow-hidden"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(2,6,23,0.35), rgba(2,6,23,0.15)), url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=60')",
            }}
          >
          <div className="h-full max-w-7xl mx-auto px-6 md:px-12 flex items-center">
            <div className="w-full md:w-2/3 text-white py-6">
              <p className="text-sm text-cyan-200">Welcome to Buildlinks</p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-3">
                Featured <span className="text-cyan-400">Provider</span>
              </h1>
              <p className="mt-3 text-sm text-white/80 max-w-xl">
                Let find what we are looking for at Buildlinks — browse trusted professionals
                and completed projects near you.
              </p>

              <div className="mt-6 flex items-center gap-4">
                <button className="bg-cyan-400 text-white px-5 py-2 rounded-full shadow hover:opacity-95">
                  Explore more
                </button>
                <button
                  aria-label="play"
                  className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white/90"
                >
                  ▶
                </button>
              </div>
            </div>

            <div className="hidden md:block md:flex-1" />
          </div>
        </div>

        {/* SEARCH BAR (overlay) */}
        <div className="max-w-4xl mx-auto px-6 md:px-0 -mt-8 relative z-20">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white rounded-full shadow-xl p-3 flex items-center gap-4"
          >
            <div className="flex items-center gap-3 flex-1">
              <label htmlFor="query" className="sr-only">
                Search services
              </label>
              <input
                id="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 outline-none px-4 py-3 rounded-full"
                placeholder="Search (e.g. builder, plumber, electrician)"
                type="search"
              />

              <div className="h-10 w-px bg-gray-200" />

              <select
                aria-label="Category"
                className="outline-none px-3 py-2 bg-transparent"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Builders</option>
                <option>Plumber</option>
                <option>Electrician</option>
                <option>Company</option>
              </select>

              <div className="h-10 w-px bg-gray-200" />

              <select
                aria-label="Location"
                className="outline-none px-3 py-2 bg-transparent"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option>All</option>
                <option>Harare</option>
                <option>Bulawayo</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-cyan-400 text-white px-6 py-3 rounded-full shadow-md"
              onClick={() => {
                /* Hook search logic here */
                console.log("search:", { query, category, location });
              }}
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-8">
        <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2 rounded-full border-2 text-sm font-medium transition ${
                cat === "All"
                  ? "bg-cyan-400 text-white border-cyan-400"
                  : "bg-white border-cyan-300/60 text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Logo carousel / partners (simple static grid) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {new Array(4).fill(0).map((_, i) => (
            <div
              key={i}
              className="rounded-xl p-4 bg-white shadow-md flex items-center justify-center"
            >
              <img
                src={`https://picsum.photos/seed/logo${i}/200/200`}
                alt={`partner-${i}`}
                className="w-28 h-28 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Providers / Search results */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 mt-12 flex-1 w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Search Results</h2>
          <div className="text-sm text-gray-500">More • ◀ ▶</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {providers.map((p) => (
            <article
              key={p.id}
              className="bg-gradient-to-br from-cyan-50 to-white rounded-xl p-4 shadow-md relative overflow-hidden"
            >
              <div className="flex items-center gap-4">
                <img
                  src={p.avatar}
                  alt={p.name}
                  className="w-14 h-14 rounded-full border-2 border-white shadow-sm object-cover"
                />
                <div>
                  <h3 className="font-semibold">{p.name}</h3>
                  <p className="text-xs text-gray-600">{p.title}</p>
                </div>
              </div>

              <p className="text-xs text-gray-700 mt-3 line-clamp-3">{p.short}</p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-gray-600">{p.location}</span>
                <button className="text-xs bg-white px-3 py-1 rounded-full shadow">Get in touch</button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="bg-cyan-400 text-white px-6 py-3 rounded-full shadow">Load more</button>
        </div>
      </main>

      {/* Latest Projects */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-16 mb-8 w-full">
        <h3 className="text-xl font-semibold mb-6">Latest Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((pr) => (
            <article
              key={pr.id}
              className="rounded-2xl border p-4 bg-white shadow-sm overflow-hidden"
            >
              <div className="rounded-xl overflow-hidden">
                <img src={pr.image} alt={pr.title} className="w-full h-44 object-cover" />
              </div>

              <div className="mt-4">
                <h4 className="font-bold">{pr.title}</h4>
                <p className="text-xs text-gray-600 mt-2">
                  Service Type: Builder & Electrician
                  <br />
                  Provider: {pr.provider}
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-sm">{"★".repeat(pr.rating)}</span>
                    <span className="text-xs text-gray-500">({pr.rating}.0)</span>
                  </div>
                  <button className="text-sm bg-cyan-100 px-4 py-2 rounded-full">See more</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer (reusable) */}
      <Footer />
    </div>
    </>
  );
}



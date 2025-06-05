
"use client";
import React, { useState } from "react";

const articles = [
  {
    id: 1,
    title: "Malay, Cape Town / South Africa",
    description: "by raphaelmelnick",
    image: "/diy1.jpeg",
    category: "Travel",
    repins: 1,
  },
  {
    id: 2,
    title: "Color block your furniture and your walls",
    description: "Jodi McKee via emily henderson",
    image: "/diy2.jpeg",
    category: "Interior Design",
    repins: 17,
  },
  {
    id: 3,
    title: "dipped vase",
    description: "Jodi McKee via Bri Emery",
    image: "/diy3.jpeg",
    category: "DIY",
    repins: 6,
  },
  {
    id: 4,
    title: "Raffia Tricot Tote by Prada",
    description: "Jodi McKee",
    image: "/diy4.jpeg",
    category: "Fashion",
    repins: 7,
  },
  {
    id: 5,
    title: "Perforated ZBag by Fendi",
    description: "Jodi McKee",
    image: "/diy5.jpeg",
    category: "Fashion",
    repins: 8,
  },
  {
    id: 6,
    title: "Patio",
    description: "Jodi McKee",
    image: "/diy5.jpeg",
    category: "DIY",
    repins: 8,
  },
  {
    id: 7,
    title: "Abstract Blue Pattern",
    description: "",
    image: "/diy6.jpeg",
    category: "Art",
    repins: 0,
  },
];


const categories = ["All", "DIY", "Fashion", "Travel", "Interior Design", "Art"];

export default function DiyPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = filter === "All" || article.category === filter;
    const matchesSearch =
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Heading and Filter/Search Controls in one row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h1 className="text-3xl font-semibold text-gray-800" >DIY Inspirations</h1>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div>
            <label htmlFor="category" className="mr-2 font-medium text-gray-800">
              Category:
            </label>
            <select
              id="category"
              className="border border-gray-500 rounded px-3 py-1"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <input
            type="search"
            placeholder="Search articles..."
            className="border border-gray-500 rounded px-3 py-1 w-full sm:w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Article Grid */}
      <div
        className="columns-1 sm:columns-2 md:columns-3 gap-20 space-y-10 sp"
        style={{ columnGap: "1rem" }}
      >
        {filteredArticles.map((article) => (
          <article
  key={article.id}
  className="break-inside-avoid bg-gray-100 rounded shadow-md overflow-hidden mb-4 transform transition duration-300 hover:scale-105"
>
            <img
              src={article.image}
              alt={article.title}
              className="w-full object-cover rounded-t"
            />
            <div className="p-4">
              <h2 className="font-semibold mb-2 text-gray-900">{article.title}</h2>
              <p className="text-sm text-gray-800 mb-1">{article.description}</p>
              <p className="text-xs text-gray-700">
                {article.repins} repins • {article.category}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

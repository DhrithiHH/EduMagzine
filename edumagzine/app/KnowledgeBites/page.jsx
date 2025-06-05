"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Bookmark, BookmarkCheck, Share2 } from "lucide-react";

export default function KnowledgeBitesPage() {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(true);
  const [bookmarked, setBookmarked] = useState(false);

  const fetchFact = () => {
    setLoading(true);
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
      .then((res) => res.json())
      .then((data) => {
        setFact(data.text);
        setLoading(false);
        setBookmarked(localStorage.getItem(data.text) !== null);
      })
      .catch(() => {
        setFact("Oops! Couldn't fetch a fact right now.");
        setLoading(false);
      });
  };

  const toggleBookmark = () => {
    if (bookmarked) {
      localStorage.removeItem(fact);
      setBookmarked(false);
    } else {
      localStorage.setItem(fact, "bookmarked");
      setBookmarked(true);
    }
  };

  const shareFact = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "Fun Fact from Knowledge Bites",
        text: fact,
        url: window.location.href,
      });
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <main className="min-h-[85vh] bg-gradient-to-tr from-sky-50 to-sky-100 flex items-center justify-center px-4 py-8">
      <motion.section
        className="bg-white shadow-xl rounded-xl p-10 max-w-[70vw]  max-h-[80-vh] h-80vh w-full border border-gray-200 relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <h1 className="text-3xl font-bold text-blue-900 mb-6 flex items-center justify-center gap-2">
          🧠 Knowledge Bites
        </h1>

        {/* Badge */}
        <div className=" h-auto rounded-xl bg-blue-50 px-5 py-5">
        <div className="mb-2 relative">
          <span className="inline-block text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full absolute -top-3 -left-2">
            Did you know?
          </span>
        </div>

        {/* Fact */}
        <div className=" min-h-[100px] flex items-center justify-center">
          {loading ? (
            <p className="text-gray-400 text-lg italic">Loading a fun fact...</p>
          ) : (
            <motion.p
              key={fact}
              className="text-gray-800 text-xl font-medium leading-relaxed m-15"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              “{fact}”
            </motion.p>
          )}
        </div></div>

        {/* Reactions */}
        {!loading && (
          <div className="flex gap-4 justify-center my-6">
            {["👍", "🤯", "😂"].map((emoji) => (
              <button
                key={emoji}
                className="text-2xl hover:scale-110 transition"
                onClick={() => alert(`You reacted with ${emoji}`)}
              >
                {emoji}
              </button>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="flex items-center justify-between mt-6 gap-3">
          <button
            onClick={fetchFact}
            className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md font-semibold shadow transition"
          >
            🔄 Get Another Fact
          </button>

          <div className="flex gap-2">
            <button
              onClick={toggleBookmark}
              className="p-2 rounded hover:bg-gray-100 transition"
              title="Bookmark this fact"
            >
              {bookmarked ? (
                <BookmarkCheck className="text-blue-600" />
              ) : (
                <Bookmark className="text-gray-500" />
              )}
            </button>
            <button
              onClick={shareFact}
              className="p-2 rounded hover:bg-gray-100 transition"
              title="Share this fact"
            >
              <Share2 className="text-gray-600" />
            </button>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

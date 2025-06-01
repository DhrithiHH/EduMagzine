import React from 'react';

export default function ArticleCard({ image, title, description, actionText = "Read More", onActionClick }) {
  return (
    <div className="bg-white rounded-xl shadow-lg max-w-sm mx-auto overflow-hidden">
      {/* 1. Image area */}
      <div className="h-48 w-full bg-gray-200 overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* 2. Heading + 3. Description */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        {/* 4. Action button */}
        <button
          onClick={onActionClick}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold hover:from-blue-600 hover:to-indigo-700 transition"
        >
          {actionText}
        </button>
      </div>
    </div>
  );
}

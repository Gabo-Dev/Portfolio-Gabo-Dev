import React from "react";

function Card({image,title,description}) {
  return (
    <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg ">
      <img
        className="w-full transition-transform duration-500 transform hover:translate-x-2 hover:translate-y-8 hover:scale-125"
        src={image}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2  text-gray-200">
          {title}
        </div>
        <p className="text-gray-200 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
}

export default Card;

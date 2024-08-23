import React from "react";

function Card({image,title,description}) {
  return (
    <div className=" rounded-3xl overflow-hidden  shadow-lg bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-200 via-red-500 to-fuchsia-500">
      <img
        className="w-full h-1/2 md:transition-transform md:duration-500 md:transform  md:hover:scale-125"
        src={image}
        alt={title}
      />
      <div className="p-2 w-full">
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

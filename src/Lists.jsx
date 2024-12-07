import React from "react";
import { Link } from "react-router-dom";

const Lists = ({ items }) => {
  return (
    <div className="flex w-full items-center justify-center flex-col gap-6 p-8">
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-[#2e1605] rounded-lg shadow-lg hover:scale-105 transition-transform p-4 w-full sm:w-[400px] md:w-[500px] lg:w-[600px] max-w-full"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-[#b1a9ae]"
          />
          <div className="flex-grow ml-4">
            <h3 className="text-lg font-semibold text-gray-300">{item.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Lists;

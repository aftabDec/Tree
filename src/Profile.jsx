import React from "react";

const Profile = ({ name, bio, img, actions }) => {
  return (
    <div className="flex flex-col items-center  rounded-lg shadow-lg p-6 max-w-sm mx-auto hover:shadow-xl transition-shadow">
      <img
        src={img}
        alt={name}
        className="w-32 h-32 rounded-full object-cover border-4 border-[#b1a9ae] mb-4"
      />
      <h1 className="text-2xl font-bold text-white">{name}</h1>
      <p className="text-gray-300 text-sm mt-2 text-center">{bio}</p>
      {actions && (
        <div className="flex space-x-4 mt-4">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={action.onClick}
              className="px-6 py-3 bg-[#5b5456] text-white rounded-md shadow-md hover:bg-[#b1a9ae] transition-colors"
            >
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;

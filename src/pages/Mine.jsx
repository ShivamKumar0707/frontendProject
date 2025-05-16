import React from 'react';

const user = {
  name: 'Shivam Kumar',
  email: 'shivamkr3865@gmail.com',
  location: 'Noida sector 15, UP',
  role: 'Software Developer',
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAFfrQu48vGkv_0LXYDasMHaafpcquxa4rmg&s',
  joined: 'January 2024',
};

const Mine = () => {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">My Profile</h2>

      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center gap-6">
        {/* Avatar */}
        <img
          src={user.avatar}
          alt={user.name}
          className="w-25 h-30 rounded-full object-cover border-4 border-blue-500"
        />

        {/* Info */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold">{user.name}</h3>
          <p className="text-gray-600">{user.role}</p>
          <p className="text-gray-500">{user.email}</p>
          <p className="text-gray-500">📍 {user.location}</p>
          <p className="text-gray-500">Joined: {user.joined}</p>

          {/* <div className="mt-4 flex justify-center md:justify-start gap-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Edit Profile
            </button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
              Log Out
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Mine;

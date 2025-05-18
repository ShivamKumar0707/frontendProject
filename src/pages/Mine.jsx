// import React from 'react';

// const user = {
//   name: 'Shivam Kumar',
//   email: 'shivamkr3865@gmail.com',
//   location: 'Noida sector 15, UP',
//   role: 'Software Developer',
//   avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAFfrQu48vGkv_0LXYDasMHaafpcquxa4rmg&s',
//   joined: 'January 2024',
// };

// const Mine = () => {
//   return (
//     <div className="p-8 max-w-3xl mx-auto">
//       <h2 className="text-3xl font-bold mb-6 text-center">My Profile</h2>

//       <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center gap-6">
//         {/* Avatar */}
//         <img
//           src={user.avatar}
//           alt={user.name}
//           className="w-25 h-30 rounded-full object-cover border-4 border-blue-500"
//         />

//         {/* Info */}
//         <div className="text-center md:text-left">
//           <h3 className="text-2xl font-semibold">{user.name}</h3>
//           <p className="text-gray-600">{user.role}</p>
//           <p className="text-gray-500">{user.email}</p>
//           <p className="text-gray-500">📍 {user.location}</p>
//           <p className="text-gray-500">Joined: {user.joined}</p>

//           {/* <div className="mt-4 flex justify-center md:justify-start gap-3">
//             <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//               Edit Profile
//             </button>
//             <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
//               Log Out
//             </button>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Mine;

// const Mine = () => {
//   return (
//     <div className="min-h-screen bg-gray-700 flex items-center justify-center">
//       <div className="w-full max-w-[420px]  bg-white rounded-lg overflow-hidden shadow-lg  ">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-red-400 to-yellow-200 text-white p-4 text-center">
          
//           <p className="text-start ml-3"> log in</p>
//           <p className="text-sm">Please log in with your phone number or email</p>
//         </div>

//         {/* Tabs */}
//         <div className="flex text-center text-sm font-semibold border-b border-gray-200">
//           <div className="w-1/2 p-2 border-b-2 border-red-500 text-red-500">Phone Number</div>
//           <div className="w-1/2 p-2 text-gray-500">Email Login</div>
//         </div>

//         {/* Form */}
//         <div className="p-4 space-y-4">
//           {/* Phone Input */}
//           <div>
//             <label className="text-gray-700 text-sm font-semibold">Phone Number</label>
//             <div className="flex items-center border rounded-md overflow-hidden mt-1">
//               {/* <span className="px-3 bg-gray-100 border-r text-sm">+91</span> */}
//               <input
//                 type="tel"
//                 placeholder="Please enter the phone number"
//                 className="w-full px-3 py-2 text-sm focus:outline-none"
//               />
//             </div>
//           </div>

//           {/* Password */}
//           <div>
//             <label className="text-gray-700 text-sm font-semibold">Password</label>
//             <div className="flex items-center border rounded-md overflow-hidden mt-1">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full px-3 py-2 text-sm focus:outline-none"
//               />
//               {/* <span className="px-3 text-gray-400 text-sm">👁️</span> */}
//             </div>
//           </div>

//           {/* Remember */}
//           <div className="flex items-center text-sm text-gray-600">
//             <input type="checkbox" className="mr-2" />
//             Remember password
//           </div>

//           {/* Buttons */}
//           <button className="w-full bg-gray-300 text-gray-700 py-2 rounded-md text-sm font-bold">
//             Log In
//           </button>
//           <button className="w-full border border-red-500 text-red-500 py-2 rounded-md text-sm font-bold">
//             Register
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Mine;



const Mine = () => {
  const buttons = [
    { label: "Recharge", icon: "💰" },
    { label: "Withdraw", icon: "🤲" },
    { label: "Bind card", icon: "💳" },
    { label: "Fund", icon: "🗂️" },
    { label: "Password", icon: "🔒" },
    { label: "Language", icon: "🌐" },
    { label: "Service", icon: "📖" },
    { label: "Team", icon: "👥" },
  ];

  return (
    <div className="min-h-screen bg-[#0F111D] text-white p-4 flex flex-col items-center mt-15">
      {/* My Information */}
      <h2 className="text-lg text-gray-200 font-semibold mb-3">My information</h2>
      {/* <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#4e4e6a] to-[#8383a1] border-2 border-cyan-400 mb-3" /> */}
      <img  className="w-24 h-24 rounded-full bg-gradient-to-r from-[#4e4e6a] to-[#8383a1] border-2 border-cyan-400 mb-3" src="https://media.istockphoto.com/id/1288129985/vector/missing-image-of-a-person-placeholder.jpg?s=612x612&w=0&k=20&c=9kE777krx5mrFHsxx02v60ideRWvIgI1RWzR1X4MG2Y=" alt="" />
      {/* UID */}
      <div className="flex items-center space-x-2 mb-6">
        <p className="text-md text-white font-medium">UID:123456</p>
        <button className="text-yellow-300 text-lg">📋</button>
      </div>

      {/* Icon Buttons Grid */}
      <div className="grid grid-cols-4 gap-4 w-full mb-6">
        {buttons.map((btn, idx) => (
          <div key={idx} className="flex flex-col items-center text-sm">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4e4e6a] to-[#a8947a] flex items-center justify-center text-2xl">
              {btn.icon}
            </div>
            <p className="text-gray-200 mt-2">{btn.label}</p>
          </div>
        ))}
      </div>

      {/* My Wallet Section */}
      <div className="bg-[#1C1E2F] w-full rounded-xl p-4 shadow-md">
        <div className="flex items-center text-sm text-gray-300 mb-3">
          <span className="mr-2 text-lg">👛</span>
          My wallet
        </div>
        <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-200">
          <div>
            <p className="text-xs text-gray-400">Balance</p>
            <p className="text-lg font-semibold">0.00 ₹</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Available funds</p>
            <p className="text-lg font-semibold">0 ₹</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Salary total income</p>
            <p className="text-lg font-semibold">0 ₹</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Commission total income</p>
            <p className="text-lg font-semibold">0 ₹</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mine;


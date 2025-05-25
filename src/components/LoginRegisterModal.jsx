import React, { useState } from "react";

const LoginRegisterModal = ({ onClose }) => {
  const [tab, setTab] = useState("phone");
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    password: "",
    countryCode: "+91",
    remember: false,
  });

  const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormData({
    ...formData,
    [name]: type === "checkbox" ? checked : value,
  });
};

  const handleLogin = () => {
    alert(`Logged in with ${tab === "phone" ? formData.phone : formData.email}`);
  };

  return (
    <div className="fixed inset-0 max-w-[430px] bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="w-[380px] max-w-[430px] bg-white rounded-lg shadow-lg overflow-hidden relative">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-3 right-3 z-10">
        
          <p className="w-7 text-red-800 font-bold">X</p>
        </button>

        {/* Top Header */}
        <div className="bg-gradient-to-r from-[#FA4D4D] to-[#fa7b7b] text-white p-4 text-center relative">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-xl font-bold">Log in</h1>
          </div>
          <p className="text-sm leading-tight">
            Please log in with your phone number or email 
            If you forget your password, please contact customer service
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setTab("phone")}
            className={`flex-1 py-2 text-sm font-semibold ${
              tab === "phone"
                ? "text-[#FA4D4D] border-b-2 border-[#FA4D4D]"
                : "text-gray-400"
            }`}
          >
            phone number
          </button>
          <button
            onClick={() => setTab("email")}
            className={`flex-1 py-2 text-sm font-semibold ${
              tab === "email"
                ? "text-[#FA4D4D] border-b-2 border-[#FA4D4D]"
                : "text-gray-400"
            }`}
          >
            ✉️ Email Login
          </button>
        </div>

        {/* Form */}
        <div className="px-5 py-6 space-y-4 bg-[#f6f6f6]">
          {tab === "phone" ? (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1"> Phone number</label>
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="border border-gray-400 rounded px-2 py-2 text-sm bg-white"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Please enter the phone number"
                  className="flex-1 border border-gray-400 rounded px-3 py-2 text-sm bg-white"
                />
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">✉️ Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-400 rounded px-3 py-2 text-sm bg-white"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1"> Password</label>
            <div className="relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full border border-gray-400 rounded px-3 py-2 text-sm bg-white"
              />
              {/* <span className="absolute right-3 top-2.5 text-gray-400 text-sm">👁️</span> */}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
            />
            <label className="text-sm text-gray-600">Remember password</label>
          </div>

          <button
            onClick={handleLogin}
            className="w-full py-2 bg-gray-400 text-white font-semibold rounded-full"
          >
            Log in
          </button>

          {/* <button
            onClick={() => alert("Go to register")}
            className="w-full py-2 border-2 border-[#FA4D4D] text-[#FA4D4D] rounded-full font-semibold"
          >
            Register
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterModal;




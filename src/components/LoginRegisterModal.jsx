import React, { useState } from "react";

const LoginRegisterModal = ({ onClose }) => {
  const [tab, setTab] = useState("register");

  return (
    <div className="fixed inset-0 bg-slate-700 bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-slate-300 rounded-lg shadow-lg w-96 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2"
        >
          <img
            src="https://img.icons8.com/?size=100&id=13903&format=png&color=000000"
            alt="close"
            className="h-7"
          />
        </button>

        <div className="flex justify-around mb-4">
          <button
            className={
              tab === "register" ? "font-bold border border-cyan-300 rounded-sm focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-blue-300 p-1 " : ""
            }
            onClick={() => setTab("register")}
          >
            Register
          </button>
          <button
            className={
              tab === "login" ? "font-bold border border-cyan-300 rounded-sm focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-blue-300 p-1" : ""
            }
            onClick={() => setTab("login")}
          >
            Login
          </button>
        </div>

        <div>
          {tab === "register" ? (
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Username"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>

              <input
                type="password"
                placeholder="Password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              <button className="bg-indigo-600 text-white w-full py-2 rounded mt-6">
                Register
              </button>
            </div>
          ) : (
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Username"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              <button className="bg-green-500 text-white w-full py-2 rounded mt-6">
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterModal;

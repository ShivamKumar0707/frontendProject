import React from 'react';

const navItems = [
  { key: 'home', label: 'Home' },
  { key: 'record', label: 'Record' },
  { key: 'quantify', label: 'Quantify' },
  { key: 'team', label: 'Team' },
  { key: 'mine', label: 'Mine' }
];
//flex max-w-sm rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg

const BottomNav = ({ active, setActive }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-sky-200 bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg  flex justify-around py-4 border border-gray-500">
      {navItems.map(item => (
        <button
          key={item.key}
          onClick={() => setActive(item.key)}
          className={`text-lg ${active === item.key ? 'text-3xl font-bold px-6 py-3 leading-none text-black-200 border border-gray-500 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-blue-300 ' : 'text-gray-900'}`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default BottomNav;

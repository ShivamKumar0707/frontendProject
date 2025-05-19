
// const navItems = [
//   { key: 'home', label: 'Home' },
//   { key: 'record', label: 'Record' },
//   { key: 'quantify', label: 'Quantify' },
//   { key: 'team', label: 'Team' },
//   { key: 'mine', label: 'Mine' }
// ];
// //flex max-w-sm rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg

// const BottomNav = ({ active, setActive }) => {
//   return (
//     <div className="fixed bottom-0 left-0 w-full bg-sky-200 bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg  flex justify-around py-4 border border-gray-500">
//       {navItems.map(item => (
//         <button
//           key={item.key}
//           onClick={() => setActive(item.key)}
//           className={`text-lg ${active === item.key ? 'text-3xl font-bold px-6 py-3 leading-none text-black-200 border border-gray-500 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-blue-300 ' : 'text-gray-900'}`}
//         >
//           {item.label}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default BottomNav;

const navItems = [
  { key: 'home', label: 'Home' , icon: "🏠"},
  { key: 'record', label: 'Record', icon: "📑" },
  { key: 'quantify', label: 'Quantify', icon: "¥"},
  { key: 'team', label: 'Team', icon: "👥" },
  { key: 'mine', label: 'Mine', icon: "🙋‍♂️" }
];
//flex max-w-sm rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg

const BottomNav = ({ active, setActive }) => {
  return (
    <div className="h-14 w-full max-w-[430px]  bg-[#181c2e] border-t border-gray-700 flex items-center justify-around">
      {navItems.map(item => (
        <button
          key={item.key}
          onClick={() => setActive(item.key)}
          className={`flex flex-col items-center justify-center   text-xs ${active===
                item.key ? "text-3xl font-bold text-white" : "text-gray-400"
              }`}
        >
           <div className="text-lg">{item.icon}</div>
               <div>{item.label}</div>
          
        </button>
      ))}
    </div>
  );
};

export default BottomNav;



 {/* Bottom Navigation */}
        // <div className="h-14 bg-[#181c2e] border-t border-gray-700 flex items-center justify-around">
        //   {[
        //     { label: "Home", icon: "🏠" },
        //     { label: "Record", icon: "📑" },
        //     { label: "Quantify", icon: "¥", active: true },
        //     { label: "Team", icon: "👥" },
        //     { label: "Mine", icon: "🙋‍♂️" },
        //   ].map((item) => (
        //     <div
        //       key={item.label}
        //       className={`flex flex-col items-center justify-center text-xs ${
        //         item.active ? "text-white" : "text-gray-400"
        //       }`}
        //     >
        //       <div className="text-lg">{item.icon}</div>
        //       <div>{item.label}</div>
        //     </div>
        //   ))}
        // </div>

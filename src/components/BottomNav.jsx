

const navItems = [
  { key: "home", label: "Home", icon: "🏡" },
  { key: "record", label: "Record", icon: "📖" },
  { key: "quantify", label: "Quantify", icon: "💸" },
  { key: "team", label: "Team", icon: "👨‍👦‍👦" },
  { key: "mine", label: "Mine", icon: "😊" },
];

const BottomNav = ({ active, setActive }) => {
  return (
    <div className="h-14 w-full max-w-[430px] bg-[#181c2e] border-t border-gray-700 flex items-center justify-around">
      {navItems.map((item) => (
        <button
          key={item.key}
          onClick={() => setActive(item.key)}
          className={`flex flex-col items-center justify-center   text-xs ${
            active === item.key
              ? "text-3xl font-bold text-white"
              : "text-gray-400"
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


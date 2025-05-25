

const navItems = [
  { key: "home", label: "Home", icon: "https://img.icons8.com/ios-filled/50/home.png" },
  { key: "record", label: "Record", icon: "https://img.icons8.com/?size=100&id=FOzWsFQFc20e&format=png&color=000000" },
  { key: "quantify", label: "Quantify", icon: "https://img.icons8.com/?size=100&id=2X6VDE7D9sqM&format=png&color=000000" },
  { key: "team", label: "Team", icon: "https://img.icons8.com/?size=100&id=nvtjGwY1if9l&format=png&color=000000" },
  { key: "mine", label: "Mine", icon: "https://img.icons8.com/?size=100&id=77883&format=png&color=000000" },
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
          <div className="text-lg"><img src={item.icon} alt="" width='25px'/></div>
          <div>{item.label}</div>
        </button>
      ))}
    </div>
  );
};

export default BottomNav;


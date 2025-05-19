

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




const Quantify = () => {

  return (
    <div className="pt-20 min-h-screen bg-[#0F111D] text-white flex flex-col items-center px-4 py-6">
      {/* Top Image */}
      <img
        src="https://media.istockphoto.com/id/879153690/photo/bitcoin-on-a-led-technological-light-surface.jpg?s=612x612&w=0&k=20&c=0m9mJ4DFXcU9UPBi9b3XxKqoeANT343Yn3Atx1pHmMs="
        alt="Crypto Logo"
        className="w-70 h-40 mb-4 rounded-xl"
      />

      {/* Start Quantifying Button */}
      <button className=" w-full max-w-[430px] bg-gradient-to-r from-[#676cc8] to-[#3e417b] text-white font-medium py-3 px-6 rounded-xl mb-6 shadow-md">
        Start quantifying
      </button>

      {/* Quantitative Data Title */}
      <h3 className="text-sm font-semibold mb-4 w-full text-left">
        Quantitative data
      </h3>

      {/* Data Grid */}
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="bg-[#1c1e2f] rounded-xl p-4 shadow-lg flex flex-col items-center">
          <h2 className="text-xl text-cyan-300 font-bold">0.00</h2>
          <p className="text-sm text-gray-300 mt-1">📅 Total revenue</p>
        </div>
        <div className="bg-[#1c1e2f] rounded-xl p-4 shadow-lg flex flex-col items-center">
          <h2 className="text-xl text-cyan-300 font-bold">6%</h2>
          <p className="text-sm text-gray-300 mt-1">📈 Trading Profit</p>
        </div>
        <div className="bg-[#1c1e2f] rounded-xl p-4 shadow-lg flex flex-col items-center">
          <h2 className="text-xl text-cyan-300 font-bold">0.00</h2>
          <p className="text-sm text-gray-300 mt-1">💰 Balance</p>
        </div>
        <div className="bg-[#1c1e2f] rounded-xl p-4 shadow-lg flex flex-col items-center">
          <h2 className="text-xl text-cyan-300 font-bold">0</h2>
          <p className="text-sm text-gray-300 mt-1">+ Today's earnings</p>
        </div>
      </div>
    </div>
  );
};


export default Quantify;

const Home = () => {
 
  return (
    <div className=" w-full h-screen bg-gray-800 flex items-center justify-center pt-15">
      {/* Mobile Container  max-w-[430px]*/}
      <div className="w-full  h-full bg-[#0d0f1c] text-white flex flex-col overflow-hidden shadow-2xl">
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Header */}
        <div className="bg-[#121525] rounded-xl p-4 space-y-4">
  {/* Heading */}
  {/* <div>
    <h2 className="text-lg font-semibold text-white">🏆 Industry Benchmark</h2>
    <p className="text-sm text-gray-300">Create value for users</p>
  </div> */}

  {/* Slider */}
  <div className="overflow-x-auto snap-x snap-mandatory flex space-x-4 scroll-smooth scrollbar-hide">
    {/* Slide 1 */}
    <div className="min-w-full snap-start">
      <img
        src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg"
        alt="Slide 1"
        className="rounded-lg w-full h-40 object-cover"
      />
    </div>

    {/* Slide 2 */}
    <div className="min-w-full snap-start">
      <img
        src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg"
        alt="Slide 2"
        className="rounded-lg w-full h-40 object-cover"
      />
    </div>
  </div>
</div>


          {/* Win Rewards */}
          {/* Grouped Win Rewards + Shortcuts Section */}
<div className=" w-full flex flex-row justify-between items-start p-4 bg-[#121525] ">
  
  {/* Win Rewards */}
  <div className="bg-[#1c1e2f] rounded-xl  p-4 m-2 flex flex-col justify-between items-center h-35">
    <div>
      <p className="text-sm text-white">Win rewards</p>
      <button className="mt-1 px-3 py-1 text-xs bg-[#3ec6ff] text-black font-semibold rounded-full">
        Invite friends
      </button>
    </div>
    <img
      src="..\src\assets\ai-generated-birthday-gift-box-free-png.webp"
      alt="gift"
      className="w-12 h-12"
    />
  </div>

  {/* Shortcuts */}
  <div className="grid grid-cols-1 gap-3">
    <button className="flex items-center gap-2 bg-[#1c1e2f] rounded-lg p-3 text-sm text-white">
      <span className="w-5 h-5 bg-yellow-400 rounded-full"></span>
      Platform information
    </button>
    <button className="flex items-center gap-2 bg-[#1c1e2f] rounded-lg p-3 text-sm text-white">
      <span className="w-5 h-5 bg-orange-400 rounded-full"></span>
      White paper
    </button>
    <button className="flex items-center gap-2 bg-[#1c1e2f] rounded-lg p-3 text-sm text-white">
      <span className="w-5 h-5 bg-purple-600 rounded-full"></span>
      APP download
    </button>
  </div>
</div>


          {/* Mission Center */}
          <button className="bg-[#121525] rounded-xl p-4 w-full text-left  ">
            <p className=" text-sm">Mission Center</p>
          </button>

          {/* Market Filters */}
          <div className="bg-[#121525] rounded-xl p-4 space-y-2">
            <p className="text-sm">Market</p>
            <div className="flex gap-2 flex-wrap">
              {["Huobipro", "Okex", "Binance", "Coinbase"].map((item) => (
                <button
                  key={item}
                  className="text-xs bg-[#1e2133] px-3 py-1 rounded-full border border-gray-600"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Home;

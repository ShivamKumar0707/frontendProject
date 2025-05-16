const Home = () => {
  return <>
 
  <div className="flex"> <img src="https://img.icons8.com/?size=100&id=91234&format=png&color=000000" alt="home icon" className="w-15 "/><p className="pt-3 text-xl"> Home Page</p></div>


 <div className="flex flex-col md:flex-row min-h-screen mt-7">
      {/* Left Side */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-start p-8 bg-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our React Dummy Project</h1>
        <p className="text-lg text-gray-700 mb-6">
          Discover our services and explore a wide range of features designed to empower your journey.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="bg-white border border-blue-600 text-blue-600 px-6 py-2 rounded-xl hover:bg-blue-50 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 w-full">
        <img
          src="https://wallpapers.com/images/featured/8k-ultra-hd-nature-prdfm720u6780jl5.jpg"
          alt="Tech Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>


  
  </>
};

export default Home;

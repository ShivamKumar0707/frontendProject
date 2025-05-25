import React, { useState } from 'react';
import BottomNav from './components/BottomNav';
import LoginRegisterModal from './components/LoginRegisterModal';

import Home from './pages/Home';
import Record from './pages/Record';
import Quantify from './pages/Quantify';
import Team from './pages/Team';
import Mine from './pages/Mine';

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [showModal, setShowModal] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case 'record': return <Record />;
      case 'quantify': return <Quantify />;
      case 'team': return <Team />;
      case 'mine': return <Mine />;
      default: return <Home />;
    }
  };

  return (
    <div className='flex justify-center w-full h-full bg-[#121525]'>
    <div className=" w-full max-w-[430px] h-full relative min-h-screen pb-2 bg-[#121525] ">
      {/* User Icon */}
      <div className=" absolute top-4 right-4 pt-2 m-1">
      <button onClick={() => setShowModal(true)} className="text-1xl font-bold px-1 py-2 leading-none  border border-red-300 rounded-sm focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-blue-300 '">🎧</button>
        
      </div>

      {/* Page Content with simple fade-in */}
      <div className="p-4 transition-opacity duration-300">
        {renderPage()}
      </div>

      {/* Login/Register Modal */}
      {showModal && <LoginRegisterModal onClose={() => setShowModal(false)} />}

      {/* Bottom Navigation */}
      <BottomNav active={activePage} setActive={setActivePage} />
    </div>
    </div>
  );
};

export default App;

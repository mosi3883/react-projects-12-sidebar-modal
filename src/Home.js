import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { AppContext } from './context';
const Home = () => {
  const AppCtx = useContext(AppContext);
  return (
    <main>
      <button className='sidebar-toggle' onClick={() => AppCtx.openSidebar()}>
        <FaBars />
      </button>
      <button className='btn' onClick={() => AppCtx.openModal()}>
        show modal
      </button>
    </main>
  );
};

export default Home;

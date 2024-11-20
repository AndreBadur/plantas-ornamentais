import Popup from '@/components/PopUp';
import Menu from '@/components/Menu';
import React, { useState } from 'react';


const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <div>
        <Menu></Menu>
      <button onClick={openPopup} className='mt-[5rem] text-black'>Carrinho</button>

      <Popup isOpen={isOpen} closePopup={closePopup} />
    </div>
  );
};

export default App;
import Popup from '@/components/macrocomponent/PopUp';
import Menu from '@/components/Menu';
import React, { useState } from 'react';


const App = () => {
  // Precisamos declarar essas variáveis para armazenar o boolean de aberto ou fechado
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
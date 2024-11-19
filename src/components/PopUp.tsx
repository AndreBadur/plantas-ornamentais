// Popup.js
import React from 'react';

const Popup = ({ isOpen, closePopup }) => {
  if (!isOpen) return null;  // Não renderiza o Popup se não estiver aberto

  return (
    <div>
        <div className='w-screen h-screen bg-black z-20'></div>
        <div className="fixed inset-0 flex justify-end items-center z-50 top-28" onClick={closePopup}>
            <div className="animate-slide-in-right bg-[#ff00ff] h-screen w-[30vw]" onClick={(e) => e.stopPropagation()}> {/* Evita fechar ao clicar dentro do popup */}
                <div className='pl-[1rem]'>
                    <h2>AAAAAAAAAAAAAH</h2>
                    <p>Pelo amor de Deus VAI</p>
                    <button onClick={closePopup}>Fechar</button>
                </div>
        
            </div>
        </div>
    </div>
    
  );
};

export default Popup;
// Popup.js
import React from 'react';

const Popup = ({ isOpen, closePopup }) => {
  if (!isOpen) return null;  // Não renderiza o Popup se não estiver aberto

  return (
    <div>
        <div className=' fixed inset-0 flex w-screen h-screen bg-black z-auto opacity-30'></div>
        <div className="fixed inset-0 flex justify-end items-center z-50 top-[7rem]" onClick={closePopup}>
            <div className="animate-slide-in-right bg-[url('/imagens/bgProfile.png')] bg-cover h-screen w-[30vw]" onClick={(e) => e.stopPropagation()}> {/* Evita fechar ao clicar dentro do popup */}
                <div className='pl-[1rem] bg-[#3b733f] h-screen opacity-95'>
                  <div>
                    <div className='flex justify-between pt-[1rem]'>
                      <img className='w-[1.5rem] h-[1.5rem]' onClick={closePopup} src="/imagens/sair.png" alt="" />
                      <h2>Finalizar compra</h2>
                    </div>
                    
                    <p>Pelo amor de Deus VAI</p>
                    <button onClick={closePopup}>Fechar</button>
                  </div>  
                </div>
        
            </div>
        </div>
    </div>
    
  );
};

export default Popup;
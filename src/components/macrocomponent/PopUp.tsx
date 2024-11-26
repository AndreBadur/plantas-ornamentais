import React from 'react';
import Card from '../Card';

const Popup = ({ isOpen, closePopup }) => {
  if (!isOpen) return null;  // Não renderiza o Popup se não estiver aberto

  return (
    <div>
        <div className=' fixed inset-0 flex w-screen h-screen bg-black z-auto opacity-30'></div>
        <div className="fixed inset-0 flex justify-end items-center z-50 top-[7rem]" onClick={closePopup}>
            <div className="animate-slide-in-right bg-[url('/imagens/bgProfile.png')] bg-cover h-screen w-[30vw]" onClick={(e) => e.stopPropagation()}> {/* Evita fechar ao clicar dentro do popup */}
                <div className='pl-[1rem] bg-[#3b733f] h-screen opacity-95 overflow-y-auto'>
                  <div>

                    <div className='flex justify-between pt-[0.8rem]'>
                      <img className='w-[1.5rem] h-[1.5rem] cursor-pointer' onClick={closePopup} src="/imagens/sair.png" alt="" />
                      <h2 className='pr-[1.6rem] font-bebasNeue text-[#00F511] text-[20px]'>Finalizar compra</h2>
                    </div>

                      {/* Acredito que possamos utilizar o componente Card com seus props para passar os dados do banco
                      e estrutura de busca / repetição para mostrar todos os produtos que estão no carrinho.*/}
                    <div className="flex-1  px-4 space-y-4 pb-[5rem]">
                      <Card nome="Planta X" descricao="Aqui jaz uma bela descrição" valor="78,45" quantidade="3" />
                      <Card nome="Planta Y" descricao="Aqui jaz outra descrição" valor="50,00" quantidade="2" />
                      <Card nome="Planta Z" descricao="Aqui jaz mais uma descrição" valor="100,00" quantidade="1" />
                      <Card nome="Planta A" descricao="Aqui jaz uma bela descrição" valor="78,45" quantidade="3" />
                      <Card nome="Planta B" descricao="Aqui jaz uma bela descrição" valor="78,45" quantidade="3" />
                      
                    </div>
                  </div>  
                </div>
        
            </div>
        </div>
    </div>
    
  );
};

export default Popup;
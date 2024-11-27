import React from "react";

const MenuPagamento: React.FC= () => {
    return (
        <aside className="fixed left-0 bottom-0 top-14 bg-gray-300 w-64 h-auto">
            <div className="flex justify-center mt-12">
            <h1 className="text-black font-bold flex justify-center">Passos para finalizar a compra</h1>
            </div>
            <div className="flex border-t border-gray-400 w-5/6 mx-auto my-4 justify-center"></div>
            <div className="mt-10 flex flex-col justify-center space-y-6">
                <h1 className="text-black flex justify-center">Confirme os itens</h1>
                <h1 className="text-black flex justify-center">Escolha o endereço</h1>
                <h1 className="text-black flex justify-center">Método de envio</h1>
                <h1 className="text-black flex justify-center">Método de pagamento</h1>
            </div>
        </aside>
    );
};

export default MenuPagamento;

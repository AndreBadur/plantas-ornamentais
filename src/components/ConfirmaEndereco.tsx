import Link from 'next/link'
import { useState } from 'react'

const ConfirmaEndereco: React.FC = () => {
    const [selecionado, setSelecionado] = useState(false);

    // Alterna o estado de seleção ao clicar no botão
    const handleSelecionar = () => {
        setSelecionado(!selecionado);
    };

    return (
        <div className="flex flex-col items-center mt-16">
            {/* Título */}
            <div className="mb-4">
                <h1 className="text-black font-bold">CONFIRME O ENDEREÇO</h1>
            </div>
            
            {/* Componente de Endereço */}
            <div className="w-96 p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
                {/* Título do Endereço */}
                <h1 className="text-lg font-bold text-black">Endereço</h1>
                {/* Subtítulo */}
                <p className="text-gray-600 mt-2">Descrição</p>
                {/* Botão de Seleção */}
                <div className="flex justify-end mt-4">
                    <button
                        className={`px-4 py-2 rounded-md font-bold ${
                            selecionado
                                ? 'bg-green-500 text-white'
                                : 'bg-gray-300 hover:bg-gray-400 text-black'
                        }`}
                        onClick={handleSelecionar}
                    >
                        {selecionado ? 'Selecionado' : 'Selecionar'}
                    </button>
                </div>
            </div>

            {/* Botões de Navegação */}
            <div className="mt-12 space-x-4">
                <Link href="payment">
                    <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-md">
                        <h1 className="font-bold">Voltar</h1>
                    </button>
                </Link>
                <Link href="payment3">
                    <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-md">
                        <h1 className="font-bold">Avançar</h1>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ConfirmaEndereco;

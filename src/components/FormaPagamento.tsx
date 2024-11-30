import Link from 'next/link'
import { useState } from 'react'

const FormaPagamento: React.FC = () => {

    // Estado para saber qual pagamento está selecionado
    const [selecionado, setSelecionado] = useState<string | null>(null);

    // Função para selecionar o pagamento
    const handleSelecionar = (tipo: string) => {
        // Se o tipo já estiver selecionado, desmarca. Caso contrário, marca.
        setSelecionado(selecionado === tipo ? null : tipo);
    };

    return (
        <div className="flex flex-col items-center mt-16">
            <div className="mb-4">
                <h1 className="text-black font-bold">CONFIRME O PAGAMENTO</h1>
            </div>
            <div className="space-y-2">
                {/* Componente de PIX */}
                <div className="w-96 p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
                    {/* Título do PIX */}
                    <h1 className="text-lg font-bold text-black">PIX</h1>
                    {/* Subtítulo */}
                    <p className="text-gray-600 mt-2">Valor</p>
                    {/* Botão de Seleção */}
                    <div className="flex justify-end mt-4">
                        <button
                            className={`px-4 py-2 rounded-md font-bold ${
                                selecionado === 'pix'
                                    ? 'bg-green-500 text-white'
                                    : 'bg-gray-300 hover:bg-gray-400 text-black'
                            }`}
                            onClick={() => handleSelecionar('pix')}
                        >
                            {selecionado === 'pix' ? 'Selecionado' : 'Selecionar'}
                        </button>
                    </div>
                </div>

                {/* Componente de BOLETO */}
                <div className="w-96 p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
                    {/* Título do BOLETO */}
                    <h1 className="text-lg font-bold text-black">BOLETO</h1>
                    {/* Subtítulo */}
                    <p className="text-gray-600 mt-2">Valor</p>
                    {/* Botão de Seleção */}
                    <div className="flex justify-end mt-4">
                        <button
                            className={`px-4 py-2 rounded-md font-bold ${
                                selecionado === 'boleto'
                                    ? 'bg-green-500 text-white'
                                    : 'bg-gray-300 hover:bg-gray-400 text-black'
                            }`}
                            onClick={() => handleSelecionar('boleto')}
                        >
                            {selecionado === 'boleto' ? 'Selecionado' : 'Selecionar'}
                        </button>
                    </div>
                </div>

                {/* Componente de CARTÃO */}
                <div className="w-96 p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
                    {/* Título do CARTÃO */}
                    <h1 className="text-lg font-bold text-black">CARTÃO</h1>
                    {/* Subtítulo */}
                    <p className="text-gray-600 mt-2">Valor - até 10x s/ juros:</p>
                    {/* Botão de Seleção */}
                    <div className="flex justify-end mt-4">
                        <button
                            className={`px-4 py-2 rounded-md font-bold ${
                                selecionado === 'cartao'
                                    ? 'bg-green-500 text-white'
                                    : 'bg-gray-300 hover:bg-gray-400 text-black'
                            }`}
                            onClick={() => handleSelecionar('cartao')}
                        >
                            {selecionado === 'cartao' ? 'Selecionado' : 'Selecionar'}
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-12 space-x-4">
                <Link href="payment3">
                    <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-md">
                        <h1 className="font-bold">Voltar</h1>
                    </button>
                </Link>
                <Link href="search">
                    <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-md">
                        <h1 className="font-bold">Finalizar compra</h1>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FormaPagamento;

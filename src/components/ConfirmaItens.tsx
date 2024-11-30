import React, { useState } from 'react';
import Link from 'next/link'

const ConfirmaItens: React.FC = () => {
    const [quantidades, setQuantidades] = useState([1, 2, 3]);

    // Função para alterar a quantidade
    const alterarQuantidade = (index: number, delta: number) => {
        setQuantidades((prev) => {
            const novaQuantidade = [...prev];
            novaQuantidade[index] = Math.max(0, novaQuantidade[index] + delta); // Evita números negativos
            return novaQuantidade;
        });
    };

    // Cálculo do valor total
    const calcularValorTotal = () => {
        return quantidades.reduce((total, quantidade) => total + quantidade * 10, 0);
    };

    return (
        <div className="flex flex-col items-center mt-16">
            <div className="mb-4">
                <h1 className="text-black font-bold">CONFIRME OS ITENS</h1>
            </div>
            <div className="flex flex-col items-center mt-8">
                <table className="table-auto border-collapse border border-gray-300 text-black">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">Nome do Produto</th>
                            <th className="border border-gray-300 px-4 py-2">Quantidade</th>
                            <th className="border border-gray-300 px-4 py-2">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {["Produto 1", "Produto 2", "Produto 3"].map((produto, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 px-4 py-2 text-center">{produto}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    <div className="flex justify-center items-center gap-2">
                                        <button
                                            className="bg-red-500 hover:bg-red-600 text-white px-2 rounded"
                                            onClick={() => alterarQuantidade(index, -1)}
                                        >
                                            -
                                        </button>
                                        <span>{quantidades[index]}</span>
                                        <button
                                            className="bg-green-500 hover:bg-green-600 text-white px-2 rounded"
                                            onClick={() => alterarQuantidade(index, 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    R$ {(quantidades[index] * 10).toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Exibição do Valor Total */}
                <div className="mt-4 text-lg font-bold text-black">
                    Valor Total: R$ {calcularValorTotal().toFixed(2)}
                </div>
            </div>
            <div className="mt-12">
                <Link href="payment2">
                    <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-md">
                        <h1 className="font-bold">Avançar</h1>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ConfirmaItens;

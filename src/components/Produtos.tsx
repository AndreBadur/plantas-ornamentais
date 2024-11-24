import React, { useState } from "react";

// Definindo o tipo de produto
interface Produto {
    id: number;
    nome: string;
    categoria: string;
    valor: number;
    criacao: string;
    ativo: boolean;
}

const Produtos: React.FC = () => {
    // Estado para armazenar os produtos
    const [produtos, setProdutos] = useState<Produto[]>([
        { id: 1, nome: "Produto A", categoria: "Categoria 1", valor: 10, criacao: "2024-01-01", ativo: true },
        { id: 2, nome: "Produto B", categoria: "Categoria 2", valor: 20, criacao: "2024-02-01", ativo: false },
    ]);

    // Função para alternar o status do ativo (True / False)
    const toggleAtivo = (id: number) => {
        setProdutos((prevProdutos) =>
            prevProdutos.map((produto) =>
                produto.id === id ? { ...produto, ativo: !produto.ativo } : produto
            )
        );
    };

    // Função para excluir o produto
    const excluirProduto = (id: number) => {
        setProdutos((prevProdutos) => prevProdutos.filter((produto) => produto.id !== id));
    };

    // Função para adicionar um novo produto
    const adicionarProduto = () => {
        const novoProduto: Produto = {
            id: produtos.length + 1, // Gerando um novo ID (simples, para fins de demonstração)
            nome: `Produto ${produtos.length + 1}`,
            categoria: "Categoria X",
            valor: Math.floor(Math.random() * 100) + 10, // Valor aleatório entre 10 e 100
            criacao: new Date().toLocaleDateString(),
            ativo: true,
        };
        setProdutos((prevProdutos) => [...prevProdutos, novoProduto]);
    };

    return (
        <div className="p-6 min-h-screen">
            <h1 className="ml-6 mt-4 mb-10 text-black font-bold text-3xl">Produtos</h1>
            <button
                className="bg-green-500 text-white px-4 py-2 rounded-md mb-4"
                onClick={adicionarProduto}
            >
                Adicionar Produto
            </button>
            <table className="text-black min-w-full table-auto">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">Nome</th>
                        <th className="border px-4 py-2">Categoria</th>
                        <th className="border px-4 py-2">Valor</th>
                        <th className="border px-4 py-2">Criação</th>
                        <th className="border px-4 py-2">Ativo</th>
                        <th className="border px-4 py-2">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                        <tr key={produto.id}>
                            <td className="border px-4 py-2">{produto.id}</td>
                            <td className="border px-4 py-2">{produto.nome}</td>
                            <td className="border px-4 py-2">{produto.categoria}</td>
                            <td className="border px-4 py-2">R${produto.valor}</td>
                            <td className="border px-4 py-2">{produto.criacao}</td>
                            <td className="border px-4 py-2">
                                <button
                                    className={`px-4 py-2 rounded-md ${
                                        produto.ativo ? "bg-green-500" : "bg-red-500"
                                    } text-white`}
                                    onClick={() => toggleAtivo(produto.id)}
                                >
                                    {produto.ativo ? "Ativo" : "Inativo"}
                                </button>
                            </td>
                            <td className="border px-4 py-2 flex space-x-2">
                                <button
                                    className="flex items-center justify-center bg-red-500 p-2 rounded-md"
                                    onClick={() => excluirProduto(produto.id)}
                                >
                                    <img src="/imagens/lixeira.png" alt="Excluir" className="w-5 h-5" />
                                </button>
                                <button
                                    className="flex items-center justify-center bg-blue-500 p-2 rounded-md"
                                >
                                    <img src="/imagens/lapis.png" alt="Editar" className="w-5 h-5" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Produtos;

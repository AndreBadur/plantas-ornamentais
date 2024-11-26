import Link from "next/link";
import React, { FormEvent, useEffect, useState } from "react";

interface Products {
    id: number;
    title: string;
    price: number;
    description: string;
    cost: number;
    status: number;
  }

const Produtos: React.FC = () => {
  //CRIAÇÃO DAS VARIAVEIS RESPONSAVEIS POR MANIPULAR ESTADOS E GUARDAR INFORMAÇÕES
  const [products, setProducts] = useState<Products[]>([]);
  const [error, setError] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const formEvent = async (e: FormEvent) => {
    e.preventDefault;
  };

  useEffect(() => {
    // Remover o scroll horizontal
    document.body.style.overflowX = "hidden";

    // Buscar Produtos no BD
    fetchProducts();
  }, []);

    // Função para alternar o status do ativo (True / False)
    const toggleAtivo = (id: number) => {
        setProducts((prevProdutos) =>
            prevProdutos.map((produto) =>
                produto.id === id ? { ...produto, ativo: !produto.status } : produto
            )
        );
    };

    const fetchProducts = async () => {
        try {
          const response = await fetch("/api/products");
    
          if (!response.ok) throw new Error("Failed to fetch: look at index.tsx");
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
    

    // Função para excluir o produto
    async function deleteProduct(receivedId: number) {
        /* INFORMATION: 
        Something really important in this function,
        it's the fact the Method: DELETE do not allow body: content as POST and GET 
        */
    
        formEvent;
        try {
          const response = await fetch("/api/products?receivedId=" + receivedId, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (response.ok) {
            const deletedProduct = await response.json();
            console.log(deletedProduct);
            fetchProducts();
            setError("");
          } else {
            throw new Error("Failed to delete product");
          }
        } catch (error) {
          console.error("Error deleting product - catch:", error);
          setError("failed to delete product");
        }
      }


    return (
        <div className="p-6 min-h-screen">
            <h1 className="ml-6 mt-4 mb-10 text-black font-bold text-3xl">Produtos</h1>
           <Link href={''}>
           <a href="/createProduct">
           <button
                className="bg-green-500 text-white px-4 py-2 rounded-md mb-4"
            >
                Adicionar Produto
            </button>
           </a>
           </Link> 
            <table className="text-black min-w-full table-auto">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">Nome</th>
                        <th className="border px-4 py-2">Categoria</th>
                        <th className="border px-4 py-2">Valor</th>
                        <th className="border px-4 py-2">Custo</th>
                        <th className="border px-4 py-2">Ativo</th>
                        <th className="border px-4 py-2">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((produto) => (
                        <tr key={produto.id}>
                            <td className="border px-4 py-2">{produto.id}</td>
                            <td className="border px-4 py-2">{produto.title}</td>
                            <td className="border px-4 py-2">{produto.description}</td>
                            <td className="border px-4 py-2">R${produto.price}</td>
                            <td className="border px-4 py-2">R${produto.cost}</td>
                            <td className="border px-4 py-2">
                                <button
                                    className={`px-4 py-2 rounded-md ${
                                        produto.status ? "bg-green-500" : "bg-red-500"
                                    } text-white`}
                                    onClick={() => toggleAtivo(produto.id)}
                                >
                                    {produto.status ? "Ativo" : "Inativo"}
                                </button>
                            </td>
                            <td className="border px-4 py-2 flex space-x-2">
                                <button
                                    className="flex items-center justify-center bg-red-500 p-2 rounded-md"
                                    onClick={() => deleteProduct(produto.id)}
                                >
                                    <img src="/imagens/lixeira.png" alt="Excluir" className="w-5 h-5" />
                                </button>
                                <a href="/updateProduct">
                                <button
                                    className="flex items-center justify-center bg-blue-500 p-2 rounded-md"
                                >
                                    <img src="/imagens/lapis.png" alt="Editar" className="w-5 h-5" />
                                </button>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Produtos;

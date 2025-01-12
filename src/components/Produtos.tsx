import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { FormEvent, useEffect, useState } from 'react'
import { fetchProducts } from './functions/fetch'
import ErrorDialog from '@/pages/errorpage'
import { BiPencil } from 'react-icons/bi'
import { MdDeleteForever, MdDeleteOutline } from 'react-icons/md'
import { FaDeleteLeft } from 'react-icons/fa6'
import { FcDeleteDatabase, FcDeleteRow } from 'react-icons/fc'
import { LuDelete } from 'react-icons/lu'
interface Products {
    id: number
    title: string
    price: number
    description: string
    cost: number
    inactive: number
}

export default function Produtos() {
    const [products, setProducts] = useState<Products[]>([])
    const router = useRouter()
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const handleCloseDialog = () => setIsDialogOpen(false);
    const [errorMessage] = useState("Something went wrong! You can't fetch products");
    const [loadFetch, setLoadFetch] = useState<number>(0);

    if (loadFetch === 0) {
        fetchProducts()
            .then((response) => {                
                setProducts(response)
                setLoadFetch(1)
            })
            .catch(() => {
                setIsDialogOpen(true);
            })
    }


    useEffect(() => {
        document.body.style.overflowX = 'hidden'
    }, [])

    async function deleteProduct(receivedId: number, e?: FormEvent) {
        e?.preventDefault()
        try {
            const response = await fetch(
                '/api/products?receivedId=' + receivedId,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
            if (response.ok) {
                await response.json()
                setLoadFetch(0)
            } else {
                throw new Error('Failed to delete product')
            }
        } catch (error) {
            console.error('Error deleting product - catch:', error)
        }
    }
    return (
        <div className="p-6 min-h-screen">
            <h1 className="ml-6 mt-4 mb-10 text-black font-bold text-3xl">
                Produtos
            </h1>

            <a href="createProduct">
                <button className="bg-green-500 text-white px-4 py-2 rounded-md mb-4">
                    Adicionar Produto
                </button>
            </a>

            <table className="text-black min-w-full table-auto">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">Nome</th>
                        <th className="border px-4 py-2">Categoria</th>
                        <th className="border px-4 py-2">Valor</th>
                        <th className="border px-4 py-2">Custo</th>
                        <th className="border px-4 py-2">Status</th>
                        <th className="border px-4 py-2">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((produto) => (
                        <tr key={produto.id}>
                            <td className="border px-4 py-2">
                                {produto.id}
                            </td>
                            <td className="border px-4 py-2">
                                {produto.title}
                            </td>
                            <td className="border px-4 py-2">
                                {produto.description}
                            </td>
                            <td className="border px-4 py-2">
                                R${produto.price}
                            </td>
                            <td className="border px-4 py-2">
                                R${produto.cost}
                            </td>
                            <td className="border px-4 py-2">
                                <button
                                    className={`px-4 py-2 rounded-md ${
                                        produto.inactive === 0
                                            ? 'bg-green-500'
                                            : 'bg-red-500'
                                    } text-white`}
                                >
                                    {produto.inactive == 0
                                        ? 'Ativo'
                                        : 'Inativo'}
                                </button>
                            </td>
                            <td className="border px-4 py-2 flex space-x-2 w-auto">                                
                                <button
                                    className="flex items-center justify-between bg-blue-500 p-2 rounded-md text-white"
                                    onClick={() =>
                                        router.push(
                                            'updateProduct?id=' + produto.id
                                        )
                                    }
                                >
                                    <BiPencil className='mr-2'/> Editar                                    
                                </button>
                                <button
                                    className="flex items-center justify-center bg-red-500 p-2 rounded-md text-white"
                                    onClick={() => deleteProduct(produto.id)}
                                >
                                   <MdDeleteOutline className='mr-2'/> Excluir                                   
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                        {isDialogOpen && (
                            <ErrorDialog errorMessage={errorMessage} onClose={handleCloseDialog} />
                        )}
                        </div>
        </div>
    )
}
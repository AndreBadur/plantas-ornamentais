import Link from 'next/link'
import { useRouter } from 'next/router'

import { FormEvent, useState } from 'react'

export default function EditarProduto() {    
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [price, setPrice] = useState<number>(0)
    const [cost, setCost] = useState<number>(0)
    const [mean_rating, setMean_rating] = useState<number>(0)
    const [image_1, setImage_1] = useState<string>('')
    const [image_2, setImage_2] = useState<string>('')
    const [image_3, setImage_3] = useState<string>('')
    const [image_4, setImage_4] = useState<string>('')
    const [image_5, setImage_5] = useState<string>('')
    const router = useRouter()
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        if (!title || !price) {            
            return console.error('Erro de entrada no formulário')
        }

        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    description,
                    price,
                    cost,
                    mean_rating,
                    image_1,
                    image_2,
                    image_3,
                    image_4,
                    image_5,
                }),
            })
            if (response.ok) {
                await response.json()                
                setTitle('')
                setDescription('')
                setPrice(0)
                setCost(0)
                setMean_rating(0)
                setImage_1('')
                setImage_2('')
                setImage_3('')
                setImage_4('')
                setImage_5('')
                alert('produto criado')
                router.push('admin')
            } else {
                throw new Error('Failed to add product')
            }
        } catch (error) {
            console.error('Error adding product - catch:', error)
        }
    }
    return (
        <div className="ml-10 mt-14 bg-white flex-col min-h-screen">
            <div className="flex">
                <h1 className="ml-6 mt-4 text-black font-bold text-3xl">
                    Criar Produto
                </h1>
            </div>

            <div className="ml-6 mt-8 mr-6 flex flex-col space-y-6">
                <div className="flex flex-col space-y-2">
                    <label className="text-gray-600 font-medium">Título</label>
                    <input
                        type="text"
                        className="bg-transparent border border-gray-300 text-gray-700 placeholder-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
                        placeholder="Digite o título do produto"
                        id="title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <label className="text-gray-600 font-medium">
                        Descrição
                    </label>
                    <textarea
                        className="bg-transparent border border-gray-300 text-gray-700 placeholder-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
                        placeholder="Digite a descrição do produto"
                        id="description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="flex space-x-4">
                    <div className="flex flex-col space-y-2 w-1/2">
                        <label className="text-gray-600 font-medium">
                            Preço
                        </label>
                        <input
                            type="text"
                            className="bg-transparent border border-gray-300 text-gray-700 placeholder-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
                            placeholder="Digite o preço"
                            id="price"
                            onChange={(e) => setPrice(Number(e.target.value))}
                        />
                    </div>
                    <div className="flex flex-col space-y-2 w-1/2">
                        <label className="text-gray-600 font-medium">
                            Custo
                        </label>
                        <input
                            type="text"
                            className="bg-transparent border border-gray-300 text-gray-700 placeholder-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
                            placeholder="Digite o custo"
                            id="cost"
                            onChange={(e) => setCost(Number(e.target.value))}
                        />
                    </div>
                </div>

                <div className="flex flex-col space-y-2">
                    <label className="text-gray-600 font-medium">
                        Classificação Média
                    </label>
                    <input
                        type="text"
                        className="bg-transparent border border-gray-300 text-gray-700 placeholder-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
                        placeholder="Digite a classificação média"
                        id="mean_rating"
                        onChange={(e) => setMean_rating(Number(e.target.value))}
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <label className="text-gray-600 font-medium">
                        Imagens do Produto
                    </label>
                    <input
                        type="file"
                        className="bg-transparent border border-gray-300 text-gray-700 placeholder-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
                        onChange={(e) => setImage_1(e.target.value)}
                    />
                    <input
                        type="file"
                        className="bg-transparent border border-gray-300 text-gray-700 placeholder-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
                        onChange={(e) => setImage_2(e.target.value)}
                    />
                    <input
                        type="file"
                        className="bg-transparent border border-gray-300 text-gray-700 placeholder-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
                        onChange={(e) => setImage_3(e.target.value)}
                    />
                    <input
                        type="file"
                        className="bg-transparent border border-gray-300 text-gray-700 placeholder-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
                        onChange={(e) => setImage_4(e.target.value)}
                    />
                    <input
                        type="file"
                        className="bg-transparent border border-gray-300 text-gray-700 placeholder-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
                        onChange={(e) => setImage_5(e.target.value)}
                    />
                </div>

                <div className="mt-10 w-full flex justify-end space-x-4">
                    <Link href="admin">
                        <button className="w-40 h-12 rounded-md text-white font-semibold bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
                            Cancelar
                        </button>
                    </Link>
                    <button
                        className="w-72 h-12 rounded-md text-white font-semibold bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                        onClick={handleSubmit}
                    >
                        Criar Produto
                    </button>
                </div>
            </div>
        </div>
    )
}

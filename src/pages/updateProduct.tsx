import Anuncio from '@/components/Anuncio'
import SearchBar from '@/components/SearchBar'
import Link from 'next/link'
import { useParams, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { resolve } from 'path'
import { FormEvent, useEffect, useState } from 'react'

interface findUniqueProduct {
    id: number
    title: string
    description: string
    price: number
    cost: number
    mean_rating: number
    image_1: string
    image_2: string
    image_3: string
    image_4: string
    image_5: string
    inactive: number
}

export default function updateProduct() {
    const router = useRouter()
    let selectedId: string
    const [product, setProduct] = useState<findUniqueProduct>()
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [price, setPrice] = useState<number>(0)
    const [error, setError] = useState<string>('')
    const [cost, setCost] = useState<number>(0)
    const [mean_rating, setMean_rating] = useState<number>(0)
    const [inactive, setInactive] = useState<number>(0)
    const [image_1, setImage_1] = useState<any>(null)
    const [image_2, setImage_2] = useState<any>(null)
    const [image_3, setImage_3] = useState<any>(null)
    const [image_4, setImage_4] = useState<any>(null)
    const [image_5, setImage_5] = useState<any>(null)

    const [reqId, setReqId] = useState<any>(undefined)
    const formEvent = async (e: FormEvent) => {
        e.preventDefault
    }

    useEffect(() => {
        selectedId = String(router.query.id)
        if (selectedId != 'undefined') {
            fetchProducts(selectedId)
            setReqId(selectedId)
        }
    }, [router.query.id])

    const fetchProducts = async (id: string) => {
        try {
            const response = await fetch('/api/products?id=' + id)
            if (!response.ok)
                throw new Error('Failed to fetch: look at index.tsx')
            const data = await response.json()
            setProduct(data)
            setTitle(data.title)
            setDescription(data.description)
            setPrice(data.price)
            setCost(data.cost)
            setMean_rating(data.mean_rating)
            setInactive(data.inactive)
        } catch (error) {
            console.error('Error fetching products:', error)
        }
    }

    const handleSubmit = async () => {
        formEvent

        console.log('no btn')
        if (!title || !price) {
            console.log('Erro de entrada no formulário')
            return
        }
        try {
            console.log('/api/products?id=' + reqId)
            const response = await fetch('/api/products?id=' + reqId, {
                method: 'PUT',
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
                    inactive,
                }),
            })
            if (response.ok) {
                console.log('response')
                const newProduct = await response.json()
                console.log(newProduct)
                alert('produto atualizado')
                router.push('admin')
            } else {
                throw new Error('Failed to update product')
            }
        } catch (error) {
            console.error('Error updating product - catch:', error)
            setError('failed to update product')
        }
    }

    return (
        <div className="bg-gray-100 w-screen h-screen">
            <div className="h-screen flex justify-center items-center">
                <div className="w-[70vw] h-auto bg-white border border-gray-300 rounded-lg shadow-xl p-8">
                    <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">
                        Atualizar Produto {product?.id}
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                            <label className="text-gray-600 font-medium">
                                Título
                            </label>
                            <input
                                className="border border-gray-300 rounded-md p-3 "
                                type="text"
                                defaultValue={product?.title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-600 font-medium">
                                Preço
                            </label>
                            <input
                                className="border border-gray-300 rounded-md p-3 "
                                type="number"
                                defaultValue={product?.price}
                                onChange={(e) =>
                                    setPrice(Number(e.target.value))
                                }
                            />
                        </div>
                        <div className="col-span-2 flex flex-col">
                            <label className="text-gray-600 font-medium">
                                Descrição
                            </label>
                            <textarea
                                className="border border-gray-300 rounded-md p-3  resize-none h-24"
                                defaultValue={product?.description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-600 font-medium">
                                Custo
                            </label>
                            <input
                                className="border border-gray-300 rounded-md p-3 "
                                type="number"
                                defaultValue={product?.cost}
                                onChange={(e) =>
                                    setCost(Number(e.target.value))
                                }
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-600 font-medium">
                                Classificação Média
                            </label>
                            <input
                                className="border border-gray-300 rounded-md p-3 "
                                type="number"
                                defaultValue={product?.mean_rating}
                                onChange={(e) =>
                                    setMean_rating(Number(e.target.value))
                                }
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-600 font-medium">
                                Status (Ativo = 0 | Inativo = 1)
                            </label>
                            <input
                                className="border border-gray-300 rounded-md p-3"
                                type="number"
                                defaultValue={product?.inactive}
                                onChange={(e) =>
                                    setInactive(Number(e.target.value))
                                }
                            />
                        </div>
                    </div>
                    <div className="flex flex-col mt-4">
                        <label className="text-gray-600 font-medium mb-2">
                            Imagens do Produto
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                            {[1, 2, 3, 4, 5].map((num) => (
                                <input
                                    key={num}
                                    className="border border-gray-300 rounded-md p-2"
                                    type="file"
                                    onChange={(e) => {
                                        const setImage = eval(`setImage_${num}`)
                                        setImage(e.target.value)
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="mt-10 flex justify-end space-x-4">
                        <Link href="/admin">
                            <button
                                type="button"
                                className="bg-gray-200 text-gray-700 font-medium py-2 px-6 rounded-md hover:bg-gray-300"
                            >
                                Cancelar
                            </button>
                        </Link>
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="bg-green-600 text-white font-medium py-2 px-6 rounded-md hover:bg-green-700"
                        >
                            Atualizar Produto
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

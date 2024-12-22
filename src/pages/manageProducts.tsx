import Button from '@/components/BotaoConfirma'
import { fetchProducts } from '@/components/functions/fetch'
import { SubTitle } from '@/components/TextoAuth'
import Link from 'next/link'
import { FormEvent, useEffect, useState, useSyncExternalStore } from 'react'
import { SlPencil, SlTrash } from 'react-icons/sl'

interface Products {
    id: number
    title: string
    price: number
    description: string
    cost: number
    status: number
}

export default function manageProducts() {  
    const [error, setError] = useState<string>('')
    const [id, setId] = useState<number>(0)
    const formEvent = async (e: FormEvent) => {
        e.preventDefault
    } 
    const [products,setProducts] = useState<Products[]>([])

    if (products.length == 0) {
        fetchProducts()
            .then((response) => {                
                setProducts(response)
            })
            .catch((error) => {
                setError(error)
            })
    }

    useEffect(() => {
        
    },[error])

    async function deleteProduct(receivedId: number) {        
        formEvent
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
                const deletedProduct = await response.json()
                console.log(deletedProduct)
                fetchProducts()
                setError('')
            } else {
                throw new Error('Failed to delete product')
            }
        } catch (error) {
            console.error('Error deleting product - catch:', error)
            setError('failed to delete product')
        }
    }

    async function updateProduct(receivedId: number) {}
    async function createProduct() {}

    return (
        <div className="flex items-center ">
            <table className="table-auto border-separate border border-slate-400 w-full">
                <thead>
                    <tr className="border border-b-[1px] bg-black text-white w-auto ">
                        <th className="border border-slate-300">
                            <SubTitle text="ID"></SubTitle>
                        </th>
                        <th className="border-x">
                            <SubTitle text="TITLE"></SubTitle>
                        </th>
                        <th className="border-x">
                            <SubTitle text="DESCRIPTION"></SubTitle>
                        </th>
                        <th className="border-x">
                            <SubTitle text="PRICE"></SubTitle>
                        </th>
                        <th className="border-x">
                            <SubTitle text="COST"></SubTitle>
                        </th>
                        <th className="border-x">
                            <SubTitle text="STATUS"></SubTitle>
                        </th>
                        <th className="col-span-2 bg-green-600 font-white font-black rounded-sm">
                            <button onClick={() => createProduct()}>
                                Create Product
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr
                            key={product.id}
                            className="text-left border border-b-[1px]"
                        >
                            <th className="border border-slate-300">
                                {product.id}
                            </th>
                            <th className="border border-slate-300">
                                {product.title}
                            </th>
                            <th className="border border-slate-300">
                                {product.description}
                            </th>
                            <th className="border border-slate-300">
                                {product.price}
                            </th>
                            <th className="border border-slate-300">
                                {product.cost}
                            </th>
                            <th className="border border-slate-300">
                                {product.status}
                            </th>
                            <th className="col-span-1">
                                <button
                                    onClick={() => deleteProduct(product.id)}
                                >
                                    <SlTrash />
                                </button>
                            </th>
                            <th>
                                <Link
                                    href={`updateProduct?id=${product.id}`}
                                    onClick={() => console.log('escrito')}
                                >
                                    {' '}
                                    <SlPencil />
                                </Link>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export function Campo(props: String) {
    return <div className="text-black "></div>
}

import { useEffect, useState } from 'react'
import Menu from '@/components/Menu'
import Carrossel from '@/components/Carrossel' // Importando o componente carrossel
import Categorias from '@/components/macrocomponent/Categorias'
import ContatoWA from '@/components/ContatoWA'
import Anuncio from '@/components/Anuncio'

interface Products {
    id: number
    title: string
    price: number
    description: string
    cost: number
}

const Home: React.FC = () => {
    const [products, setProducts] = useState<Products[]>([])

    useEffect(() => {
        // Remover o scroll horizontal
        document.body.style.overflowX = 'hidden'

        // Buscar Produtos no BD
        fetchProducts()
    }, [])

    // Função de Busca que obtem o retorno da API
    const fetchProducts = async () => {
        try {
            const response = await fetch('/api/products')

            if (!response.ok)
                throw new Error('Failed to fetch: look at index.tsx')
            const data = await response.json()
            setProducts(data)
        } catch (error) {
            console.error('Error fetching products:', error)
        }
    }

    return (
        <div className="flex flex-col bg-white min-h-screen">
            <Menu />
            <div>
                <img
                    src="/imagens/homebg.png"
                    alt="Home Background"
                    className="w-screen h-72 object-cover mt-14"
                />
            </div>

            {/* Inserindo o carrossel aqui */}
            <div className="bg-green-100 mb-6">
                <Carrossel /> {/* Aqui está o carrossel */}
            </div>
            <div className="mt-2 mb-6 border-t border-gray-300 w-2/3 mx-auto my-4 justify-center"></div>
            <div>
                <Categorias />
            </div>
            <div className="mt-6 border-t border-gray-300 w-2/3 mx-auto my-4 justify-center"></div>
            <div className="mt-6 flex text-black font-bold justify-center">
                <h1>PRODUTOS DESTAQUES</h1>
            </div>
            {/* Ajuste de espaço entre os anúncios com flex-wrap */}
            <div className="flex flex-wrap justify-center gap-6 w-full mt-6 mb-32 space-x-36">
                {products.map((product) => (
                    <li key={product.id}>
                        <Anuncio
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            image="/imagens/vaso.png"
                        >
                            {' '}
                        </Anuncio>
                    </li>
                ))}
            </div>
            <ContatoWA />
        </div>
    )
}

export default Home

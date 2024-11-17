export default function Filtro() {
    return (
        <div className="mt-20 ml-5 w-44 h-80 border-2 border-gray-300 rounded-lg p-4 overflow-hidden">
            <h1 className="flex text-black justify-center">FILTROS</h1>
            <div className="border-t border-gray-300 w-auto mx-auto my-4 justify-center"></div>
                <div className="mt-6 space-y-2">
                <input 
                    type="text" 
                    className="bg-transparent border border-gray-500 text-gray-500 
                    placeholder-gray-500 rounded-md p-2 focus:outline-none w-36 h-8"
                    placeholder="Preço"
                />
                <input 
                    type="text" 
                    className="bg-transparent border border-gray-500 text-gray-500 
                    placeholder-gray-500 rounded-md p-2 focus:outline-none w-36 h-8"
                    placeholder="Categoria"
                />
                <input 
                    type="text" 
                    className="bg-transparent border border-gray-500 text-gray-500 
                    placeholder-gray-500 rounded-md p-2 focus:outline-none w-36 h-8"
                    placeholder="Cor"
                />
                <input 
                    type="text" 
                    className="bg-transparent border border-gray-500 text-gray-500 
                    placeholder-gray-500 rounded-md p-2 focus:outline-none w-36 h-8"
                    placeholder="Bioma"
                />
            </div>
            <a className="flex w-6 h-6 mt-12 ml-14" href="">
                <img src="/imagens/filtro.png" alt="Buscar" />
            </a>
        </div>
    )
}
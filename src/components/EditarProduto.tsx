const EditarProduto: React.FC = () => {
    return (
        <div className="ml-60 mt-14 bg-white flex-col min-h-screen"> {/* items-center justify-center */}
            <div className="flex">
            <h1 className="ml-6 mt-4 text-black font-bold text-3xl">Editar produto</h1>
            <button
                    className="mt-4 ml-96 bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600 focus:outline-none"
                    onClick={() => alert("Produto salvo!")}
                >
                    Salvar
            </button>
            </div>
            <div className="ml-6 mt-5 mr-6 flex items-center space-x-2">
                <input 
                    type="text" 
                    className="bg-transparent border border-black text-black 
                    placeholder-gray rounded-md p-2 focus:outline-none w-96 h-8"
                    placeholder="Nome popular"
                />
                <input 
                    type="text" 
                    className="bg-transparent border border-black text-black 
                    placeholder-gray rounded-md p-2 focus:outline-none w-96 h-8"
                    placeholder="Nome científico"
                />
            </div>
            <div className="ml-6 mt-5 mr-6 flex items-center space-x-2">
            <input 
                    type="text" 
                    className="bg-transparent border border-black text-black 
                    placeholder-gray rounded-md p-2 focus:outline-none w-96 h-8"
                    placeholder="Categoria"
                />
                <input 
                    type="text" 
                    className="bg-transparent border border-black text-black 
                    placeholder-gray rounded-md p-2 focus:outline-none w-96 h-8"
                    placeholder="Bioma"
                />
            </div>
            <div className="ml-6 mt-5 mr-6 flex items-center space-x-2">
            <input 
                    type="text" 
                    className="bg-transparent border border-black text-black 
                    placeholder-gray rounded-md p-2 focus:outline-none w-96 h-8"
                    placeholder="Nível de cuidado"
                />
                <input 
                    type="text" 
                    className="bg-transparent border border-black text-black 
                    placeholder-gray rounded-md p-2 focus:outline-none w-96 h-8"
                    placeholder="Luminosidade necessária"
                />
            </div>
            <div className="ml-6 mt-5 mr-6 flex items-center space-x-2">
            <input 
                    type="text" 
                    className="bg-transparent border border-black text-black 
                    placeholder-gray rounded-md p-2 focus:outline-none w-96 h-8"
                    placeholder="Ambiente"
                />
                <input 
                    type="text" 
                    className="bg-transparent border border-black text-black 
                    placeholder-gray rounded-md p-2 focus:outline-none w-96 h-8"
                    placeholder="Rega"
                />
                <input 
                    type="text" 
                    className="bg-transparent border border-black text-black 
                    placeholder-gray rounded-md p-2 focus:outline-none w-96 h-8"
                    placeholder="Preço"
                />
            </div>
            <div className="ml-6 mt-5 mr-6 flex items-center space-x-2">
            <input 
                    type="text" 
                    className="bg-transparent border border-black text-black 
                    placeholder-gray rounded-md p-2 focus:outline-none w-96 h-8"
                    placeholder="Tag"
                />
                <input 
                    type="text" 
                    className="bg-transparent border border-black text-black 
                    placeholder-gray rounded-md p-2 focus:outline-none w-96 h-8"
                    placeholder="Quantidade"
                />
            </div>
            <div className="ml-6 mt-5 mr-6 flex items-center space-x-2">
                <input 
                    type="text" 
                    className="bg-transparent border border-black text-black 
                    placeholder-gray rounded-md p-2 focus:outline-none w-96 h-40"
                    placeholder="Descrição"
                />
                <input 
                    type="image" 
                    className="bg-transparent border border-black text-black 
                    placeholder-gray rounded-md p-2 focus:outline-none w-40 h-40"
                    placeholder="Imagem"
                />
            </div>
        </div>
    );
};

export default EditarProduto;

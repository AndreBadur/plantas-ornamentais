const Tags: React.FC = () => {
    return (
        <div className="flex-col min-h-screen">
            {' '}
            {/* items-center justify-center */}
            <h1 className="ml-6 mt-4 text-black font-bold text-3xl">Tags</h1>
            <div className="ml-6 mt-5 flex items-center space-x-2">
                <input
                    type="text"
                    className="bg-transparent border border-black text-black 
                    placeholder-gray rounded-md p-2 focus:outline-none w-96 h-8"
                    placeholder="Criar tag"
                />
                <button
                    className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600 focus:outline-none"
                    onClick={() => alert('Tag criada!')}
                >
                    Criar
                </button>
            </div>
            <h1 className="ml-6 mt-10 text-black font-bold text-3xl">
                Existentes
            </h1>
            {/* COLOCAR TAGS AQUI */}
        </div>
    )
}

export default Tags

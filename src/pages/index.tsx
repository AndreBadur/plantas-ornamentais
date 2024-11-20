import { useEffect } from 'react';
import Menu from "@/components/Menu";
import Carrossel from "@/components/Carrossel"; // Importando o componente carrossel
import Categorias from "@/components/macrocomponent/Categorias";
import ContatoWA from "@/components/ContatoWA"; 
import Anuncio from "@/components/Anuncio";

const Home: React.FC = () => {
    useEffect(() => {
        // Remover o scroll horizontal
        document.body.style.overflowX = 'hidden';
    }, []);

    return (
        <div className="flex flex-col bg-white min-h-screen">
            <Menu />
            <div>
                <img src="/imagens/homebg.jpg" alt="Home Background" className="w-screen h-72 object-cover" />
            </div>

            {/* Inserindo o carrossel aqui */}
            <div className="bg-green-100 mb-6">
                <Carrossel /> {/* Aqui está o carrossel */}
            </div>
            <div>
                <Categorias />
            </div>
            <div className="mt-10 border-t border-gray-300 w-2/3 mx-auto my-4 justify-center"></div>
            <div className="mt-6 flex text-black font-bold justify-center">
                <h1>PRODUTOS DESTAQUES</h1>
            </div>
            {/* Ajuste de espaço entre os anúncios com flex-wrap */}
            <div className="flex flex-wrap justify-center gap-6 w-full mt-6 mb-32 space-x-36">
                <Anuncio />
                <Anuncio />
                <Anuncio />
            </div>
            <ContatoWA />
        </div>
    );
};

export default Home;

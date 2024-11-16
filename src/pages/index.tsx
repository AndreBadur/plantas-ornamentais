import Carrossel from "@/components/Carrossel"; // Importando o componente carrossel
import Categorias from "@/components/macrocomponent/Categorias";
import Menu from "@/components/Menu";
import ContatoWA from "@/components/ContatoWA"; 
import Anuncio from "@/components/Anuncio";
import { useEffect } from 'react';

const Home: React.FC = () => {
    useEffect(() => {
        // Remover o scroll horizontal
        document.body.style.overflowX = 'hidden';
    }, []);

    return (
        <div className="flex flex-col bg-white"> 
            <div>
                <Menu />
            </div>
            <div>
                <img src="/imagens/homebg.jpg" alt="Home Background" className="w-screen h-auto object-cover" />
            </div>
            
            {/* Inserindo o carrossel aqui */}
            <div className="bg-green-100 mb-6">
                <Carrossel /> {/* Aqui está o carrossel */}
            </div>

            <div>
                <Categorias />
            </div>

            <br />
            <Anuncio />
            <ContatoWA />
        </div>
    );
}

export default Home;

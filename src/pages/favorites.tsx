import { useEffect } from 'react';
import Menu from "@/components/Menu";
import ContatoWA from "@/components/ContatoWA"; 
import Filtro from "@/components/Filtro"; 
import Anuncio from "@/components/Anuncio";

const Favorites: React.FC = () => {
    useEffect(() => {
        // Remover o scroll horizontal
        document.body.style.overflowX = 'hidden';
    }, []);

    return (
        <div className="flex flex-col bg-white min-h-screen">
            <Menu/>
            <div className="flex">
                <div className="fixed ml-6">
                    <Filtro/>
                </div>
                <div className="flex ml-80 mt-20 space-x-20">
                    <Anuncio/>
                    <Anuncio/>
                    <Anuncio/>
                </div>
                </div>
                <div className="flex ml-80 mt-20 space-x-20">
                    <Anuncio/>
                    <Anuncio/>
                    <Anuncio/>
                </div>
            <ContatoWA/>
        </div>
    );
};

export default Favorites;
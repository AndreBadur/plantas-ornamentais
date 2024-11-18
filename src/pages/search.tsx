import { useEffect } from 'react';
import Menu from "@/components/Menu";
import ContatoWA from "@/components/ContatoWA"; 
import Filtro from "@/components/Filtro"; 
import Anuncio from "@/components/Anuncio";

const Search: React.FC = () => {
    useEffect(() => {
        // Remover o scroll horizontal
        document.body.style.overflowX = 'hidden';
    }, []);

    return (
        <div className="flex flex-col bg-white min-h-screen">
            <Menu />
            <div className="flex">
                <div className="fixed">
                    <Filtro/>
                </div>
                <div className="flex ml-60 mt-20 space-x-16">
                    <Anuncio/>
                    <Anuncio/>
                    <Anuncio/>
                </div>
            </div>
            <div className="mt-10 ml-64 border-t border-gray-300 w-4/6 mx-auto my-4"></div>
            <div className="flex ml-60 mt-6 space-x-16">
                <Anuncio/>
                <Anuncio/>
                <Anuncio/>
            </div>
            <div className="mt-10 ml-64 border-t border-gray-300 w-4/6 mx-auto my-4"></div>
            <div className="flex ml-60 mt-6 space-x-16">
                <Anuncio/>
                <Anuncio/>
                <Anuncio/>
            </div>
            <ContatoWA />
        </div>
    );
};

export default Search;
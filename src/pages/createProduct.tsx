import React, { useState, useEffect } from "react";
import Menu from "@/components/Menu";
import MenuAdmin from "@/components/MenuAdmin";
import Dashboard from "@/components/Dashboard";
import Produtos from "@/components/Produtos";
import Categorias from "@/components/Categorias";
import Tags from "@/components/Tags";
import CriarProduto from "@/components/CriarProduto";

const createProduct: React.FC = () => {
    const [selectedComponent, setSelectedComponent] = useState<string>("dashboard");

    useEffect(() => {
        // Remover o scroll horizontal
        document.body.style.overflowX = "hidden";
    }, []);

    // Função para renderizar o componente selecionado
    const renderComponent = () => {
        switch (selectedComponent) {
            case "dashboard":
                return <Dashboard/>;
            case "produtos":
                return <Produtos/>;
            case "categorias":
                return <Categorias/>;
            case "tags":
                return <Tags/>;
            default:
                return <div>Componente não encontrado.</div>;
        }
    };

    return (
        <>
            <Menu/>
            <MenuAdmin onSelect={(value) => setSelectedComponent(value)}/>
            <CriarProduto/>
        </> 
    );
};

export default createProduct;
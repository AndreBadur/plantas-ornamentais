import React, { useState, useEffect } from "react";
import Menu from "@/components/Menu";
import MenuAdmin from "@/components/MenuAdmin";
import Dashboard from "@/components/Dashboard";
import Produtos from "@/components/Produtos";
import Categorias from "@/components/Categorias";
import Tags from "@/components/Tags";
import EditarProduto from "@/components/EditarProduto";
import CriarProduto from "@/components/CriarProduto";

const Admin: React.FC = () => {
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
            case "editar":
                return <EditarProduto/>
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
            <div className="ml-60 mt-14 bg-white">{renderComponent()}</div>
        </>
        /* PARA TESTAR CRIAR E EDITAR PRODUTOS
        <>
            <Menu/>
            <MenuAdmin onSelect={(value) => setSelectedComponent(value)}/>
            <CriarProduto/>
        </>*/
    );
};

export default Admin;

import React, { useState, useEffect } from 'react'
import Menu from '@/components/Menu'
import MenuAdmin from '@/components/MenuAdmin'
import Dashboard from '@/components/Dashboard'
import Produtos from '@/components/Produtos'
import Categorias from '@/components/Categorias'
import Tags from '@/components/Tags'
import EditarProduto from '@/components/EditarProduto'

export default function Admin() {
    const [selectedComponent, setSelectedComponent] =
        useState<string>('dashboard')

    useEffect(() => {
        document.body.style.overflowX = 'hidden'
    }, [])

    const renderComponent = () => {
        switch (selectedComponent) {
            case 'dashboard':
                return <Dashboard />
            case 'produtos':
                return <Produtos />
            case 'editar':
                return <EditarProduto />
            case 'categorias':
                return <Categorias />
            case 'tags':
                return <Tags />
            default:
                return <div>Componente não encontrado.</div>
        }
    }
    return (
        <>
            <Menu />
            <MenuAdmin onSelect={(value) => setSelectedComponent(value)} />
            <div className="ml-60 mt-14 bg-white">{renderComponent()}</div>
        </>
    )
}
import React, { useState, useEffect } from 'react'
import Menu from '@/components/Menu'
import MenuAdmin from '@/components/MenuAdmin'
import Dashboard from '@/components/Dashboard'
import Produtos from '@/components/Produtos'
import Categorias from '@/components/Categorias'
import Tags from '@/components/Tags'
import CriarProduto from '@/components/CriarProduto'

const createProduct: React.FC = () => {
    useEffect(() => {
        // Remover o scroll horizontal
        document.body.style.overflowX = 'hidden'
    }, [])

    return (
        <>
            <Menu />
            <CriarProduto />
        </>
    )
}

export default createProduct

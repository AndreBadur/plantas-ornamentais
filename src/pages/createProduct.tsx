import React, {useEffect} from 'react'
import Menu from '@/components/Menu'
import CriarProduto from '@/components/CriarProduto'

export default function createProduct() {
    useEffect(() => {
        document.body.style.overflowX = 'hidden'
    }, [])

    return (
        <>
            <Menu />
            <CriarProduto />
        </>
    )
}
import Image from 'next/image'

interface quadradoProps {
    nome: string
    caminho: string
}

export default function Quadrado(props: quadradoProps) {
    return (
        <div className="relative h-45 w-45">
            {/* Imagem no fundo */}
            <Image
                src={props.caminho}
                alt="Imagem"
                width={180}
                height={180}
                className="object-cover w-full h-full"
            />

            {/* Quadrado verde cobrindo 15% da parte inferior */}
            <div className="font-bold absolute bottom-0 left-0 right-0 bg-green-600 h-[20%] flex justify-center items-center opacity-75">
                <h1 className="text-white">{props.nome}</h1>
            </div>
        </div>
    )
}

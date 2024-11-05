import Image from "next/image"

interface bolaProps{
    nome: string
    caminho: string
}

export default function Bola(props:bolaProps){
    return(
        <div className={`
        rounded-full bg-blue-400 h-40 w-40
        flex justify-center items-center
        
        `}>
            <h1>{props.nome}</h1>
            <Image
                src={props.caminho}
                alt="Imagem"
                layout="fill" 
                objectFit="cover"               
            />
        </div>
    )
}
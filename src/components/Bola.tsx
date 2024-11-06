import Image from "next/image"

interface bolaProps{
    nome: string
    caminho: string
}

export default function Bola(props:bolaProps){
    return(
        <div className="rounded-full bg-blue-400 h-40 w-40
            flex flex-col justify-center items-center  ">
    
        <div className={`h-60 w-60 flex justify-center items-center`}>
            <Image className=""
                src={props.caminho}
                alt="Imagem"
                layout="responsive"
                width={180}
                height={180}              
            />
            </div>
            
            <h1>{props.nome}</h1>
        </div>
    )
}
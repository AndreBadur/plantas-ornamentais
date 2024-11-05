import Botao from "@/components/BotaoConfirma";
import CamposLogin from "@/components/CamposLogin";
import Image from "next/image";


export default function Login(){
    var x = 10 + 5
    return(
        <div className={`flex justify-between w-screen`}>
            
            <div className={`border border-black flex flex-col justify-center items-center h-screen w-[50%]`}>
                <h1>Esse é um login</h1>
                <CamposLogin></CamposLogin>
                <Botao></Botao>
                Agora eu vou digitar esse texto e ele esta em html
                {x}
            </div>
            <div className={`relative w-[50%]`}>
                <Image
                    src="/imagens/loginbg.jpg"
                    alt="Imagem"
                    layout="fill" 
                    objectFit="cover"               
                />
                 
            </div>
        </div>
        
    )
}
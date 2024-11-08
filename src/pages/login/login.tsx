import Botao from "@/components/BotaoConfirma";
import CamposLogin from "@/components/CamposLogin";
import {Titulo, SubTitulo, Opcao} from "@/components/TextoAuth";
import Image from "next/image";



export default function Login(){
    return(
        <div className={`flex justify-between w-[100%]`}>
            
            <section className={`flex justify-center items-center h-screen w-[100%]`}>
                <div className={`w-[35vw] h-[40vh]`}>
                    <div className={`h-20vh flex flex-col`}>
                        <Titulo text="Bem-vindo de volta!"></Titulo>
                        <SubTitulo text="Insira seus dados para acessar sua conta!"></SubTitulo>
                    </div>

                    <CamposLogin></CamposLogin>
                    <Opcao text="esqueceu a senha?"></Opcao>
                    <div className={`w-[100%]`}>
                        <Botao></Botao>
                    </div>
                    

                </div>
            </section>

            <div className={`relative w-[100%]`}>
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
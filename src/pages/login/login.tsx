import Button from "@/components/BotaoConfirma";
import {InputEmail, InputPassword} from "@/components/CamposLogin";
import {Title, SubTitle, Option} from "@/components/TextoAuth";
import Image from "next/image";



export default function Login(){
    return(
        <div className={`flex justify-between w-[100%]`}>
            
            <section className={`flex justify-center items-center h-screen w-[100%]`}>
                <div>
                    <div className={`h-20vh flex flex-col`}>
                        <Title text="Bem-vindo de volta!"></Title>
                        <SubTitle text="Insira seus dados para acessar sua conta!"></SubTitle>
                    </div>

                    <InputEmail></InputEmail>
                    <InputPassword></InputPassword>
                    <Option text="esqueceu a senha?"></Option>

                    <div className={`w-[100%] flex justify-center`}>
                        <Button text="Login"></Button>
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
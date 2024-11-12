import Button from "@/components/BotaoConfirma";
import {InputName, InputEmail, InputPassword, InputConfirmPassword} from "@/components/CamposLogin";
import {Title, SubTitle, Option} from "@/components/TextoAuth";
import Image from "next/image";



export default function Register(){
    return(
        <div className={`flex justify-between w-[100%]`}>
            
            <section className={`flex justify-center items-center h-screen w-[100%]`}>
                <div>
                    <div className={`h-20vh flex flex-col`}>
                        <Title text="Crie uma conta!"></Title>
                        <SubTitle text="Insira seus dados para criar sua conta!"></SubTitle>
                    </div>

                    <InputName></InputName>
                    <InputEmail></InputEmail>
                    <InputPassword></InputPassword>
                    <InputConfirmPassword></InputConfirmPassword>
                    <Option text="já possui conta?"></Option>

                    <div className={`w-[100%] flex justify-center`}>
                        <Button text="Criar conta"></Button>
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
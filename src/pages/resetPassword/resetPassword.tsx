import Button from "@/components/BotaoConfirma";
import {InputEmail} from "@/components/CamposLogin";
import {Title, SubTitle, Option} from "@/components/TextoAuth";
import Image from "next/image";



export default function Register(){
    return(
        <div className={`flex justify-between w-[100%]`}>
            
            <section className={`flex justify-center items-center h-screen w-[100%]`}>
                <div>
                    <div className={`h-20vh flex flex-col`}>
                        <Title text="Recuperação de senha"></Title>
                        <SubTitle text="Enviaremos um emial de recuperação de senha ao endereço informado"></SubTitle>
                    </div>

                    
                    <InputEmail></InputEmail>
                    
                    <Option text="não possuo conta"></Option>
                    <Option text="lembrei-me da senha!"></Option>

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
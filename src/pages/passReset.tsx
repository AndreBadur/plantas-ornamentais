import {Button} from "@/components/BotaoConfirma";
import {InputEmail, InputPassword, InputConfirmPassword,InputName} from "@/components/CamposLogin";
import {Title, SubTitle, Option, Line} from "@/components/TextoAuth";
import Image from "next/image";



export default function SignUp(){
    return(
        <div className={`flex justify-between w-[100%]`}>
            
            <section className={`flex justify-center items-center h-screen w-[100%]`}>
                <div>
                    <div className={`h-20vh flex flex-col leading-[1.4rem]`}>
                        <Title text="Recuperar conta"></Title>
                        <div className={`w-[22rem] mt-[-1.75rem]`}>
                            <SubTitle text="Enviaremos um email de recuperação de senha no email informado"></SubTitle>
                        </div>
                    </div>
                    <form action="" method="">
                        <div className="h-[14vh] flex flex-col justify-around">
                            <InputEmail></InputEmail>
                        </div>

                        <div className={`w-[100%] flex justify-center mt-[1.3rem]`}>
                            <Button text="Enviar"></Button>
                        </div>
                    </form>
                    
                    <Line></Line>
                    <div className={`flex justify-center text-[0.938rem] mt-[0.4rem]`}>
                        <p>Possui uma conta? Faça <a href="login" className="text-[#7B9A41]">login</a></p>
                    </div>
                </div>
            </section>

      <div className={`relative w-[100%]`}>
        <Image
          src="/imagens/loginbg2.png"
          alt="Imagem"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

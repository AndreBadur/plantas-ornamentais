import {Button} from "@/components/BotaoConfirma";
import {InputEmail, InputPassword, InputConfirmPassword,InputName} from "@/components/CamposLogin";
import {Title, SubTitle, Option, Line} from "@/components/TextoAuth";
import Image from "next/image";



export default function SignUp(){
    return(
        <div className={`flex justify-between w-[100%]`}>
            
            <section className={`flex justify-center items-center h-screen w-[100%]`}>
                <div>
                    <div className={`h-20vh flex flex-col`}>
                        <Title text="Cadastre-se agora!"></Title>
                        <SubTitle text="Insira seus dados para criar uma conta!"></SubTitle>
                    </div>
                    <form action="" method="GET">
                        <div className="h-[45vh] flex flex-col justify-around">
                            <InputName></InputName>
                            <InputEmail></InputEmail>
                            <InputPassword></InputPassword>
                            <InputConfirmPassword></InputConfirmPassword>
                        </div>

                        <div className={`w-[100%] flex justify-center mt-[1.3rem]`}>
                            <Button text="Cadastrar"></Button>
                        </div>
                    </form>  

          <Line></Line>
          <div className={`flex justify-center text-[0.938rem] mt-[0.4rem]`}>
            <p>
              Possui uma conta? Faça{" "}
              <a href="login" className="text-[#7B9A41]">
                login
              </a>
            </p>
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

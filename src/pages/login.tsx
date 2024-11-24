import Button from "@/components/BotaoConfirma";
import { InputEmail, InputPassword } from "@/components/CamposLogin";
import { Title, SubTitle, Option, Line } from "@/components/TextoAuth";
import Image from "next/image";

export default function Login() {
  return (
    <div className={`flex justify-between w-[100%]`}>
      <section className={`flex justify-center items-center h-screen w-[100%]`}>
        <div>
          <div className={`h-20vh flex flex-col`}>
            <Title text="Bem-vindo de volta!"></Title>
            <SubTitle text="Insira seus dados para acessar sua conta!"></SubTitle>
          </div>

          <div className="h-[24vh] flex flex-col justify-around">
            <InputEmail></InputEmail>
            <InputPassword></InputPassword>
          </div>

          <a href="passReset">
            <Option text="esqueceu a senha?"></Option>
          </a>

          <div className={`w-[100%] flex justify-center mt-[1.3rem]`}>
            <Button text="Login"></Button>
          </div>

          <Line></Line>
          <div className={`flex justify-center text-[0.938rem] mt-[0.4rem]`}>
            <p>
              Não possui uma conta?{" "}
              <a href="signUp" className="text-[#7B9A41]">
                Cadastre-se
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

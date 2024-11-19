import Image from "next/image";

export default function ProfileSide(){
    return(
        <div className=" relative h-screen w-[24.5rem]  bg-[url('/imagens/bgProfile.png')] bg-cover flex justify-center ">
            <div className="absolute inset-0 bg-white opacity-70"></div>
                <div className="z-10 mt-[4.5rem]" >
                    <img src="/imagens/profileIcon.png" alt="" className="mx-auto w-[5.5rem]" />

                    <div id="Linha" className="w-[16rem] h-[0.4px] bg-[#00000074] mt-[2.2rem] mb-[1.4rem]"></div>

                    <div className="h-[9rem] flex flex-col justify-between items-center mt-[1rem] font-bebasNeue text-[24px]">
                        <a href="#"><p>Informações Pessoais</p></a>
                        <a href="#"><p>Método de Pagamento</p></a>
                        <a href="#"><p>Histórico de Compras</p></a>
                    </div>
                </div>   
        </div>
    );
}
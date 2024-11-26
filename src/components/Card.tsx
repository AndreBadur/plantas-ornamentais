export default function Card({nome, descricao, valor, quantidade}){
    return(
        <div className="flex justify-center">
            <div className="bg-[#ffffff] w-[22rem] h-[11rem] mt-[1.4rem] flex items-center">
                <div className="pl-[6%] pb-[3%]  pr-[6%] flex items-center">
                    <img className="w-[6rem]" src="/imagens/vaso.png" alt="" />
                </div>

                <div className="w-[0.2px] h-[84%] bg-black"></div>

                <div className="h-[11rem] pl-[4%] pt-[2%]">
                    <div> 
                        
                        <div className="flex justify-between">
                            <p className="font-bebasNeue text-[1.7rem]">{nome}</p>
                            <img onClick="" className="w-[1.4rem] h-[1.4rem] ml-[5rem] " src="/imagens/closeIcon.png" alt="" />
                        </div>

                        <p className="font-bebasNeue text-[0.95rem] w-[9rem]">{descricao}</p>
                    </div>

                    <div className="flex items-end justify-between h-[55%]">
                        <p>R${valor}</p>
                        <p>Qtd: {quantidade}</p>
                    </div>
                </div>
                
            </div>
        </div>
    )   
}
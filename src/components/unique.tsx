import React, { useState } from "react";

export default function Unique() {
    const [count, setCount] = useState<number>(1);

    const increment = () => {
        setCount((prev) => prev + 1);
    };

    const decrement = () => {
        setCount((prev) => (prev > 1 ? prev - 1 : 1));
    };

    return (
        <div>
            <div className="flex justify-center">
                <div className="w-[82vw] h-[60vh] mt-[6rem] bg-[#ffffff] flex rounded-lg">
                    <div className="w-[50%] flex pl-[4.2vw]">
                        <div className="flex justify-center items-center">
                            <div className="flex flex-col justify-between items-center h-[24vw]">
                                <div className="w-[4.5vw] h-[4.5vw] bg-blue-500"></div>
                                <div className="w-[4.5vw] h-[4.5vw] bg-blue-500"></div>
                                <div className="w-[4.5vw] h-[4.5vw] bg-blue-500"></div>
                                <div className="w-[4.5vw] h-[4.5vw] bg-blue-500"></div>
                                <div className="w-[4.5vw] h-[4.5vw] bg-blue-500"></div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-[24vw] h-[24vw] ml-[1vw] bg-blue-500 items-center"></div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="h-[24vw]">
                            <p className="text-black">[Nome da planta]</p>
                            <div className="w-[24vw] flex justify-between pt-[3vh]">
                                <p>Nome científico: </p>
                                <p>Quantidade: </p>
                            </div>
                            <p className="mt-[1.8vh]">Categoria:</p>
                            <p className="mt-[1.8vh]">Bioma:</p>
                            <p className="mt-[1.8vh]">Cuidados:</p>

                            <div className="mt-[4vh]">
                                <label htmlFor="" className="mt-[4vh]">
                                    Calcular frete <br />
                                </label>
                                <form className="flex items-center bg-gray-100 rounded-full w-[14vw]">
                                    <label className="flex-grow">
                                        <input
                                            type="text"
                                            placeholder="CEP"
                                            className="bg-transparent outline-none text-gray-700 px-4 w-full"
                                        />
                                    </label>
                                    <button
                                        type="submit"
                                        className="bg-green-500 text-white text-sm font-bold rounded-full px-4 py-[1vh]"
                                    >
                                        OK
                                    </button>
                                </form>
                            </div>

                            <div className="flex items-center mt-[2vh] space-x-8">
                                <span className="text-lg font-semibold">R$26,99</span>
                                <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
                                    <button onClick={decrement} className="w-8 h-8 flex items-center justify-center text-lg text-gray-700 rounded-full hover:bg-gray-200" > – </button>
                                    <span className="mx-3 text-[15px]">{count}</span>
                                    <button onClick={increment} className="w-8 h-8 flex items-center justify-center text-lg text-gray-700 rounded-full hover:bg-gray-200" > + </button>
                                </div>
                            </div>

                            {/*Eu não tenho ideia de como fazzer conexão dos seguintes botões no momento: */}
                            <div className="mt-[2vh] w-[30vw] flex justify-between">
                                <button className="w-[10vw] h-[2rem] bg-[#00f511] rounded-lg"> Comprar </button>
                                <button className="w-[14rem] h-[2rem] bg-[#feef64] rounded-lg"> Colocar no carrinho </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="w-[82vw] h-[60vh] mt-[6vh] bg-[#ffffff] flex rounded-lg">
                    <div className="w-[90%] break-words pl-[4.2vw]">
                        <p>Descrição geral</p>
                        <p>[Descrição]</p>
                        <p>Nome popular: kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                        <p>Nome científico: </p>
                        <p>Luminosidade necessária: </p>
                        <p>Ambiente: </p>
                        <p>Rega:</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

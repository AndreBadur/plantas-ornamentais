import React, { useState } from 'react'

export default function Unique() {
    {
        /* Parte para o contador de quantidade, utilizável? */
    }
    const [count, setCount] = useState<number>(1)

    const increment = () => {
        setCount((prev) => prev + 1)
    }

    const decrement = () => {
        setCount((prev) => (prev > 1 ? prev - 1 : 1))
    }

    {
        /* Parte para o carrossel*/
    }

    const images = [
        '/imagens/loginbg.jpg',
        '/imagens/loginbg2.png',
        '/imagens/tulipa.png',
        '/imagens/vaso.png',
        '/imagens/folhagens.png',
    ]

    const [activeImage, setActiveImage] = useState(images[0])

    return (
        <div>
            <div className="flex justify-center">
                <div className="w-[82vw] h-[60vh] mt-[6rem] bg-[#ffffff] flex rounded-lg">
                    <div className="w-[50%] flex pl-[4.2vw]">
                        <div className="flex justify-center items-center">
                            <div className="flex flex-col justify-between items-center h-[24vw]">
                                {images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveImage(img)}
                                        className={`w-[4.5vw] h-[4.5vw] bg-blue-500 rounded-md ${
                                            img === activeImage ? 'ring-2' : ''
                                        }`}
                                    >
                                        <img
                                            src={img}
                                            alt={`Imagem ${index}`}
                                            className="w-full h-full object-cover rounded-md"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Imagem maior */}
                        <div className="flex items-center">
                            <div className="w-[24vw] h-[24vw] ml-[1vw] items-center">
                                <img
                                    src={activeImage}
                                    alt="Imagem selecionada"
                                    className=" h-full w-full object-cover rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center font-openSans">
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
                                            maxlength="9"
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
                                <span className="text-lg font-semibold">
                                    R$26,99
                                </span>
                                <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
                                    <button
                                        onClick={decrement}
                                        className="w-8 h-8 flex items-center justify-center text-lg text-gray-700 rounded-full hover:bg-gray-200"
                                    >
                                        {' '}
                                        –{' '}
                                    </button>
                                    <span className="mx-3 text-[15px]">
                                        {count}
                                    </span>
                                    <button
                                        onClick={increment}
                                        className="w-8 h-8 flex items-center justify-center text-lg text-gray-700 rounded-full hover:bg-gray-200"
                                    >
                                        {' '}
                                        +{' '}
                                    </button>
                                </div>
                            </div>

                            {/*Eu não tenho ideia de como fazer conexão dos seguintes botões no momento: */}
                            <div className="mt-[2vh] w-[26vw] flex justify-between">
                                <button className="w-[10vw] h-[5vh] bg-[#00f511] rounded-[14px]">
                                    <b> Comprar </b>
                                </button>
                                <button className="w-[14rem] h-[5vh] bg-[#feef64] rounded-[14px]">
                                    <b> Colocar no carrinho </b>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="w-[82vw] mt-[4vh] bg-[#ffffff] flex rounded-lg mb-[4vh]">
                    <div className="w-[90%] break-words pl-[4.2vw] font-poppins ">
                        <strong>
                            <p className="text-[4.4vh] mt-[2vh]">
                                Descrição geral
                            </p>
                            <p className="mt-[1vh]">[Descrição]</p>
                            <p className="mt-[1vh]">Nome popular:</p>
                            <p className="mt-[1vh]">Nome científico: </p>
                            <p className="mt-[1vh]">
                                Luminosidade necessária:{' '}
                            </p>
                            <p className="mt-[1vh]">Ambiente: </p>
                            <p className="mt-[1vh] pb-[2vh]">Rega:</p>
                        </strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

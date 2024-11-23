import { useState } from "react";

interface Products{
    children?: React.ReactNode
    title: any;
    price: any;
    description: any;
    image: any;
}

export default function Anuncio(props: Products){

    return (
        <div className="mt-0 ml-10 w-44 h-80 border-2 border-gray-300 rounded-lg p-4 overflow-hidden">
            <a href="" className="flex flex-col items-center h-full">
                <img src={props.image} alt="Anúncio" className="w-full h-auto object-contain" />
                <div className="border-t border-gray-300 w-2/3 mx-auto my-4 justify-center"></div>
                <h1 className="text-black text-sm text-center">{props.title}</h1>
                <h2 className="text-black text-xs text-center">{props.description}</h2>
                <h1 className="text-black text-sm text-center">{props.price}</h1> 
            </a>
        </div> 
    )
}

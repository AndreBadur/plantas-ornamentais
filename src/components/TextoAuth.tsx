import React from "react";

interface FraseTipo {
    text: string; 
  }

export const Titulo: React.FC<FraseTipo> = ({text}) => {
    return(
        <h1 className="font-bebasNeue text-[3.7rem]">{text}</h1>
    )
}

export const SubTitulo: React.FC<FraseTipo> = ({text}) => {
    return(
        <p className="font-bebasNeue text-[1.25rem]">{text}</p>
    )
}

export const Opcao: React.FC<FraseTipo> = ({text}) => {
    return(
        <p className="text-[0.938rem] text-[#7B9A41]">{text}</p>
    )
}

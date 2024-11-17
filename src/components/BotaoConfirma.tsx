import React from "react";

interface FraseTipo {
    text: string; 
}

export const Button: React.FC<FraseTipo> = ({text}) =>{
    return(
        <div>
            <button type="submit" className={`bg-[#00F511] h-[3.1rem] w-[14.8rem] rounded-lg text-[1.5rem] text-[#ffffff] font-bebasNeue`}>{text}</button>
        </div>
    )
}
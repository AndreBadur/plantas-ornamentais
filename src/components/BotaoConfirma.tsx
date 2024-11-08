interface FraseTipo {
    text: string; 
}

export default function Botao({text}){
    return(
        <div>
            <button className={`bg-[#00F511] h-[3.1rem] w-[14.8rem] rounded-lg text-[1.5rem] text-[#ffffff] font-bebasNeue`}>{text}</button>
        </div>
    )
}
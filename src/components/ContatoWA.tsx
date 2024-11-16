import Image from "next/image"

export default function ContatoWA(){
    return (
        <div className={`fixed bottom-0 bg-green-600 flex w-1/4 h-16 rounded-t-3xl`}>
            <div className="mb-3 ml-5 mt-3">
                <Image 
                    src= "/imagens/whatsapp.png"
                    alt="Imagem"
                    width={40}
                    height={40}              
                />
            </div>
            <div className="font-bold mb-5 ml-10 mt-5">
                <h1>WhatsApp</h1>
            </div>
        </div>
    )
}
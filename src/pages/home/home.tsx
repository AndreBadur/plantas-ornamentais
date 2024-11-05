import Bola from "@/components/Bola";

export default function home(){
    return(
        <div>
            <h1>HOME</h1>
            <div className="flex justify-around items-center h-screen w-screen">
                <Bola nome="Teste de Texto" caminho="/imagens/loginbg.jpg"></Bola>
                <Bola />
                <Bola/>
            </div>
        </div>
    )
}
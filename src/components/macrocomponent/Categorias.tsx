import Bola from "../Bola";

export default function Categorias(){
    return(
        <div>
            <div className="flex justify-around items-center h-auto w-screen">
                <Bola nome="Categoria 1" caminho="/imagens/tulipa.png"></Bola>
                <Bola nome="Categoria 2" caminho="/imagens/flor.png"></Bola>
                <Bola nome="Categoria 2" caminho="/imagens/reptil.png"></Bola>
            </div>
        </div>
    )
}
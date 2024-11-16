import Quadrado from "../Quadrado";

export default function Categorias(){
    return(
        <div>
            <div className="flex justify-around items-center h-auto w-screen">
                <Quadrado nome="Plantas de interior" caminho="/imagens/p-interior.png"></Quadrado>
                <Quadrado nome="Paisagismo" caminho="/imagens/paisagismo.png"></Quadrado>
                <Quadrado nome="Folhagens" caminho="/imagens/folhagens.png"></Quadrado>
            </div>
        </div>
    )
}
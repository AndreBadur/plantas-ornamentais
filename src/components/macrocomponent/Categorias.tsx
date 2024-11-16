import Quadrado from "../Quadrado";

export default function Categorias(){
    return(
        <div>
            <div className="flex justify-around items-center h-auto w-screen">
                <a href="">
                    <Quadrado nome="Plantas de interior" caminho="/imagens/p-interior.png"></Quadrado>
                </a>
                <a href="">
                    <Quadrado nome="Paisagismo" caminho="/imagens/paisagismo.png"></Quadrado>
                </a>
                <a href="">
                    <Quadrado nome="Folhagens" caminho="/imagens/folhagens.png"></Quadrado>
                </a>
                
                
                
            </div>
        </div>
    )
}
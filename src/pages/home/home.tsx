import Categorias from "@/components/macrocomponent/Categorias";

export default function home(){
    return(
        <div className="flex flex-col">
            <div>
                <h1>Menu</h1>
            </div>
            <div>
                <h1>Imagem</h1>
            </div>
            <div className="bg-slate-300">
                <Categorias/>
            </div>
            <div>
                <h1>Produtos</h1>
            </div>
            <div>
                <h1>Header</h1>
            </div>
            
        </div>
    )
}
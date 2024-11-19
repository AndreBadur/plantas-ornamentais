export default function MenuAdmin(){

    return(
            <aside className="fixed left-0 bottom-0 top-14 bg-black w-60 h-auto">
                <div className="flex justify-center mt-12">
                    <img className="w-24 h-24" src="/imagens/engrenagem.png" alt="Engrenagem"/>
                </div>
                <div className="flex border-t border-gray-400 w-5/6 mx-auto my-4 justify-center"></div>
                <div className="flex flex-col justify-center space-y-6">
                    <a href="">
                        <h1 className="text-white flex justify-center">DASHBOARD</h1>
                    </a>
                    <a href="">
                        <h1 className="text-white flex justify-center">PRODUTOS</h1>
                    </a>
                    <a href="">
                        <h1 className="text-white flex justify-center">CATEGORIAS</h1>
                    </a>
                    <a href="">
                        <h1 className="text-white flex justify-center">TAGS</h1>
                    </a>
                </div>
            </aside>
    );
}
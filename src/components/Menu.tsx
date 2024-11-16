export default function Menu() {
    return (
        <div className="bg-green-600 fixed top-0 flex items-center w-full h-12">
            <div className="flex ml-10 flex-1">
                <a href="">LOGO</a>
            </div>
            <div className="flex justify-center items-center flex-1 text-black">
                <input type="text" 
                className="bg-transparent border border-white text-white 
                placeholder-white rounded-md p-2 focus:outline-none w-96 h-8"/>
            </div>
            <div className="font-bold flex mr-10 space-x-4 flex-1 justify-end">
                <a href="/login">ENTRAR</a>
                <a href="/signUp">CADASTRAR</a>
            </div>
        </div>
    );
}

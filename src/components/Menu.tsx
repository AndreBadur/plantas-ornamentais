import Link from 'next/link'

export default function Menu() {
    // Supondo que você tenha uma variável isLoggedIn que indica se o usuário está logado
    const isLoggedIn = false // Aqui você pode substituir por uma verificação real de login

    return (
        <div className="bg-green-600 fixed top-0 flex items-center w-full h-14 z-50">
            <div className="flex flex-1">
                <Link href="/" className="w-12 h-12 ml-6">
                    <img src="/imagens/logo.png" alt="Logo" />
                </Link>
            </div>

            {/* Menu de pesquisa */}
            <div className="flex justify-center items-center flex-1 text-black">
                <input
                    type="text"
                    className="bg-transparent border border-white text-white 
                    placeholder-white rounded-md p-2 focus:outline-none w-96 h-8"
                    placeholder="Pesquisar"
                />
            </div>

            {/* Verifica se o usuário está logado ou não */}
            <div className="font-bold flex mr-10 space-x-4 flex-1 justify-end">
                {isLoggedIn ? (
                    // Versão para usuário logado
                    <div className="flex space-x-4">
                        <Link href="profile" className="text-white">
                            PERFIL
                        </Link>
                        <Link href="logout" className="text-white">
                            SAIR
                        </Link>
                    </div>
                ) : (
                    // Versão para usuário deslogado
                    <div className="flex space-x-4">
                        <Link href="login" className="text-white">
                            ENTRAR
                        </Link>
                        <Link href="signUp" className="text-white">
                            CADASTRAR
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

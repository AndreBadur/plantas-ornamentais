export default function CamposLogin(){
    return(
        <div className={`flex flex-col bg-yellow-50`}>
            <h1>E-mail</h1>
            <input type="text" className={`border box-border border-black rounded-md `} ></input>
            <h1>Senha</h1>
            <input type="password" className={`border box-border border-black rounded-md `} ></input>
        </div>
    )
}
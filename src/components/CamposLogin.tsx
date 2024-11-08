export default function CamposLogin(){
    return(
        <div className={`flex flex-col font-bebasNeue w-[24.125rem] `}>
            <h1>E-mail</h1>
            <input type="text" className={`border box-border border-black rounded-md h-[2.813rem] `} ></input>
            <h1 >Senha</h1>
            <input type="password" className={`border box-border border-black rounded-md h-[2.813rem]`} ></input>
        </div>
    )
}
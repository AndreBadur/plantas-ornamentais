export function InputEmail() {
  return (
    <div className={`flex flex-col font-bebasNeue w-[24.125rem] `}>
      <h1>Email</h1>
      <input
        type="text"
        className={`border box-border border-black rounded-md h-[2.813rem] pl-[0.5rem] font-sans`}
        placeholder="Insira seu email"
      ></input>
    </div>
  );
}

export function InputPassword() {
  return (
    <div className={`flex flex-col font-bebasNeue w-[24.125rem] `}>
      <h1>Senha</h1>
      <input
        type="password"
        className={`border box-border border-black rounded-md h-[2.813rem] pl-[0.5rem] font-sans`}
        placeholder="Insira sua senha"
      ></input>
    </div>
  );
}

export function InputConfirmPassword() {
  return (
    <div className={`flex flex-col font-bebasNeue w-[24.125rem] `}>
      <h1>Confirme sua senha</h1>
      <input
        type="password"
        className={`border box-border border-black rounded-md h-[2.813rem] pl-[0.5rem] font-sans`}
        placeholder="Confirme sua senha"
      ></input>
    </div>
  );
}

export function InputName() {
  return (
    <div className={`flex flex-col font-bebasNeue w-[24.125rem]`}>
      <h1>Nome</h1>
      <input
        type="text"
        className={`border box-border border-black rounded-md h-[2.813rem] pl-[0.5rem] font-sans`}
        placeholder="Insira seu nome"
      ></input>
    </div>
  );
}

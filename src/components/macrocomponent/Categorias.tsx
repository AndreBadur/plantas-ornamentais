import Link from "next/link";
import Quadrado from "../Quadrado";

export default function Categorias() {
  return (
    <div>
      <div className="flex justify-around items-center h-auto w-screen">
        <Link href="search">
          <Quadrado
            nome="Plantas de interior"
            caminho="/imagens/p-interior.png"
          ></Quadrado>
        </Link>
        <Link href="search">
          <Quadrado
            nome="Paisagismo"
            caminho="/imagens/paisagismo.png"
          ></Quadrado>
        </Link>
        <Link href="search">
          <Quadrado
            nome="Folhagens"
            caminho="/imagens/folhagens.png"
          ></Quadrado>
        </Link>
      </div>
    </div>
  );
}

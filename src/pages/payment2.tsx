import { useEffect } from "react";
import Menu from "@/components/Menu";
import ContatoWA from "@/components/ContatoWA";
import MenuPagamento from "@/components/MenuPagamento";
import ConfirmaEndereco from "@/components/ConfirmaEndereco";

const Payment: React.FC = () => {
    useEffect(() => {
      // Remover o scroll horizontal
      document.body.style.overflowX = "hidden";
    }, []);

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <Menu/>
      <MenuPagamento/>
      <ConfirmaEndereco/>
      <ContatoWA/>
    </div>
  );
};

export default Payment;

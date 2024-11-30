import { useEffect } from "react";
import Menu from "@/components/Menu";
import ContatoWA from "@/components/ContatoWA";
import MenuPagamento from "@/components/MenuPagamento";
import FormaPagamento from "@/components/FormaPagamento";

const Payment: React.FC = () => {
    useEffect(() => {
      // Remover o scroll horizontal
      document.body.style.overflowX = "hidden";
    }, []);

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <Menu/>
      <MenuPagamento/>
      <FormaPagamento/>
      <ContatoWA/>
    </div>
  );
};

export default Payment;

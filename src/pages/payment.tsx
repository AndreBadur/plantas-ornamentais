import { useEffect } from "react";
import Menu from "@/components/Menu";
import ContatoWA from "@/components/ContatoWA";

const Payment: React.FC = () => {
    useEffect(() => {
      // Remover o scroll horizontal
      document.body.style.overflowX = "hidden";
    }, []);

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <Menu />
      <ContatoWA />
    </div>
  );
};

export default Payment;

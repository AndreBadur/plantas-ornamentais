import { useEffect } from 'react';
import Menu from "@/components/Menu";
import MenuAdmin from "@/components/MenuAdmin";
import ConteudoAdmin from "@/components/ConteudoAdmin";


const Admin: React.FC = () => {
    useEffect(() => {
        // Remover o scroll horizontal
        document.body.style.overflowX = 'hidden';
    }, []);

    return (
        <><><Menu></Menu><MenuAdmin /></><ConteudoAdmin /></>
    );
}

export default Admin;
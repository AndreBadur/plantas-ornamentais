import Menu from "@/components/Menu";
import ProfileSide from "@/components/ProfileSide";
import {PersonalDataForms} from "@/components/DataForms";
export default function Profile(){
    return(
        <>
            <div className="mb-14"> 
                <Menu />
            </div>
            <section className="flex">
                <ProfileSide></ProfileSide>
                <PersonalDataForms 
                    nome= "[nome]" 
                    telefone="[telefone]" 
                    email="[email]" 
                    cep="[cep]" 
                    cidade="[cidade]" 
                    bairro="[bairro]" 
                    rua="[rua]" 
                    complemento="[complemento]" 
                    numero="[numero]">
                </PersonalDataForms>
            </section>
        </>
    );
}
/*
Penei em deixar os input já com seus valores do banco de dados, assim seria mais fácil de visualizar. No entanto, só soube
fazer de 'cabeça' a parte visual, preciso dar uma olhada na documentação do react/node sobre isso. As constantes referentes
a conexão com banco de dados (handleChange e handlesubmit) foram indicações da IA de como poderia ser feito.
*/

import { useState } from 'react';

export function PersonalDataForms({ nome, telefone, email, cep, cidade, bairro, rua, complemento, numero }) {
    const [inputValue, setInputValue] = useState({nome, telefone, email, cep, cidade, bairro, rua, complemento, numero});

    // Função para lidar com a mudança nos inputs (Indicação IA)
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputValue((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    // Função de envio do formulário (indicação IA)
    const handleSubmit = (event) => {
        event.preventDefault(); // Evita o comportamento padrão de envio do formulário
        // Aqui podemos salvar os dados sem a necessidade do uso da action.
    };

    //Seria interessante o uso de macro nos inputs por conta da legibilidade?
    return (
        <div className='w-[58%] font-bebasNeue ml-[4.5rem] mt-[3.4rem]'>
            <h2 className='text-[38px] mb-[2rem]'>Informações Pessoais</h2>
            <form onSubmit={handleSubmit} className='text-[20px]'>
                <label>Identificação</label>
                <div className='flex justify-between mt-[0.2rem]'>
                    <input type="text" value={inputValue.nome} onChange={handleChange} className='w-[48%] border-b border-black'/> 
                    <input type="text" value={inputValue.telefone} onChange={handleChange} className='w-[48%] border-b border-black'/>
                </div>

                <div className='mt-[1.8rem] mb-[2.5rem]'>
                    <input type="email" value={inputValue.email} onChange={handleChange} className='w-[100%] border-b border-black'/>
                </div>

                <label>Endereço</label>
                <div className='flex justify-between mt-[0.2rem]'>
                    <input type="text" value={inputValue.cep} onChange={handleChange} className='w-[30%] border-b border-black'/>
                    <input type="text" value={inputValue.cidade} onChange={handleChange} className='w-[66%] border-b border-black'/>
                </div>
                
                <div className='flex justify-between mt-[1.8rem]'>
                    <input type="text" value={inputValue.bairro} onChange={handleChange} className='w-[40%] border-b border-black'/>
                    <input type="text" value={inputValue.rua} onChange={handleChange} className='w-[56%] border-b border-black'/>
                </div>
                
                <div className='flex justify-between mt-[1.8rem]'>
                    <input type="text" value={inputValue.complemento} onChange={handleChange} className='w-[66%] border-b border-black'/>
                    <input type="text" value={inputValue.numero} onChange={handleChange} className='w-[30%] border-b border-black'/>
                </div>
                
                <div className='mt-[3rem]'>
                    <button type="submit" className='bg-[#00f511] w-[10rem] h-[3rem] rounded-lg text-[24px] text-white'>Salvar</button>
                </div>
                
            </form>
        </div>
    );
}
